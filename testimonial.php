<?php
$feedbackMessage = '';
$feedbackClass = '';
$name = '';
$rating = '';
$comment = '';
$tour = '';
$photoPath = '';
$approvedTestimonial = null;
$testimonialLoadError = false;
$photoError = '';
$availableTours = [
    'Stone Town & Ferme aux Épices',
    'Sandbank Nakupenda',
    'Safari Blue',
    'Kendwa Île de Mnemba, Baraka Aquarium & Kendwa',
    'Grotte de Maalum, Forêt de Jozani & Plage de Mtende',
    'Lagune Bleue, Étoiles de Mer & Plage de Kae Funk',
    'Safari Mikumi',
    'Safari Tarangire & Ngorongoro',
    'Safari Serengeti & Ngorongoro',
];

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$dbHost = getenv('DB_HOST') ?: ($_ENV['DB_HOST'] ?? 'localhost');
$dbUser = getenv('DB_USER') ?: ($_ENV['DB_USER'] ?? 'root');
$dbPass = getenv('DB_PASS') ?: ($_ENV['DB_PASS'] ?? '');
$dbName = getenv('DB_NAME') ?: ($_ENV['DB_NAME'] ?? 'zanzibar_excursions');

try {
    $conn = new mysqli($dbHost, $dbUser, $dbPass, $dbName);
    $conn->set_charset('utf8mb4');
    $statement = $conn->prepare(
        "SELECT name, rate, comment, image_path FROM testimonial WHERE status = 'approved' ORDER BY id DESC LIMIT 1"
    );
    $statement->execute();
    $approvedTestimonial = $statement->get_result()->fetch_assoc() ?: null;
    $statement->close();
    $conn->close();
} catch (mysqli_sql_exception $exception) {
    error_log('Approved testimonial lookup failed: ' . $exception->getMessage());
    $testimonialLoadError = true;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nameInput = $_POST['name'] ?? '';
    $name = is_string($nameInput) ? trim($nameInput) : '';
    $rating = filter_input(INPUT_POST, 'rating', FILTER_VALIDATE_INT);
    $commentInput = $_POST['comment'] ?? '';
    $comment = is_string($commentInput) ? trim($commentInput) : '';
    $tourInput = $_POST['tour'] ?? '';
    $tour = is_string($tourInput) ? trim($tourInput) : '';
    $photo = $_FILES['photo'] ?? null;

    if (
        $name === ''
        || $comment === ''
        || $rating === false
        || $rating === null
        || $rating < 1
        || $rating > 5
        || ($tour !== '' && !in_array($tour, $availableTours, true))
    ) {
        $feedbackMessage = 'Veuillez remplir tous les champs et choisir une note entre 1 et 5.';
        $feedbackClass = 'error';
    } else {
        if (!is_array($photo) || !isset($photo['error']) || !is_int($photo['error'])) {
            $photoError = 'La photo envoyée est invalide.';
        } elseif ($photo['error'] !== UPLOAD_ERR_NO_FILE) {
            if ($photo['error'] !== UPLOAD_ERR_OK) {
                $photoError = 'Le téléchargement de la photo a échoué. Veuillez réessayer.';
            } elseif (!isset($photo['tmp_name'], $photo['size']) || !is_uploaded_file($photo['tmp_name'])) {
                $photoError = 'Le fichier photo envoyé est invalide.';
            } elseif ($photo['size'] < 1 || $photo['size'] > 2 * 1024 * 1024) {
                $photoError = 'La photo ne doit pas dépasser 2 Mo.';
            } else {
                $imageInfo = @getimagesize($photo['tmp_name']);
                $fileInfo = new finfo(FILEINFO_MIME_TYPE);
                $mimeType = $fileInfo->file($photo['tmp_name']);
                $allowedImageTypes = [
                    'image/jpeg' => 'jpg',
                    'image/png' => 'png',
                    'image/webp' => 'webp',
                ];

                if (
                    $imageInfo === false
                    || !isset($allowedImageTypes[$mimeType])
                    || $imageInfo['mime'] !== $mimeType
                    || $imageInfo[0] > 5000
                    || $imageInfo[1] > 5000
                    || ($imageInfo[0] * $imageInfo[1]) > 12000000
                ) {
                    $photoError = 'Choisissez une image JPEG, PNG ou WebP valide.';
                } else {
                    $uploadDirectory = __DIR__ . DIRECTORY_SEPARATOR . 'uploads' . DIRECTORY_SEPARATOR . 'testimonials';
                    if (!is_dir($uploadDirectory) && !mkdir($uploadDirectory, 0755, true) && !is_dir($uploadDirectory)) {
                        $photoError = 'Impossible de préparer le stockage des photos. Veuillez réessayer.';
                    }

                    if ($photoError === '') {
                        $photoFilename = bin2hex(random_bytes(16)) . '.' . $allowedImageTypes[$mimeType];
                        $photoPath = 'uploads/testimonials/' . $photoFilename;

                        if (!move_uploaded_file($photo['tmp_name'], $uploadDirectory . DIRECTORY_SEPARATOR . $photoFilename)) {
                            $photoPath = '';
                            $photoError = 'Impossible d’enregistrer la photo. Veuillez réessayer.';
                        }
                    }
                }
            }
        }

        if ($photoError !== '') {
            $feedbackMessage = $photoError;
            $feedbackClass = 'error';
        } else {
            try {
                $conn = new mysqli($dbHost, $dbUser, $dbPass, $dbName);
                $conn->set_charset('utf8mb4');
                $statement = $conn->prepare(
                    "INSERT INTO testimonial (name, rate, comment, image_path, status) VALUES (?, ?, ?, ?, 'pending')"
                );
                $savedComment = $tour === '' ? $comment : "Tour: {$tour}\n\n{$comment}";
                $savedPhotoPath = $photoPath === '' ? null : $photoPath;
                $statement->bind_param('siss', $name, $rating, $savedComment, $savedPhotoPath);
                $statement->execute();
                $statement->close();
                $conn->close();

                $feedbackMessage = 'Merci ! Votre témoignage a bien été reçu.';
                $feedbackClass = 'success';
                $name = '';
                $rating = '';
                $comment = '';
                $tour = '';
                $photoPath = '';
            } catch (mysqli_sql_exception $exception) {
                if ($photoPath !== '' && is_file(__DIR__ . DIRECTORY_SEPARATOR . str_replace('/', DIRECTORY_SEPARATOR, $photoPath))) {
                    unlink(__DIR__ . DIRECTORY_SEPARATOR . str_replace('/', DIRECTORY_SEPARATOR, $photoPath));
                }
                error_log('Testimonial submission failed: ' . $exception->getMessage());
                $feedbackMessage = 'Une erreur est survenue lors de l’envoi. Veuillez réessayer plus tard.';
                $feedbackClass = 'error';
            }
        }
    }
}
?>
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.min.css"
      integrity="sha512-QeR2VH+lsBE5LSAe1Q5EnTBbe7XTBubt8dG93Y7gidSgdMCr8nVqKcfKAMyN96SV8KDbZVTDXChatu5G2KQGzg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <title> Zanzibar Excursion.co.tz</title>
    <link rel="stylesheet" href="zahor-css.css?v=<?= filemtime(__DIR__ . '/zahor-css.css') ?>" />
  </head>
  <body>
    <div class="top-bar">
      <div class="top-left">
        <span><i class="fa-solid fa-phone" aria-hidden="true"></i> +255 719 277 303</span>
        <span><i class="fa-solid fa-envelope" aria-hidden="true"></i> info@traveleo.com</span>
        <span><i class="fa-solid fa-location-dot" aria-hidden="true"></i> Zanzibar, Tanzania</span>
      </div>
      <div class="social">
        Suivez nous:
        <span><i class="fa-brands fa-facebook-f" aria-label="Facebook"></i></span>
        <span><i class="fa-brands fa-instagram" aria-label="Instagram"></i></span>
      </div>
    </div>

    <section class="gradient-othr testimonial-banner">
      <nav>
        <div class="nav">
          <div class="logo">
            <img src="logos.png" alt="ZanzibarGuide Excursion" />
          </div>
          <div class="navy-link">
            <a href="index.php">Accueil</a>
            <a href="About Us.html">À propos</a>
            <a href="Our Services.html">Nos Services</a>
            <a href="Contact Us.html">Contactez Nous</a>
            <a href="testimonial.php" class="active">Témoignages</a>
          </div>
          <div class="book-btn">
            <label class="language-switcher">
              <span class="visually-hidden">Choose language</span>
              <select class="language-select" aria-label="Choose language">
                <option value="fr">Français</option>
                <option value="en">English</option>
                <option value="sw">Kiswahili</option>
                <option value="ar">العربية</option>
                <option value="es">Español</option>
                <option value="de">Deutsch</option>
                <option value="it">Italiano</option>
                <option value="pt">Português</option>
              </select>
            </label>
            <a href="Contact%20Us.html#contact-form"
              >Réserver maintenant<span></span
            ></a>
          </div>
          <div class="menu">
            <label class="language-switcher">
              <span class="visually-hidden">Choose language</span>
              <select class="language-select" aria-label="Choose language">
                <option value="fr">Français</option>
                <option value="en">English</option>
                <option value="sw">Kiswahili</option>
                <option value="ar">العربية</option>
                <option value="es">Español</option>
                <option value="de">Deutsch</option>
                <option value="it">Italiano</option>
                <option value="pt">Português</option>
              </select>
            </label>
            <button type="button" class="menu-toggle" aria-controls="menu" aria-expanded="false" aria-label="Toggle menu">
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
          <div class="menu-link" id="menu" hidden>
            <a href="index.php">Accueil</a>
            <a href="About Us.html">À propos</a>
            <a href="Our Services.html">Nos Services</a>
            <a href="Contact Us.html">Contactez Nous</a>
            <a href="testimonial.php" class="active">Témoignages</a>
          </div>
        </div>
      </nav>
      <div class="gradient-content-othr">
        <small>Accueil &gt; <span>Témoignages</span></small>
        <h1>Partagez votre témoignage</h1>
        <p>Votre avis nous aide à améliorer les expériences de nos voyageurs.</p>
      </div>
    </section>

    <main class="testimonial-page">
      <section class="traveler-testimonials">
        <h2>Ce que disent nos voyageurs</h2>
        <?php if ($testimonialLoadError): ?>
          <p class="testimonial-feedback error" role="status">
            Impossible de charger les témoignages pour le moment.
          </p>
        <?php elseif ($approvedTestimonial !== null): ?>
          <?php $approvedRating = max(0, min(5, (int)$approvedTestimonial['rate'])); ?>
          <article class="traveler-review-card">
            <div class="traveler-review-heading">
              <?php
                $approvedPhoto = $approvedTestimonial['image_path'] ?? '';
                $approvedPhotoFilename = is_string($approvedPhoto) ? basename($approvedPhoto) : '';
                $approvedPhotoUrl = preg_match('/\A[a-f0-9]{32}\.(?:jpg|png|webp)\z/', $approvedPhotoFilename)
                    ? 'uploads/testimonials/' . $approvedPhotoFilename
                    : '';
              ?>
              <div class="traveler-photo-placeholder" role="img" aria-label="Photo du voyageur">
                <?php if ($approvedPhotoUrl !== ''): ?>
                  <img src="<?= htmlspecialchars($approvedPhotoUrl, ENT_QUOTES, 'UTF-8') ?>" alt="Photo du voyageur" />
                <?php else: ?>
                <i class="fa-solid fa-user" aria-hidden="true"></i>
                <?php endif; ?>
              </div>
              <div>
                <h3>Avis de voyageur</h3>
                <p class="traveler-review-stars" aria-label="<?= $approvedRating ?> sur 5">
                  <?php for ($star = 0; $star < $approvedRating; $star++): ?><i class="fa-solid fa-star" aria-hidden="true"></i><?php endfor; ?>
                </p>
              </div>
              <i class="fa-regular fa-circle-check traveler-review-verified" aria-label="Vérifié"></i>
            </div>
            <p class="traveler-review-comment"><?= nl2br(htmlspecialchars($approvedTestimonial['comment'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8')) ?></p>
            <p class="traveler-review-author">
              <?= htmlspecialchars($approvedTestimonial['name'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?>
              · Voyageur
            </p>
          </article>
        <?php else: ?>
          <p class="traveler-review-empty">
            Les témoignages apparaîtront ici après leur validation.
          </p>
        <?php endif; ?>
      </section>

      <section class="testimonial-form-card">
        <h2>Donnez-nous votre avis</h2>
        <p>Parlez-nous de votre expérience avec nos excursions.</p>
        <?php if ($feedbackMessage !== ''): ?>
          <p class="testimonial-feedback <?= htmlspecialchars($feedbackClass, ENT_QUOTES, 'UTF-8') ?>" role="status">
            <?= htmlspecialchars($feedbackMessage, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?>
          </p>
        <?php endif; ?>
        <form method="post" action="testimonial.php" enctype="multipart/form-data">
          <div class="field">
            <label class="visually-hidden" for="testimonial-name">Votre nom complet</label>
            <input
              id="testimonial-name"
              type="text"
              name="name"
              maxlength="150"
              value="<?= htmlspecialchars($name, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?>"
              placeholder="Votre nom complet"
              required
            />
          </div>
          <div class="field">
            <label class="visually-hidden" for="testimonial-tour">Choisissez votre excursion</label>
            <select id="testimonial-tour" name="tour">
              <option value="">Sélectionnez votre excursion</option>
              <?php foreach ($availableTours as $availableTour): ?>
                <option
                  value="<?= htmlspecialchars($availableTour, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?>"
                  <?= $tour === $availableTour ? 'selected' : '' ?>
                ><?= htmlspecialchars($availableTour, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?></option>
              <?php endforeach; ?>
            </select>
          </div>
          <div class="field testimonial-photo-field">
            <label for="testimonial-photo">Photo du client (facultative)</label>
            <input
              id="testimonial-photo"
              type="file"
              name="photo"
              accept="image/jpeg,image/png,image/webp"
              aria-describedby="testimonial-photo-help testimonial-photo-error"
            />
            <small id="testimonial-photo-help">JPEG, PNG ou WebP — 2 Mo maximum.</small>
            <?php if ($photoError !== ''): ?>
              <small id="testimonial-photo-error" class="testimonial-photo-error" role="alert">
                <?= htmlspecialchars($photoError, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?>
              </small>
            <?php endif; ?>
          </div>
          <div class="field">
            <span class="visually-hidden" id="testimonial-rating-label">Votre note</span>
            <div class="testimonial-rating-options" role="radiogroup" aria-label="Choisissez une note">
              <?php foreach ([5, 4, 3, 2, 1] as $score): ?>
                <label class="rating-option">
                  <input
                    type="radio"
                    name="rating"
                    value="<?= $score ?>"
                    aria-label="<?= $score ?> sur 5"
                    <?= (string)$rating === (string)$score ? 'checked' : '' ?>
                    required
                  />
                  <i class="fa-regular fa-star" aria-hidden="true"></i>
                </label>
              <?php endforeach; ?>
            </div>
          </div>
          <div class="field">
            <label class="visually-hidden" for="testimonial-comment">Votre témoignage</label>
            <textarea
              id="testimonial-comment"
              name="comment"
              rows="3"
              maxlength="2000"
              placeholder="Écrivez votre témoignage..."
              required
            ><?= htmlspecialchars($comment, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?></textarea>
          </div>
          <button type="submit" class="testimonial-submit">Envoyer votre témoignage</button>
        </form>
      </section>
    </main>

    <footer>
      <div class="footer-grid">
        <div>
          <div class="footer-logo">ZanzibarGuide Excursion</div>
          <p>
            Nous sommes toujours à votre disposition pour vous aider à planifier
            les vacances de vos rêves.
          </p>
        </div>
        <div>
          <h3>Liens rapides</h3>
          <ul>
            <li><a href="index.php">Accueil</a></li>
            <li><a href="About Us.html">À propos</a></li>
            <li><a href="Our Services.html">Nos Services</a></li>
            <li><a href="Contact Us.html">Contactez Nous</a></li>
            <li><a href="testimonial.php">Témoignages</a></li>
          </ul>
        </div>
        <div>
          <h3>Meilleures Destinations</h3>
          <ul>
            <li>Île de Mnemba, Baraka Aquarium & Kendwa</li>
            <li>Sandbank Nakupenda</li>
            <li>Stone Town & Ferme aux Épices</li>
            <li>Safari Blue</li>
            <li>Grotte de Maalum, Forêt de Jozani & Plage de Mtende</li>
          </ul>
        </div>
        <div>
          <h3>Assistance</h3>
          <ul>
            <li>
              WhatsApp:<a href="https://wa.me/255714277303" target="_blank" rel="noopener"
                >+255 714 277 303</a
              >
            </li>
            <li>
              <i class="fa-solid fa-envelope" aria-hidden="true"></i> Email:
              <a
                href="https://mail.google.com/mail/?view=cm&fs1&to=allyzahor453@gmail.com"
                target="_blank"
                rel="noopener"
                >allyzahor453@gmail.com</a
              >
            </li>
            <li>
              <i class="fa-brands fa-instagram" aria-hidden="true"></i> Instagram:<a
                href="https://www.istagram.com/@Zanzibar_excursion/"
                target="_blank"
                rel="noopener"
                >@Zanzibar_excursion</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        <span>&copy;2026 ZanzibarGuide Excursion. Tous droits réservés.</span>
        <span>Conditions générales　 |　 Politique de confidentialité</span>
      </div>
    </footer>
    <script src="site-interactions.js?v=<?= filemtime(__DIR__ . '/site-interactions.js') ?>"></script>
    <script src="language-switcher.js?v=<?= filemtime(__DIR__ . '/language-switcher.js') ?>"></script>
  </body>
</html>
