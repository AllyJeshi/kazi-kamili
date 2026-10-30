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
    <title>Zanzibar Excursion.co.tz</title>
    <link rel="icon" type="png" href="logos.png">
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

    <div class="gradient background">
      <nav>
        <div class="nav">
        <div class="logo">
          <img src="logos.png" />
        </div>
        <div class="navy-link">
          <a href="index.php" class="active">Accueil</a>
          <a href="About Us.html">À propos</a>
          <a href="Our Services.html">Nos Services</a>
          <a href="Contact Us.html">Contactez Nous</a>
          <a href="testimonial.php">Témoignages</a>
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
        >Réserver maintenant<span></span></a>
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
          <a href="index.php" class="active">Accueil</a>
          <a href="About Us.html">À propos</a>
          <a href="Our Services.html">Nos Services</a>
          <a href="Contact Us.html">Contactez Nous</a>
          <a href="testimonial.php">Témoignages</a>
        </div>
        </div>
      </nav>
      <div class="gradient-content">
        <small>Découvrez le </small>
        <h1>La magie de Zanzibar et de la Tanzanie</h1>
        <p>
          <span>Inoubliable </span> Aventures, plages immaculées et intemporelles
          Souvenirs.
          Laissez ZanzibarGuide Excursion façonner le voyage de vos rêves, entre
          circuits sur mesure sur l'île, richesse du patrimoine culturel et
          safaris inoubliables au cœur de la faune d'Afrique de l'Est.
        </p>
        <p>
          <span>Politique d'annulation :</span> Veuillez noter qu'aucune
          annulation ou modification n'est acceptée après un délai de 24 heures
          suivant votre réservation.
        </p>
        <a href="Our Services.html" class="hero-btn">Découvrir nos offres <i class="fa-solid fa-plane" aria-hidden="true"></i></a>
        <button type="button" class="video-btn" aria-controls="intro-video-modal" aria-expanded="false">
          <i class="fa-solid fa-circle-play" aria-hidden="true"></i> Regarder la vidéo<br />Comment ça marche
        </button>
      </div>
    </div>
    <div class="search-box">
      <div class="quick-search-heading">
        <h2>Find Your Perfect Zanzibar Adventure</h2>
        <p>Discover exciting excursions and unforgettable experiences in Zanzibar.</p>
      </div>
      <form class="quick-search-form" method="get" action="Our Services.html#activities">
        <div class="quick-search-fields">
          <div class="quick-search-field">
            <label for="activity-search">
              <i class="fa-regular fa-compass" aria-hidden="true"></i>
              Activity or Safari
            </label>
            <select id="activity-search" name="activity">
              <option value="all">All activities and safaris</option>
              <option value="Stone Town & Ferme aux Épices">Stone Town & Spice Farm</option>
              <option value="Sandbank Nakupenda">Nakupenda Sandbank</option>
              <option value="Safari Blue">Blue Safari</option>
              <option value="Kendwa Île de Mnemba, Baraka Aquarium & Kendwa">Mnemba Island, Baraka Aquarium & Kendwa</option>
              <option value="Grotte de Maalum, Forêt de Jozani & Plage de Mtende">Maalum Cave, Jozani Forest & Mtende Beach</option>
              <option value="Lagune Bleue, Étoiles de Mer & Plage de Kae Funk">Blue Lagoon, Starfish & Kae Funk Beach</option>
              <option value="Safari Mikumi">Mikumi Safari</option>
              <option value="Safari Tarangire & Ngorongoro">Tarangire & Ngorongoro Safari</option>
              <option value="Safari Serengeti & Ngorongoro">Serengeti & Ngorongoro Safari</option>
            </select>
          </div>
          <div class="quick-search-field">
            <label for="destination-search">
              <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
              Destination
            </label>
            <select id="destination-search" name="destination">
              <option value="all">Choose destination</option>
              <option value="Zanzibar">Zanzibar</option>
              <option value="Mikumi">Mikumi</option>
              <option value="Tarangire">Tarangire</option>
              <option value="Ngorongoro">Ngorongoro</option>
              <option value="Serengeti">Serengeti</option>
            </select>
          </div>
        </div>
        <button type="submit" class="quick-search-button">
          <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
          Find Your Adventure
        </button>
        <p class="quick-search-promise">
          <i class="fa-regular fa-circle-check" aria-hidden="true"></i>
          Local experiences · Easy booking · Friendly support
        </p>
      </form>
    </div>
    <div class="features">
      <div class="feature">
        <div class="feature-icon"><i class="fa-solid fa-shield-halved" aria-hidden="true"></i></div>
        <div>
          <h4>Garantie du meilleur prix</h4>
          <p>Nous vous garantissons le meilleur prix pour votre voyage</p>
        </div>
      </div>
      <div class="feature">
        <div class="feature-icon"><i class="fa-solid fa-headset" aria-hidden="true"></i></div>
        <div>
          <h4>Assistance client 24/7</h4>
          <p>Nous sommes là pour vous aider à tout moment.</p>
        </div>
      </div>
      <div class="feature">
        <div class="feature-icon"><i class="fa-solid fa-hotel" aria-hidden="true"></i></div>
        <div>
          <h4>Hébergements de qualité</h4>
          <p>
            Une sélection d'hôtels, lodges et resorts adaptés à votre confort et
            votre budget.
          </p>
        </div>
      </div>
      <div class="feature">
        <div class="feature-icon"><i class="fa-solid fa-lock" aria-hidden="true"></i></div>
        <div>
          <h4>Réservation sécurisée</h4>
          <p>Paiements 100% sécurisés et réservations simples et rapides.</p>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="section-title">
        <h1>Excursions Populaires</h1>
        <a href="Our Services.html">View All Tour→</a>
      </div>
      <div class="destinations">
        <div class="destination">
          <img src="nakupenda.jpg" alt="nakupenda beach" />
          <div class="destination-info">
            <h3>Sandbank Nakupenda</h3>
            <p>Zanzibar</p>
          </div>
          <div class="price">
            <p><i class="fa-solid fa-user-group"></i> 2. <del>€245</del> €220 <span>Prix fixe</span></p>
          </div>
        </div>
        <div class="destination">
          <img src="mnemba.jpg" alt="mnemba beach" />
          <div class="destination-info">
            <h3>Île de Mnemba, Baraka Aquarium & Kendwa</h3>
            <p>Zanzibar</p>
          </div>
          <div class="price">
            <p><i class="fa-solid fa-user-group"></i> 2. <del>€245</del> €220 <span>Prix fixe</span></p>
          </div>
        </div>
        <div class="destination">
          <img src="spice2.jpg" alt="natural foood" />
          <div class="destination-info">
            <h3>Stone Town & Ferme aux Épices</h3>
            <p>Zanzibar</p>
          </div>
          <div class="price">
            <p><i class="fa-solid fa-user-group"></i> 2. <del>€198</del> €180 <span>Prix fixe</span></p>
          </div>
        </div>
        <div class="destination">
          <img src="new.jpeg" alt="safari" />
          <div class="destination-info">
            <h3>Safari Blue</h3>
            <p>Zanzibar</p>
          </div>
          <div class="price">
            <p><i class="fa-solid fa-user-group"></i> 2. <del>€245</del> €220 <span>Prix fixe</span></p>
          </div>
        </div>
        <div class="destination">
          <img src="kima.jpeg" alt="mikumi" />
          <div class="destination-info">
            <h3>Grotte de Maalum, Forêt de Jozani & Plage de Mtende</h3>
            <p>Zanzibar</p>
          </div>
          <div class="price">
            <p><i class="fa-solid fa-user-group"></i> 2. <del>€245</del> €220 <span>Prix fixe</span></p>
          </div>
        </div>
        <div class="destination">
          <img src="starfish.jpeg" alt="Safari blue" />
          <div class="destination-info">
            <h3>Lagune Bleue, Étoiles de Mer & Plage de Kae Funk</h3>
            <p>Zanzibar</p>
          </div>
          <div class="price">
            <p><i class="fa-solid fa-user-group"></i> 2. <del>€245</del> €220 <span>Prix fixe</span></p>
          </div>
        </div>
      </div>
    </section>
    <div class="offer-section">
      <div class="offer">
        <small>Offre spéciale</small>
        <h2>L'aventure vous attend !</h2>
        <p>Jusqu'à -10% de réduction sur une sélection de circuits.</p>
        <a href="Our Services.html" >
          Découvrir les offres <i class="fa-solid fa-plane" aria-hidden="true"></i></a
        >
      </div>
      <div class="why">
        <h2>Pourquoi voyager avec nous ?</h2>
        <h1>Des expériences uniques à Zanzibar</h1>
        <p>Nous créons des voyages sur-mesure pour vous faire découvrir le meilleur de notre île en toute sécurité et sérénité</p>
      </div>
        <div class="why-grid">
          <div class="why-item">
            <span><i class="fa-solid fa-user-tie" aria-hidden="true"></i></span>
            <h3>Guides expérimentés</h3>
            <p>
              Des guides locaux passionnés et expérimentés qui font revivre
              l'histoire, la culture et la faune sauvage.
            </p>
          </div>
          <div class="why-item">
            <span><i class="fa-solid fa-car" aria-hidden="true"></i></span>
            <h3>Transport fiable</h3>
            <p>
              Des véhicules modernes et bien entretenus avec des chauffeurs
              expérimentés pour des déplacements sûrs et agréables.
            </p>
          </div>
          <div class="why-item">
            <span><i class="fa-solid fa-camera" aria-hidden="true"></i></span>
            <h3>Expériences inoubliables</h3>
            <p>
              Des expériences uniques qui vous laisseront des souvenirs gravés à
              jamais.
            </p>
          </div>
          <div class="why-item">
            <span><i class="fa-solid fa-map" aria-hidden="true"></i></span>
            <h3>Tarifs abordables</h3>
            <p>
              Un rapport qualité-prix d'exception et des formules flexibles
              adaptées à tous les budgets.
            </p>
          </div>
        </div>
    </div>
    <div class="comment">
      <h1>Ce que disent nos voyageurs</h1>
      <p><a href="testimonial.php">Partagez votre témoignage</a></p>
      <div class="comment-in">
    <?php
$dbHost = getenv('DB_HOST') ?: ($_ENV['DB_HOST'] ?? 'localhost');
$dbUser = getenv('DB_USER') ?: ($_ENV['DB_USER'] ?? 'root');
$dbPass = getenv('DB_PASS') ?: ($_ENV['DB_PASS'] ?? '');
$dbName = getenv('DB_NAME') ?: ($_ENV['DB_NAME'] ?? 'zanzibar_excursions');

$conn = new mysqli($dbHost, $dbUser, $dbPass, $dbName);
$result = $conn->query("SELECT * FROM testimonial WHERE status='approved' ORDER BY id DESC LIMIT 3");

if ($result->num_rows === 0) {
    echo "<p class='testimonial-empty'>Les témoignages apparaîtront ici après leur validation.</p>";
}

while ($row = $result->fetch_assoc()) {
    $rating = max(0, min(5, (int)$row['rate']));
    echo "<div class='testimonial-card'>";
    $photoFilename = isset($row['image_path']) ? basename((string)$row['image_path']) : '';
    if (preg_match('/\A[a-f0-9]{32}\.(?:jpg|png|webp)\z/', $photoFilename)) {
        echo "<img class='testimonial-card-photo' src='uploads/testimonials/" . htmlspecialchars($photoFilename, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') . "' alt='Photo de " . htmlspecialchars($row['name'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') . "' />";
    } else {
        echo "<span class='testimonial-card-photo testimonial-card-photo-placeholder' aria-hidden='true'><i class='fa-solid fa-user'></i></span>";
    }
    echo "<h4>" . htmlspecialchars($row['name'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') . "</h4>";
    echo "<p class='testimonial-rating' aria-label='" . $rating . " sur 5'>";
    for ($star = 0; $star < $rating; $star++) {
        echo "<i class='fa-solid fa-star' aria-hidden='true'></i>";
    }
    echo "</p>";
    echo "<p class='testimonial-comment'>" . nl2br(htmlspecialchars($row['comment'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8')) . "</p>";
    echo "<button type='button' class='testimonial-more-toggle' aria-expanded='false' hidden>";
    echo "<span class='testimonial-more-label'>Voir plus</span>";
    echo "<span class='testimonial-less-label' hidden>Voir moins</span>";
    echo "</button>";
    echo "</div>";
}
?>
    </div>
</div>
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
              WhatsApp:<a href="https://wa.me/255714277303" target="_blank"
                >+255 714 277 303</a
              >
            </li>
            <li>
              <i class="fa-solid fa-envelope" aria-hidden="true"></i> Email:
              <a
                href="https://mail.google.com/mail/?view=cm&fs1&to=allyzahor453@gmail.com"
                target="_blank"
                >allyzahor453@gmail.com</a
              >
            </li>
            <li>
              <i class="fa-brands fa-instagram" aria-hidden="true"></i> Instagram:<a
                href="https://www.istagram.com/@Zanzibar_excursion/"
                target="_blank"
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
    <div class="video-modal" id="intro-video-modal" role="dialog" aria-modal="true" aria-labelledby="intro-video-title" hidden>
      <div class="video-dialog">
        <div class="video-dialog-header">
          <h2 id="intro-video-title">Comment ça marche</h2>
          <button type="button" class="video-close" aria-label="Fermer la vidéo">
            <i class="fa-solid fa-xmark" aria-hidden="true"></i>
            <span>Fermer la vidéo</span>
          </button>
        </div>
        <video src="vde.mp4" id="video" muted playsinline controls>
          Your browser does not support the video tag.
        </video>
        <p class="video-status" aria-live="polite" hidden></p>
      </div>
    </div>
    <script src="site-interactions.js?v=<?= filemtime(__DIR__ . '/site-interactions.js') ?>"></script>
    <script src="language-switcher.js?v=<?= filemtime(__DIR__ . '/language-switcher.js') ?>"></script>
  </body>
</html>
