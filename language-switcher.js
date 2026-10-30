const languageCodes = ["en", "sw", "ar", "es", "de", "it", "pt"];
const phrases = {
  "Voir plus": ["See more", "Ona zaidi", "عرض المزيد", "Ver más", "Mehr anzeigen", "Mostra altro", "Ver mais"],
  "Voir moins": ["See less", "Ona kidogo", "عرض أقل", "Ver menos", "Weniger anzeigen", "Mostra meno", "Ver menos"],
  "Find Your Perfect Zanzibar Adventure": ["Find Your Perfect Zanzibar Adventure", "Pata Matukio Bora Zanzibar", "اعثر على مغامرتك المثالية في زنجبار", "Encuentra tu aventura perfecta en Zanzíbar", "Finden Sie Ihr perfektes Sansibar-Abenteuer", "Trova la tua avventura perfetta a Zanzibar", "Encontre a aventura perfeita em Zanzibar"],
  "Discover exciting excursions and unforgettable experiences in Zanzibar.": ["Discover exciting excursions and unforgettable experiences in Zanzibar.", "Gundua ziara za kusisimua na matukio yasiyosahaulika Zanzibar.", "اكتشف رحلات مشوقة وتجارب لا تُنسى في زنجبار.", "Descubre excursiones emocionantes y experiencias inolvidables en Zanzíbar.", "Entdecken Sie aufregende Ausflüge und unvergessliche Erlebnisse auf Sansibar.", "Scopri escursioni emozionanti ed esperienze indimenticabili a Zanzibar.", "Descubra passeios emocionantes e experiências inesquecíveis em Zanzibar."],
  "Activity or Safari": ["Activity or Safari", "Shughuli au Safari", "نشاط أو سفاري", "Actividad o safari", "Aktivität oder Safari", "Attività o safari", "Atividade ou safári"],
  "All activities and safaris": ["All activities and safaris", "Shughuli na safari zote", "جميع الأنشطة ورحلات السفاري", "Todas las actividades y safaris", "Alle Aktivitäten und Safaris", "Tutte le attività e i safari", "Todas as atividades e safáris"],
  "Stone Town & Spice Farm": ["Stone Town & Spice Farm", "Stone Town na Shamba la Viungo", "ستون تاون ومزرعة التوابل", "Stone Town y granja de especias", "Stone Town & Gewürzfarm", "Stone Town e fattoria delle spezie", "Stone Town e fazenda de especiarias"],
  "Nakupenda Sandbank": ["Nakupenda Sandbank", "Ufukwe wa Mchanga wa Nakupenda", "رمال ناكوبيندا", "Banco de arena Nakupenda", "Sandbank Nakupenda", "Banco di sabbia Nakupenda", "Banco de areia Nakupenda"],
  "Blue Safari": ["Blue Safari", "Safari ya Baharini", "سفاري بلو", "Safari Blue", "Blue Safari", "Safari Blue", "Safari Blue"],
  "Mnemba Island, Baraka Aquarium & Kendwa": ["Mnemba Island, Baraka Aquarium & Kendwa", "Kisiwa cha Mnemba, Aquarium ya Baraka na Kendwa", "جزيرة منيمبا وأكواريوم باراكا وكيندوا", "Isla Mnemba, acuario Baraka y Kendwa", "Insel Mnemba, Baraka Aquarium & Kendwa", "Isola di Mnemba, Baraka Aquarium e Kendwa", "Ilha Mnemba, Baraka Aquarium e Kendwa"],
  "Maalum Cave, Jozani Forest & Mtende Beach": ["Maalum Cave, Jozani Forest & Mtende Beach", "Pango la Maalum, Msitu wa Jozani na Ufukwe wa Mtende", "كهف مالوم وغابة جوزاني وشاطئ متندي", "Cueva Maalum, bosque Jozani y playa Mtende", "Maalum-Höhle, Jozani-Wald & Mtende-Strand", "Grotta Maalum, foresta di Jozani e spiaggia di Mtende", "Caverna Maalum, floresta Jozani e praia de Mtende"],
  "Blue Lagoon, Starfish & Kae Funk Beach": ["Blue Lagoon, Starfish & Kae Funk Beach", "Laguna ya Bluu, Nyota wa Baharini na Ufukwe wa Kae Funk", "البحيرة الزرقاء ونجمات البحر وشاطئ كاي فونك", "Laguna Azul, estrellas de mar y playa Kae Funk", "Blaue Lagune, Seesterne & Kae-Funk-Strand", "Laguna Blu, stelle marine e spiaggia di Kae Funk", "Lagoa Azul, estrelas-do-mar e praia Kae Funk"],
  "Mikumi Safari": ["Mikumi Safari", "Safari ya Mikumi", "سفاري ميكومي", "Safari de Mikumi", "Mikumi-Safari", "Safari di Mikumi", "Safári de Mikumi"],
  "Tarangire & Ngorongoro Safari": ["Tarangire & Ngorongoro Safari", "Safari ya Tarangire na Ngorongoro", "سفاري تارנגيري ونغورونغورو", "Safari de Tarangire y Ngorongoro", "Tarangire- & Ngorongoro-Safari", "Safari di Tarangire e Ngorongoro", "Safári de Tarangire e Ngorongoro"],
  "Serengeti & Ngorongoro Safari": ["Serengeti & Ngorongoro Safari", "Safari ya Serengeti na Ngorongoro", "سفاري سيرينغيتي ونغورونغورو", "Safari de Serengeti y Ngorongoro", "Serengeti- & Ngorongoro-Safari", "Safari di Serengeti e Ngorongoro", "Safári de Serengeti e Ngorongoro"],
  "Destination": ["Destination", "Unakoenda", "الوجهة", "Destino", "Reiseziel", "Destinazione", "Destino"],
  "Date du voyage": ["Tour date", "Tarehe ya safari", "تاريخ الرحلة", "Fecha del viaje", "Reisedatum", "Data del viaggio", "Data da viagem"],
  "Choose destination": ["Choose destination", "Chagua unakoenda", "اختر الوجهة", "Elige un destino", "Reiseziel auswählen", "Scegli la destinazione", "Escolha o destino"],
  "Find Your Adventure": ["Find Your Adventure", "Tafuta Matukio Yako", "اعثر على مغامرتك", "Encuentra tu aventura", "Finden Sie Ihr Abenteuer", "Trova la tua avventura", "Encontre sua aventura"],
  "Local experiences · Easy booking · Friendly support": ["Local experiences · Easy booking · Friendly support", "Matukio ya ndani · Uhifadhi rahisi · Msaada rafiki", "تجارب محلية · حجز سهل · دعم ودود", "Experiencias locales · Reserva fácil · Atención cercana", "Lokale Erlebnisse · Einfache Buchung · Freundlicher Support", "Esperienze locali · Prenotazione facile · Assistenza cordiale", "Experiências locais · Reserva fácil · Atendimento amigável"],
  "Aucune activité ne correspond à votre recherche.": ["No activities match your search.", "Hakuna shughuli zinazolingana na utafutaji wako.", "لا توجد أنشطة تطابق بحثك.", "Ninguna actividad coincide con tu búsqueda.", "Keine Aktivitäten entsprechen Ihrer Suche.", "Nessuna attività corrisponde alla tua ricerca.", "Nenhuma atividade corresponde à sua pesquisa."],
  "Accueil": ["Home", "Nyumbani", "الرئيسية", "Inicio", "Startseite", "Home", "Início"],
  "Accueil >": ["Home >", "Nyumbani >", "> الرئيسية", "Inicio >", "Startseite >", "Home >", "Início >"],
  "À propos": ["About Us", "Kuhusu Sisi", "من نحن", "Sobre nosotros", "Über uns", "Chi siamo", "Sobre nós"],
  "Sécurité et Sûreté": ["Safety and Security", "Usalama na Ulinzi", "السلامة والأمن", "Seguridad y protección", "Sicherheit und Schutz", "Sicurezza e protezione", "Segurança e proteção"],
  "Nous faisons de votre sécurité et de votre confort notre priorité absolue en garantissant un transport fiable, des guides professionnels et des excursions bien organisées pour une expérience de voyage en toute sérénité.": [
    "We make your safety and comfort our top priority by providing reliable transportation, professional guides, and well-organized excursions for a worry-free travel experience.",
    "Tunatanguliza usalama na faraja yako kwa kuhakikisha usafiri wa kuaminika, waongoza watalii wa kitaalamu na ziara zilizopangwa vizuri, ili uwe na safari yenye utulivu.",
    "نجعل سلامتك وراحتك أولويتنا القصوى من خلال توفير وسائل نقل موثوقة ومرشدين محترفين ورحلات منظمة جيدًا لتستمتع بتجربة سفر مطمئنة.",
    "Hacemos de su seguridad y comodidad nuestra máxima prioridad, ofreciendo transporte fiable, guías profesionales y excursiones bien organizadas para que disfrute de un viaje tranquilo.",
    "Ihre Sicherheit und Ihr Komfort haben für uns oberste Priorität. Wir sorgen für zuverlässige Transporte, professionelle Reiseleiter und gut organisierte Ausflüge, damit Sie unbeschwert reisen können.",
    "La vostra sicurezza e il vostro comfort sono la nostra massima priorità: garantiamo trasporti affidabili, guide professionali ed escursioni ben organizzate per un viaggio sereno.",
    "Fazemos da sua segurança e conforto a nossa prioridade, oferecendo transporte confiável, guias profissionais e excursões bem organizadas para uma viagem tranquila."
  ],
  "Nos Services": ["Our Services", "Huduma Zetu", "خدماتنا", "Nuestros servicios", "Unsere Leistungen", "I nostri servizi", "Nossos serviços"],
  "Contactez Nous": ["Contact Us", "Wasiliana Nasi", "اتصل بنا", "Contáctanos", "Kontakt", "Contattaci", "Fale conosco"],
  "Témoignages": ["Testimonials", "Ushuhuda", "الشهادات", "Testimonios", "Erfahrungsberichte", "Testimonianze", "Depoimentos"],
  "Partagez votre témoignage": ["Share your testimonial", "Shiriki ushuhuda wako", "شاركنا تجربتك", "Comparte tu testimonio", "Teilen Sie Ihren Erfahrungsbericht", "Condividi la tua testimonianza", "Compartilhe seu depoimento"],
  "Donnez-nous votre avis": ["Share your feedback", "Tupe maoni yako", "شاركنا رأيك", "Déjanos tu opinión", "Geben Sie uns Ihr Feedback", "Lascia il tuo feedback", "Dê sua opinião"],
  "Parlez-nous de votre expérience avec nos excursions.": ["Tell us about your experience with our tours.", "Tuambie kuhusu uzoefu wako kwenye ziara zetu.", "أخبرنا عن تجربتك في جولاتنا.", "Cuéntanos tu experiencia con nuestras excursiones.", "Erzählen Sie uns von Ihren Erlebnissen mit unseren Touren.", "Raccontaci la tua esperienza con i nostri tour.", "Conte-nos sobre sua experiência com nossos passeios."],
  "Votre nom complet": ["Your full name", "Jina lako kamili", "اسمك الكامل", "Tu nombre completo", "Ihr vollständiger Name", "Il tuo nome completo", "Seu nome completo"],
  "Choisissez votre excursion": ["Choose your tour", "Chagua ziara yako", "اختر جولتك", "Elige tu excursión", "Wählen Sie Ihre Tour", "Scegli il tuo tour", "Escolha seu passeio"],
  "Sélectionnez votre excursion": ["Select your tour", "Chagua ziara yako", "اختر جولتك", "Selecciona tu excursión", "Wählen Sie Ihre Tour", "Seleziona il tuo tour", "Selecione seu passeio"],
  "Votre note": ["Your rating", "Kiwango chako", "تقييمك", "Tu valoración", "Ihre Bewertung", "La tua valutazione", "Sua avaliação"],
  "Choisissez une note": ["Choose a rating", "Chagua kiwango", "اختر تقييمًا", "Elige una valoración", "Bewertung auswählen", "Scegli una valutazione", "Escolha uma avaliação"],
  "Écrivez votre témoignage...": ["Write your review...", "Andika ushuhuda wako...", "اكتب رأيك...", "Escribe tu opinión...", "Schreiben Sie Ihre Bewertung...", "Scrivi la tua recensione...", "Escreva seu depoimento..."],
  "Photo du client (facultative)": ["Customer photo (optional)", "Picha ya mteja (si lazima)", "صورة العميل (اختيارية)", "Foto del cliente (opcional)", "Kundenfoto (optional)", "Foto del cliente (facoltativa)", "Foto do cliente (opcional)"],
  "JPEG, PNG ou WebP — 2 Mo maximum.": ["JPEG, PNG or WebP — 2 MB maximum.", "JPEG, PNG au WebP — kiwango cha juu cha MB 2.", "JPEG أو PNG أو WebP — بحد أقصى 2 ميغابايت.", "JPEG, PNG o WebP — máximo 2 MB.", "JPEG, PNG oder WebP — maximal 2 MB.", "JPEG, PNG o WebP — massimo 2 MB.", "JPEG, PNG ou WebP — máximo de 2 MB."],
  "Photo du voyageur": ["Traveler photo", "Picha ya msafiri", "صورة المسافر", "Foto del viajero", "Reisendenfoto", "Foto del viaggiatore", "Foto do viajante"],
  "La photo envoyée est invalide.": ["The submitted photo is invalid.", "Picha iliyotumwa si sahihi.", "الصورة المرسلة غير صالحة.", "La foto enviada no es válida.", "Das hochgeladene Foto ist ungültig.", "La foto inviata non è valida.", "A foto enviada é inválida."],
  "Le téléchargement de la photo a échoué. Veuillez réessayer.": ["The photo upload failed. Please try again.", "Upakiaji wa picha umeshindwa. Tafadhali jaribu tena.", "فشل تحميل الصورة. يرجى المحاولة مرة أخرى.", "No se pudo subir la foto. Inténtalo de nuevo.", "Der Foto-Upload ist fehlgeschlagen. Bitte versuchen Sie es erneut.", "Caricamento della foto non riuscito. Riprova.", "O envio da foto falhou. Tente novamente."],
  "Le fichier photo envoyé est invalide.": ["The uploaded photo file is invalid.", "Faili la picha lililotumwa si sahihi.", "ملف الصورة المرفوع غير صالح.", "El archivo de foto subido no es válido.", "Die hochgeladene Fotodatei ist ungültig.", "Il file della foto caricato non è valido.", "O arquivo de foto enviado é inválido."],
  "La photo ne doit pas dépasser 2 Mo.": ["The photo must not exceed 2 MB.", "Picha haipaswi kuzidi MB 2.", "يجب ألا يتجاوز حجم الصورة 2 ميغابايت.", "La foto no debe superar los 2 MB.", "Das Foto darf höchstens 2 MB groß sein.", "La foto non deve superare i 2 MB.", "A foto não pode exceder 2 MB."],
  "Choisissez une image JPEG, PNG ou WebP valide.": ["Choose a valid JPEG, PNG or WebP image.", "Chagua picha halali ya JPEG, PNG au WebP.", "اختر صورة JPEG أو PNG أو WebP صالحة.", "Elige una imagen JPEG, PNG o WebP válida.", "Wählen Sie ein gültiges JPEG-, PNG- oder WebP-Bild.", "Scegli un'immagine JPEG, PNG o WebP valida.", "Escolha uma imagem JPEG, PNG ou WebP válida."],
  "Impossible de préparer le stockage des photos. Veuillez réessayer.": ["Photo storage could not be prepared. Please try again.", "Imeshindikana kuandaa hifadhi ya picha. Tafadhali jaribu tena.", "تعذر تجهيز مساحة تخزين الصور. يرجى المحاولة مرة أخرى.", "No se pudo preparar el almacenamiento de fotos. Inténtalo de nuevo.", "Der Fotospeicher konnte nicht vorbereitet werden. Bitte versuchen Sie es erneut.", "Impossibile preparare l'archivio delle foto. Riprova.", "Não foi possível preparar o armazenamento de fotos. Tente novamente."],
  "Impossible d’enregistrer la photo. Veuillez réessayer.": ["The photo could not be saved. Please try again.", "Imeshindikana kuhifadhi picha. Tafadhali jaribu tena.", "تعذر حفظ الصورة. يرجى المحاولة مرة أخرى.", "No se pudo guardar la foto. Inténtalo de nuevo.", "Das Foto konnte nicht gespeichert werden. Bitte versuchen Sie es erneut.", "Impossibile salvare la foto. Riprova.", "Não foi possível salvar a foto. Tente novamente."],
  "Avis de voyageur": ["Traveler review", "Ushuhuda wa msafiri", "تقييم مسافر", "Opinión de un viajero", "Reisebewertung", "Recensione di un viaggiatore", "Avaliação de viajante"],
  "Vérifié": ["Verified", "Imethibitishwa", "تم التحقق", "Verificado", "Verifiziert", "Verificato", "Verificado"],
  "Voyageur": ["Traveler", "Msafiri", "مسافر", "Viajero", "Reisender", "Viaggiatore", "Viajante"],
  "Tour:": ["Tour:", "Ziara:", "الجولة:", "Excursión:", "Tour:", "Tour:", "Passeio:"],
  "Impossible de charger les témoignages pour le moment.": ["Testimonials cannot be loaded right now.", "Imeshindikana kupakia ushuhuda kwa sasa.", "تعذر تحميل الشهادات حاليًا.", "No se pueden cargar los testimonios en este momento.", "Erfahrungsberichte können derzeit nicht geladen werden.", "Impossibile caricare le testimonianze al momento.", "Não foi possível carregar os depoimentos no momento."],
  "Les témoignages sont vérifiés avant d’être publiés sur notre site.": ["Testimonials are reviewed before being published on our website.", "Ushuhuda hukaguliwa kabla ya kuchapishwa kwenye tovuti yetu.", "تتم مراجعة الشهادات قبل نشرها على موقعنا.", "Los testimonios se revisan antes de publicarse en nuestro sitio web.", "Erfahrungsberichte werden vor der Veröffentlichung auf unserer Website geprüft.", "Le testimonianze vengono verificate prima della pubblicazione sul nostro sito.", "Os depoimentos são revisados antes de serem publicados em nosso site."],
  "Votre avis nous aide à améliorer les expériences de nos voyageurs.": ["Your feedback helps us improve our travelers' experiences.", "Maoni yako yanatusaidia kuboresha uzoefu wa wasafiri wetu.", "تساعدنا آراؤك على تحسين تجارب المسافرين.", "Tu opinión nos ayuda a mejorar la experiencia de nuestros viajeros.", "Ihr Feedback hilft uns, die Erlebnisse unserer Reisenden zu verbessern.", "Il tuo feedback ci aiuta a migliorare le esperienze dei nostri viaggiatori.", "Sua opinião nos ajuda a melhorar as experiências dos nossos viajantes."],
  "Envoyer votre témoignage": ["Submit your testimonial", "Tuma ushuhuda wako", "أرسل شهادتك", "Enviar tu testimonio", "Erfahrungsbericht senden", "Invia la tua testimonianza", "Enviar seu depoimento"],
  "Veuillez remplir tous les champs et choisir une note entre 1 et 5.": ["Please fill in all fields and choose a rating from 1 to 5.", "Tafadhali jaza sehemu zote na uchague kiwango kuanzia 1 hadi 5.", "يرجى ملء جميع الحقول واختيار تقييم من 1 إلى 5.", "Completa todos los campos y elige una valoración del 1 al 5.", "Bitte füllen Sie alle Felder aus und wählen Sie eine Bewertung von 1 bis 5.", "Compila tutti i campi e scegli una valutazione da 1 a 5.", "Preencha todos os campos e escolha uma avaliação de 1 a 5."],
  "Une erreur est survenue lors de l’envoi. Veuillez réessayer plus tard.": ["An error occurred while submitting. Please try again later.", "Hitilafu imetokea wakati wa kutuma. Tafadhali jaribu tena baadaye.", "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى لاحقًا.", "Se produjo un error al enviar. Inténtalo de nuevo más tarde.", "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.", "Si è verificato un errore durante l'invio. Riprova più tardi.", "Ocorreu um erro ao enviar. Tente novamente mais tarde."],
  "Recherche rapide": ["Quick search", "Tafuta haraka", "بحث سريع", "Búsqueda rápida", "Schnellsuche", "Ricerca rapida", "Busca rápida"],
  "Activité ou safari": ["Activity or safari", "Shughuli au safari", "نشاط أو سفاري", "Actividad o safari", "Aktivität oder Safari", "Attività o safari", "Atividade ou safári"],
  "Toutes les activités et safaris": ["All activities and safaris", "Shughuli na safari zote", "جميع الأنشطة ورحلات السفاري", "Todas las actividades y safaris", "Alle Aktivitäten und Safaris", "Tutte le attività e i safari", "Todas as atividades e safáris"],
  "Rechercher": ["Search", "Tafuta", "ابحث", "Buscar", "Suchen", "Cerca", "Pesquisar"],
  "Les témoignages apparaîtront ici après leur validation.": ["Testimonials will appear here after approval.", "Ushuhuda utaonekana hapa baada ya kuidhinishwa.", "ستظهر الشهادات هنا بعد الموافقة عليها.", "Los testimonios aparecerán aquí después de su aprobación.", "Erfahrungsberichte erscheinen hier nach ihrer Freigabe.", "Le testimonianze appariranno qui dopo l'approvazione.", "Os depoimentos aparecerão aqui após a aprovação."],
  "Réserver maintenant": ["Book Now", "Weka Nafasi Sasa", "احجز الآن", "Reservar ahora", "Jetzt buchen", "Prenota ora", "Reserve agora"],
  "Découvrez le": ["Discover", "Gundua", "اكتشف", "Descubre", "Entdecken Sie", "Scopri", "Descubra"],
  "La magie de Zanzibar et de la Tanzanie": ["The magic of Zanzibar and Tanzania", "Uchawi wa Zanzibar na Tanzania", "سحر زنجبار وتنزانيا", "La magia de Zanzíbar y Tanzania", "Der Zauber Sansibars und Tansanias", "La magia di Zanzibar e della Tanzania", "A magia de Zanzibar e da Tanzânia"],
  "Inoubliable": ["Unforgettable", "Yasiyosahaulika", "لا تُنسى", "Inolvidable", "Unvergesslich", "Indimenticabile", "Inesquecível"],
  "Aventures, plages immaculées et intemporelles Souvenirs.": ["Adventures, pristine beaches and timeless memories.", "Matukio, fukwe safi na kumbukumbu za kudumu.", "مغامرات وشواطئ بكر وذكريات تدوم.", "Aventuras, playas vírgenes y recuerdos inolvidables.", "Abenteuer, unberührte Strände und unvergessliche Erinnerungen.", "Avventure, spiagge incontaminate e ricordi senza tempo.", "Aventuras, praias imaculadas e memórias inesquecíveis."],
  "Laissez ZanzibarGuide Excursion façonner le voyage de vos rêves, entre circuits sur mesure sur l'île, richesse du patrimoine culturel et safaris inoubliables au cœur de la faune d'Afrique de l'Est.": [
    "Let ZanzibarGuide Excursion shape your dream trip with tailor-made island tours, rich cultural heritage and unforgettable East African wildlife safaris.",
    "ZanzibarGuide Excursion itakuandalia safari ya ndoto zako: ziara maalum za kisiwa, urithi tajiri wa utamaduni na safari zisizosahaulika za wanyamapori Afrika Mashariki.",
    "دع ZanzibarGuide Excursion تصمم رحلة أحلامك بين جولات مخصصة في الجزيرة وتراث ثقافي غني ورحلات سفاري لا تُنسى في قلب الحياة البرية بشرق أفريقيا.",
    "Deja que ZanzibarGuide Excursion diseñe el viaje de tus sueños, con recorridos a medida por la isla, un rico patrimonio cultural y safaris inolvidables por la fauna de África Oriental.",
    "Lassen Sie ZanzibarGuide Excursion Ihre Traumreise gestalten – mit maßgeschneiderten Inselrundfahrten, reichem Kulturerbe und unvergesslichen Safaris in der Tierwelt Ostafrikas.",
    "Lascia che ZanzibarGuide Excursion dia forma al viaggio dei tuoi sogni, tra tour su misura dell'isola, un ricco patrimonio culturale e indimenticabili safari nella natura dell'Africa orientale.",
    "Deixe a ZanzibarGuide Excursion criar a viagem dos seus sonhos, com passeios personalizados pela ilha, um rico patrimônio cultural e safáris inesquecíveis pela vida selvagem da África Oriental."
  ],
  "Découvrir nos offres": ["Explore our tours", "Gundua Ziara Zetu", "اكتشف جولاتنا", "Descubre nuestros tours", "Entdecken Sie unsere Touren", "Scopri i nostri tour", "Conheça nossos passeios"],
  "Regarder la vidéo": ["Watch the video", "Tazama video", "شاهد الفيديو", "Ver el video", "Video ansehen", "Guarda il video", "Assistir ao vídeo"],
  "Comment ça marche": ["How it works", "Jinsi inavyofanya kazi", "كيف تعمل", "Cómo funciona", "So funktioniert es", "Come funziona", "Como funciona"],
  "Fermer la vidéo": ["Close video", "Funga video", "إغلاق الفيديو", "Cerrar video", "Video schließen", "Chiudi il video", "Fechar vídeo"],
  "La vidéo ne démarre pas automatiquement. Appuyez sur lecture.": [
    "The video did not start automatically. Press play on the video.",
    "Video haijaanza moja kwa moja. Bonyeza play kwenye video.",
    "لم يبدأ الفيديو تلقائيًا. اضغط على زر التشغيل في الفيديو.",
    "El video no se inició automáticamente. Pulsa reproducir en el video.",
    "Das Video wurde nicht automatisch gestartet. Drücken Sie auf Wiedergabe.",
    "Il video non è partito automaticamente. Premi play sul video.",
    "O vídeo não iniciou automaticamente. Pressione play no vídeo."
  ],
  "Donnez nous votre avis !": ["Share your feedback!", "Tupe maoni yako!", "شاركنا رأيك!", "¡Déjanos tu opinión!", "Teilen Sie uns Ihre Meinung mit!", "Lascia un feedback!", "Dê sua opinião!"],
  "Taux de satisfaction": ["Satisfaction rating", "Kiwango cha kuridhika", "مستوى الرضا", "Nivel de satisfacción", "Zufriedenheitsbewertung", "Livello di soddisfazione", "Nível de satisfação"],
  "Choisissez une note...": ["Choose a rating...", "Chagua kiwango...", "اختر تقييمًا...", "Elige una valoración...", "Bewertung auswählen...", "Scegli una valutazione...", "Escolha uma avaliação..."],
  "Excellent": ["Excellent", "Bora kabisa", "ممتاز", "Excelente", "Ausgezeichnet", "Eccellente", "Excelente"],
  "Très bon": ["Very good", "Nzuri sana", "جيد جدًا", "Muy bueno", "Sehr gut", "Molto buono", "Muito bom"],
  "Moyen": ["Average", "Wastani", "متوسط", "Regular", "Mittelmäßig", "Nella media", "Regular"],
  "Passable": ["Fair", "Inaridhisha", "مقبول", "Aceptable", "Ausreichend", "Sufficiente", "Razoável"],
  "Mauvais": ["Poor", "Mbaya", "سيئ", "Malo", "Schlecht", "Scarso", "Ruim"],
  "Votre témoignage": ["Your review", "Ushuhuda wako", "رأيك", "Tu testimonio", "Ihre Bewertung", "La tua recensione", "Seu depoimento"],
  "Entrez votre nom complet": ["Enter your full name", "Ingiza jina lako kamili", "أدخل اسمك الكامل", "Escribe tu nombre completo", "Geben Sie Ihren vollständigen Namen ein", "Inserisci il tuo nome completo", "Digite seu nome completo"],
  "Écrivez votre avis sur nos services": ["Write your review of our services", "Andika maoni yako kuhusu huduma zetu", "اكتب رأيك عن خدماتنا", "Escribe tu opinión sobre nuestros servicios", "Schreiben Sie Ihre Meinung zu unseren Dienstleistungen", "Scrivi la tua opinione sui nostri servizi", "Escreva sua opinião sobre nossos serviços"],
  "Envoyez votre témoignage": ["Submit your review", "Tuma ushuhuda wako", "أرسل رأيك", "Enviar tu testimonio", "Bewertung absenden", "Invia la tua recensione", "Enviar seu depoimento"],
  "Merci ! Votre témoignage a bien été reçu.": ["Thank you! Your review has been received.", "Asante! Ushuhuda wako umepokelewa.", "شكرًا! تم استلام رأيك.", "¡Gracias! Hemos recibido tu testimonio.", "Vielen Dank! Ihre Bewertung ist eingegangen.", "Grazie! La tua recensione è stata ricevuta.", "Obrigado! Seu depoimento foi recebido."],
  "Une erreur est survenue.": ["An error occurred.", "Hitilafu imetokea.", "حدث خطأ.", "Se produjo un error.", "Ein Fehler ist aufgetreten.", "Si è verificato un errore.", "Ocorreu um erro."],
  "Garantie du meilleur prix": ["Best price guarantee", "Dhamana ya bei bora", "ضمان أفضل سعر", "Garantía del mejor precio", "Bestpreisgarantie", "Garanzia del miglior prezzo", "Garantia do melhor preço"],
  "Nous vous garantissons le meilleur prix pour votre voyage": ["We guarantee the best price for your trip.", "Tunakuhakikishia bei bora kwa safari yako.", "نضمن لك أفضل سعر لرحلتك.", "Te garantizamos el mejor precio para tu viaje.", "Wir garantieren Ihnen den besten Preis für Ihre Reise.", "Ti garantiamo il miglior prezzo per il tuo viaggio.", "Garantimos o melhor preço para sua viagem."],
  "Assistance client 24/7": ["24/7 customer support", "Msaada kwa wateja saa 24/7", "دعم العملاء على مدار الساعة", "Atención al cliente 24/7", "Kundenservice rund um die Uhr", "Assistenza clienti 24/7", "Atendimento ao cliente 24/7"],
  "Nous sommes là pour vous aider à tout moment.": ["We are here to help you at any time.", "Tuko hapa kukusaidia wakati wowote.", "نحن هنا لمساعدتك في أي وقت.", "Estamos aquí para ayudarte en cualquier momento.", "Wir sind jederzeit für Sie da.", "Siamo qui per aiutarti in qualsiasi momento.", "Estamos aqui para ajudar você a qualquer momento."],
  "Hébergements de qualité": ["Quality accommodation", "Malazi bora", "إقامة عالية الجودة", "Alojamiento de calidad", "Hochwertige Unterkünfte", "Alloggi di qualità", "Hospedagem de qualidade"],
  "Une sélection d'hôtels, lodges et resorts adaptés à votre confort et votre budget.": ["A selection of hotels, lodges and resorts to suit your comfort and budget.", "Uteuzi wa hoteli na nyumba za kulala wageni zinazokidhi mahitaji na bajeti yako.", "مجموعة من الفنادق والنُزل والمنتجعات التي تناسب راحتك وميزانيتك.", "Una selección de hoteles y resorts adaptados a tu comodidad y presupuesto.", "Eine Auswahl an Hotels und Lodges passend zu Ihrem Komfort und Budget.", "Una selezione di hotel e resort adatti al tuo comfort e al tuo budget.", "Uma seleção de hotéis e resorts adequada ao seu conforto e orçamento."],
  "Politique d'annulation :": ["Cancellation policy:", "Sera ya kughairi:", "سياسة الإلغاء:", "Política de cancelación:", "Stornierungsbedingungen:", "Politica di cancellazione:", "Política de cancelamento:"],
  "Veuillez noter qu'aucune annulation ou modification n'est acceptée après un délai de 24 heures suivant votre réservation.": ["Please note that cancellations or changes are not accepted more than 24 hours after your booking.", "Tafadhali kumbuka kuwa hakuna kughairi au kufanya mabadiliko kunakokubaliwa baada ya saa 24 tangu ulipoweka nafasi.", "يرجى ملاحظة أنه لا يُقبل أي إلغاء أو تعديل بعد مرور 24 ساعة على الحجز.", "Ten en cuenta que no se aceptan cancelaciones ni cambios después de 24 horas desde la reserva.", "Bitte beachten Sie, dass Stornierungen oder Änderungen mehr als 24 Stunden nach der Buchung nicht akzeptiert werden.", "Si prega di notare che non si accettano cancellazioni o modifiche dopo 24 ore dalla prenotazione.", "Observe que não são aceitos cancelamentos ou alterações após 24 horas da reserva."],
  "Réservation sécurisée": ["Secure booking", "Uhifadhi salama", "حجز آمن", "Reserva segura", "Sichere Buchung", "Prenotazione sicura", "Reserva segura"],
  "Paiements 100% sécurisés et réservations simples et rapides.": ["100% secure payments and simple, fast bookings.", "Malipo salama kwa 100% na uhifadhi rahisi na wa haraka.", "مدفوعات آمنة ١٠٠٪ وحجوزات سهلة وسريعة.", "Pagos 100 % seguros y reservas sencillas y rápidas.", "100 % sichere Zahlungen und einfache, schnelle Buchungen.", "Pagamenti sicuri al 100% e prenotazioni semplici e veloci.", "Pagamentos 100% seguros e reservas simples e rápidas."],
  "Excursions Populaires": ["Popular tours", "Ziara maarufu", "جولات شهيرة", "Excursiones populares", "Beliebte Touren", "Tour popolari", "Passeios populares"],
  "View All Tour→": ["View all tours →", "Tazama ziara zote →", "عرض جميع الجولات →", "Ver todas las excursiones →", "Alle Touren ansehen →", "Vedi tutti i tour →", "Ver todos os passeios →"],
  "Offre spéciale": ["Special offer", "Ofa maalum", "عرض خاص", "Oferta especial", "Sonderangebot", "Offerta speciale", "Oferta especial"],
  "L'aventure vous attend !": ["Adventure awaits!", "Matukio yanakungoja!", "المغامرة بانتظارك!", "¡La aventura te espera!", "Das Abenteuer wartet auf Sie!", "L'avventura ti aspetta!", "A aventura espera por você!"],
  "Jusqu'à -10% de réduction": ["Up to 10% off", "Punguzo la hadi 10%", "خصم يصل إلى 10٪", "Hasta un 10 % de descuento", "Bis zu 10 % Rabatt", "Fino al 10% di sconto", "Até 10% de desconto"],
  "sur une sélection de circuits.": ["on selected tours.", "kwenye ziara zilizochaguliwa.", "على جولات مختارة.", "en excursiones seleccionadas.", "auf ausgewählte Touren.", "su tour selezionati.", "em passeios selecionados."],
  "Découvrir les offres": ["Explore the offers", "Gundua ofa", "اكتشف العروض", "Descubre las ofertas", "Angebote entdecken", "Scopri le offerte", "Conheça as ofertas"],
  "Pourquoi voyager avec nous ?": ["Why travel with us?", "Kwa nini usafiri nasi?", "لماذا تسافر معنا؟", "¿Por qué viajar con nosotros?", "Warum mit uns reisen?", "Perché viaggiare con noi?", "Por que viajar conosco?"],
  "Des expériences uniques à Zanzibar": ["Unique experiences in Zanzibar", "Matukio ya kipekee Zanzibar", "تجارب فريدة في زنجبار", "Experiencias únicas en Zanzíbar", "Einzigartige Erlebnisse auf Sansibar", "Esperienze uniche a Zanzibar", "Experiências únicas em Zanzibar"],
  "Nous créons des voyages sur-mesure pour vous faire découvrir le meilleur de notre île en toute sécurité et sérénité": ["We create tailor-made trips so you can discover the best of our island safely and with peace of mind.", "Tunakuandalia safari maalum ili ugundue mambo bora zaidi ya kisiwa chetu kwa usalama na utulivu.", "نصمم رحلات مخصصة لتكتشفوا أفضل ما في جزيرتنا بأمان وراحة بال.", "Creamos viajes a medida para que descubras lo mejor de nuestra isla con seguridad y tranquilidad.", "Wir gestalten maßgeschneiderte Reisen, damit Sie das Beste unserer Insel sicher und unbeschwert entdecken können.", "Creiamo viaggi su misura per farti scoprire il meglio della nostra isola in sicurezza e serenità.", "Criamos viagens personalizadas para você descobrir o melhor da nossa ilha com segurança e tranquilidade."],
  "Ce que disent nos voyageurs": ["What our travelers say", "Maoni ya wasafiri wetu", "ماذا يقول مسافرونا", "Lo que dicen nuestros viajeros", "Was unsere Reisenden sagen", "Cosa dicono i nostri viaggiatori", "O que dizem os nossos viajantes"],
  "Guides expérimentés": ["Experienced guides", "Waongoza watalii wenye uzoefu", "مرشدون ذوو خبرة", "Guías experimentados", "Erfahrene Reiseleiter", "Guide esperte", "Guias experientes"],
  "Des guides locaux passionnés et expérimentés qui font revivre l'histoire, la culture et la faune sauvage.": ["Passionate, experienced local guides bring history, culture and wildlife to life.", "Waongoza watalii wa hapa wenye shauku na uzoefu wanaohuisha historia, utamaduni na wanyamapori.", "مرشدون محليون شغوفون وذوو خبرة يحيون التاريخ والثقافة والحياة البرية.", "Guías locales apasionados y experimentados dan vida a la historia, la cultura y la naturaleza.", "Engagierte, erfahrene lokale Guides erwecken Geschichte, Kultur und Tierwelt zum Leben.", "Guide locali esperte e appassionate fanno rivivere la storia, la cultura e la fauna selvatica.", "Guias locais experientes e apaixonados dão vida à história, à cultura e à vida selvagem."],
  "Transport fiable": ["Reliable transport", "Usafiri wa kuaminika", "نقل موثوق", "Transporte fiable", "Zuverlässiger Transport", "Trasporto affidabile", "Transporte confiável"],
  "Des véhicules modernes et bien entretenus avec des chauffeurs expérimentés pour des déplacements sûrs et agréables.": ["Modern, well-maintained vehicles and experienced drivers ensure safe, comfortable journeys.", "Magari ya kisasa yaliyotunzwa vizuri na madereva wenye uzoefu huhakikisha safari salama na nzuri.", "سيارات حديثة ومعتنى بها مع سائقين ذوي خبرة لرحلات آمنة ومريحة.", "Vehículos modernos y bien cuidados, con conductores experimentados, para viajes seguros y cómodos.", "Moderne, gut gewartete Fahrzeuge und erfahrene Fahrer sorgen für sichere und angenehme Fahrten.", "Veicoli moderni e ben tenuti con autisti esperti per viaggi sicuri e piacevoli.", "Veículos modernos e bem conservados, com motoristas experientes, para viagens seguras e agradáveis."],
  "Expériences inoubliables": ["Unforgettable experiences", "Matukio yasiyosahaulika", "تجارب لا تُنسى", "Experiencias inolvidables", "Unvergessliche Erlebnisse", "Esperienze indimenticabili", "Experiências inesquecíveis"],
  "Des expériences uniques qui vous laisseront des souvenirs gravés à jamais.": ["Unique experiences that will leave you with lasting memories.", "Matukio ya kipekee yatakayokuachia kumbukumbu za kudumu.", "تجارب فريدة تترك لك ذكريات لا تُنسى.", "Experiencias únicas que te dejarán recuerdos imborrables.", "Einzigartige Erlebnisse, die unvergessliche Erinnerungen schaffen.", "Esperienze uniche che ti lasceranno ricordi indelebili.", "Experiências únicas que deixarão lembranças para sempre."],
  "Tarifs abordables": ["Affordable prices", "Bei nafuu", "أسعار مناسبة", "Precios asequibles", "Erschwingliche Preise", "Prezzi convenienti", "Preços acessíveis"],
  "Un rapport qualité-prix d'exception et des formules flexibles adaptées à tous les budgets.": ["Excellent value and flexible packages to suit every budget.", "Thamani bora na vifurushi vinavyoweza kubadilishwa kulingana na bajeti zote.", "قيمة ممتازة وخيارات مرنة تناسب جميع الميزانيات.", "Excelente relación calidad-precio y opciones flexibles para todos los presupuestos.", "Ein ausgezeichnetes Preis-Leistungs-Verhältnis und flexible Angebote für jedes Budget.", "Ottimo rapporto qualità-prezzo e pacchetti flessibili per ogni budget.", "Ótimo custo-benefício e opções flexíveis para todos os orçamentos."],
  "Suivez nous:": ["Follow us:", "Tufuatilie:", "تابعونا:", "Síguenos:", "Folgen Sie uns:", "Seguici:", "Siga-nos:"],
  "Nous sommes toujours à votre disposition pour vous aider à planifier les vacances de vos rêves.": [
    "We are always available to help you plan your dream vacation.",
    "Tuko tayari kukusaidia kupanga likizo ya ndoto zako.",
    "نحن متاحون دائمًا لمساعدتك في التخطيط لعطلة أحلامك.",
    "Siempre estamos disponibles para ayudarte a planificar las vacaciones de tus sueños.",
    "Wir helfen Ihnen jederzeit gerne bei der Planung Ihres Traumurlaubs.",
    "Siamo sempre a disposizione per aiutarti a pianificare la vacanza dei tuoi sogni.",
    "Estamos sempre disponíveis para ajudar você a planejar as férias dos seus sonhos."
  ],
  "Kendwa Île de Mnemba, Baraka Aquarium & Kendwa": ["Kendwa, Mnemba Island & Baraka Aquarium", "Kendwa, Kisiwa cha Mnemba na Aquarium ya Baraka", "كيندوا وجزيرة منيمبا وأكواريوم باراكا", "Kendwa, isla Mnemba y acuario Baraka", "Kendwa, Insel Mnemba & Baraka Aquarium", "Kendwa, isola di Mnemba e Baraka Aquarium", "Kendwa, ilha Mnemba e Baraka Aquarium"],
  "Liens rapides": ["Quick links", "Viungo vya haraka", "روابط سريعة", "Enlaces rápidos", "Schnellzugriff", "Link rapidi", "Links rápidos"],
  "Meilleures Destinations": ["Top Destinations", "Maeneo Bora", "أفضل الوجهات", "Mejores destinos", "Top-Reiseziele", "Le migliori destinazioni", "Melhores destinos"],
  "Assistance": ["Support", "Msaada", "المساعدة", "Asistencia", "Hilfe", "Assistenza", "Assistência"],
  "WhatsApp:": ["WhatsApp:", "WhatsApp:", "واتساب:", "WhatsApp:", "WhatsApp:", "WhatsApp:", "WhatsApp:"],
  "Email:": ["Email:", "Barua pepe:", "البريد الإلكتروني:", "Correo electrónico:", "E-Mail:", "Email:", "E-mail:"],
  "Instagram:": ["Instagram:", "Instagram:", "إنستغرام:", "Instagram:", "Instagram:", "Instagram:", "Instagram:"],
  "Connection Error": ["Connection error", "Hitilafu ya muunganisho", "خطأ في الاتصال", "Error de conexión", "Verbindungsfehler", "Errore di connessione", "Erro de conexão"],
  "Sandbank Nakupenda": ["Nakupenda Sandbank", "Ufukwe wa Mchanga wa Nakupenda", "رمال ناكوبيندا", "Banco de arena Nakupenda", "Sandbank Nakupenda", "Banco di sabbia Nakupenda", "Banco de areia Nakupenda"],
  "Île de Mnemba, Baraka Aquarium & Kendwa": ["Mnemba Island, Baraka Aquarium & Kendwa", "Kisiwa cha Mnemba, Aquarium ya Baraka na Kendwa", "جزيرة منيمبا وأكواريوم باراكا وكيندوا", "Isla Mnemba, acuario Baraka y Kendwa", "Insel Mnemba, Baraka Aquarium & Kendwa", "Isola di Mnemba, Baraka Aquarium e Kendwa", "Ilha Mnemba, Baraka Aquarium e Kendwa"],
  "Stone Town & Ferme aux Épices": ["Stone Town & Spice Farm", "Stone Town na Shamba la Viungo", "ستون تاون ومزرعة التوابل", "Stone Town y granja de especias", "Stone Town & Gewürzfarm", "Stone Town e fattoria delle spezie", "Stone Town e fazenda de especiarias"],
  "Safari Blue": ["Blue Safari", "Safari ya Baharini", "سفاري بلو", "Safari Blue", "Blue Safari", "Safari Blue", "Safari Blue"],
  "Grotte de Maalum, Forêt de Jozani & Plage de Mtende": ["Maalum Cave, Jozani Forest & Mtende Beach", "Pango la Maalum, Msitu wa Jozani na Ufukwe wa Mtende", "كهف مالوم وغابة جوزاني وشاطئ متندي", "Cueva Maalum, bosque Jozani y playa Mtende", "Maalum-Höhle, Jozani-Wald & Mtende-Strand", "Grotta Maalum, foresta di Jozani e spiaggia di Mtende", "Caverna Maalum, floresta Jozani e praia de Mtende"],
  "Conditions générales　 |　 Politique de confidentialité": ["Terms and Conditions　 |　 Privacy Policy", "Masharti na Vigezo　 |　 Sera ya Faragha", "الشروط والأحكام　 |　 سياسة الخصوصية", "Términos y condiciones　 |　 Política de privacidad", "Allgemeine Geschäftsbedingungen　 |　 Datenschutz", "Termini e condizioni　 |　 Informativa sulla privacy", "Termos e condições　 |　 Política de privacidade"],
  "©2026 ZanzibarGuide Excursion. Tous droits réservés.": ["©2026 ZanzibarGuide Excursion. All rights reserved.", "©2026 ZanzibarGuide Excursion. Haki zote zimehifadhiwa.", "©2026 ZanzibarGuide Excursion. جميع الحقوق محفوظة.", "©2026 ZanzibarGuide Excursion. Todos los derechos reservados.", "©2026 ZanzibarGuide Excursion. Alle Rechte vorbehalten.", "©2026 ZanzibarGuide Excursion. Tutti i diritti riservati.", "©2026 ZanzibarGuide Excursion. Todos os direitos reservados."],
  "Vos experts locaux de confiance, passionnés par le partage de l'âme, des paysages et de la culture de Zanzibar avec le monde entier.": [
    "Your trusted local experts, passionate about sharing Zanzibar's soul, landscapes and culture with the world.",
    "Wataalamu wako wa kuaminika wa hapa, wenye shauku ya kushiriki roho, mandhari na utamaduni wa Zanzibar na dunia.",
    "خبراؤك المحليون الموثوقون، الشغوفون بمشاركة روح زنجبار ومناظرها وثقافتها مع العالم.",
    "Tus expertos locales de confianza, apasionados por compartir con el mundo el espíritu, los paisajes y la cultura de Zanzíbar.",
    "Ihre vertrauenswürdigen lokalen Experten, die Sansibars Seele, Landschaften und Kultur mit der Welt teilen möchten.",
    "I tuoi esperti locali di fiducia, appassionati nel condividere con il mondo l'anima, i paesaggi e la cultura di Zanzibar.",
    "Seus especialistas locais de confiança, apaixonados por compartilhar com o mundo a alma, as paisagens e a cultura de Zanzibar."
  ],
  "Safari Mikumi": ["Mikumi Safari", "Safari ya Mikumi", "سفاري ميكومي", "Safari por Mikumi", "Mikumi-Safari", "Safari a Mikumi", "Safári em Mikumi"],
  "Safari Tarangire & Ngorongoro": ["Tarangire & Ngorongoro Safari", "Safari ya Tarangire na Ngorongoro", "سفاري تارنجيري ونغورونغورو", "Safari por Tarangire y Ngorongoro", "Tarangire- & Ngorongoro-Safari", "Safari Tarangire e Ngorongoro", "Safári Tarangire e Ngorongoro"],
  "Safari Serengeti & Ngorongoro": ["Serengeti & Ngorongoro Safari", "Safari ya Serengeti na Ngorongoro", "سفاري سيرينغيتي ونغورونغورو", "Safari por Serengeti y Ngorongoro", "Serengeti- & Ngorongoro-Safari", "Safari Serengeti e Ngorongoro", "Safári Serengeti e Ngorongoro"],
  "Lagune Bleue, Étoiles de Mer & Plage de Kae Funk": ["Blue Lagoon, Starfish & Kae Funk Beach", "Laguna ya Bluu, Nyota wa Baharini na Ufukwe wa Kae Funk", "البحيرة الزرقاء ونجمات البحر وشاطئ كاي فونك", "Laguna Azul, estrellas de mar y playa Kae Funk", "Blaue Lagune, Seesterne & Kae-Funk-Strand", "Laguna Blu, stelle marine e spiaggia di Kae Funk", "Lagoa Azul, estrelas-do-mar e praia Kae Funk"],
  "À partir de": ["From", "Kuanzia", "ابتداءً من", "Desde", "Ab", "A partire da", "A partir de"],
  "Nous disposons des meilleurs guides de la ville": ["We have the best guides in town", "Tuna waongoza watalii bora mjini", "لدينا أفضل المرشدين في المدينة", "Contamos con los mejores guías de la ciudad", "Wir haben die besten Guides der Stadt", "Abbiamo le migliori guide della città", "Temos os melhores guias da cidade"],
  "ZanzibarGuide Excursion est votre porte d'entrée vers la beauté naturelle et le riche patrimoine culturel de Zanzibar. Nous sommes spécialisés dans la création d'expériences inoubliables — des plages immaculées et de la faune spectaculaire aux traditions vibrantes — pour les voyageurs locaux et internationaux. Laissez-nous donner vie au voyage en Afrique de l'Est dont vous avez toujours rêvé.": [
    "ZanzibarGuide Excursion is your gateway to Zanzibar's natural beauty and rich cultural heritage. We create unforgettable experiences, from pristine beaches and spectacular wildlife to vibrant traditions, for local and international travelers. Let us bring your dream East African journey to life.",
    "ZanzibarGuide Excursion ni lango lako la kufurahia uzuri wa asili na urithi tajiri wa utamaduni wa Zanzibar. Tunatengeneza matukio yasiyosahaulika—kuanzia fukwe safi na wanyamapori wa kuvutia hadi mila hai—kwa wasafiri wa ndani na wa kimataifa. Tupe nafasi ya kutimiza safari yako ya ndoto Afrika Mashariki.",
    "ZanzibarGuide Excursion هي بوابتك إلى جمال زنجبار الطبيعي وتراثها الثقافي الغني. نصمم تجارب لا تُنسى، من الشواطئ البكر والحياة البرية الرائعة إلى التقاليد النابضة بالحياة، للمسافرين المحليين والدوليين. دعنا نحقق رحلتك التي تحلم بها في شرق أفريقيا.",
    "ZanzibarGuide Excursion es tu puerta a la belleza natural y al rico patrimonio cultural de Zanzíbar. Creamos experiencias inolvidables, desde playas vírgenes y fauna espectacular hasta tradiciones vibrantes, para viajeros locales e internacionales. Hagamos realidad tu viaje soñado por África Oriental.",
    "ZanzibarGuide Excursion ist Ihr Tor zur Naturschönheit und zum reichen Kulturerbe Sansibars. Wir gestalten unvergessliche Erlebnisse – von unberührten Stränden und faszinierender Tierwelt bis zu lebendigen Traditionen – für Reisende aus aller Welt.",
    "ZanzibarGuide Excursion è la porta d'accesso alla bellezza naturale e al ricco patrimonio culturale di Zanzibar. Creiamo esperienze indimenticabili, dalle spiagge incontaminate alla fauna spettacolare e alle tradizioni vivaci, per viaggiatori locali e internazionali.",
    "A ZanzibarGuide Excursion é a sua porta de entrada para a beleza natural e o rico patrimônio cultural de Zanzibar. Criamos experiências inesquecíveis, de praias intocadas e vida selvagem espetacular a tradições vibrantes, para viajantes locais e internacionais."
  ],
  "Nagez avec les dauphins, rencontrez les tortues marines et admirez un coucher de soleil époustouflant sur la plage.": [
    "Swim with dolphins, meet sea turtles and admire a stunning beach sunset.",
    "Ogelea na pomboo, kutana na kasa wa baharini na ufurahie machweo mazuri ufukweni.",
    "اسبح مع الدلافين والتقِ بالسلاحف البحرية واستمتع بغروب الشمس الساحر على الشاطئ.",
    "Nada con delfines, conoce tortugas marinas y admira una puesta de sol espectacular en la playa.",
    "Schwimmen Sie mit Delfinen, begegnen Sie Meeresschildkröten und genießen Sie einen atemberaubenden Sonnenuntergang am Strand.",
    "Nuota con i delfini, incontra le tartarughe marine e ammira un tramonto mozzafiato sulla spiaggia.",
    "Nade com golfinhos, conheça tartarugas marinhas e admire um pôr do sol deslumbrante na praia."
  ],
  "€ 400": ["€ 400", "€ 400", "٤٠٠ €", "€ 400", "400 €", "€ 400", "€ 400"],
  "€ 1200": ["€ 1,200", "€ 1,200", "١٢٠٠ €", "€ 1.200", "1.200 €", "€ 1.200", "€ 1.200"],
  "€ 1500": ["€ 1,500", "€ 1,500", "١٥٠٠ €", "€ 1.500", "1.500 €", "€ 1.500", "€ 1.500"],
  "Notre Mission": ["Our Mission", "Dhamira Yetu", "مهمتنا", "Nuestra misión", "Unsere Mission", "La nostra missione", "Nossa missão"],
  "Offrir des services touristiques de haute qualité créant des expériences de voyage inoubliables, tout en promouvant un tourisme durable et responsable.": [
    "To provide high-quality tourism services that create unforgettable travel experiences while promoting sustainable and responsible tourism.",
    "Kutoa huduma bora za utalii zinazounda safari zisizosahaulika, huku tukihimiza utalii endelevu na wenye uwajibikaji.",
    "تقديم خدمات سياحية عالية الجودة تصنع تجارب سفر لا تُنسى، مع تعزيز السياحة المستدامة والمسؤولة.",
    "Ofrecer servicios turísticos de alta calidad que creen experiencias inolvidables y promuevan un turismo sostenible y responsable.",
    "Hochwertige Tourismusleistungen für unvergessliche Reisen anbieten und nachhaltigen, verantwortungsvollen Tourismus fördern.",
    "Offrire servizi turistici di alta qualità per esperienze indimenticabili, promuovendo un turismo sostenibile e responsabile.",
    "Oferecer serviços turísticos de alta qualidade para experiências inesquecíveis, promovendo um turismo sustentável e responsável."
  ],
  "Notre Vision": ["Our Vision", "Maono Yetu", "رؤيتنا", "Nuestra visión", "Unsere Vision", "La nostra visione", "Nossa visão"],
  "Devenir le leader du secteur touristique en Afrique de l'Est en proposant un service d'excellence et en garantissant la satisfaction totale de nos clients.": [
    "To become a tourism leader in East Africa by providing excellent service and ensuring complete customer satisfaction.",
    "Kuwa kiongozi wa utalii Afrika Mashariki kwa kutoa huduma bora na kuhakikisha wateja wanaridhika kikamilifu.",
    "أن نصبح رواد السياحة في شرق أفريقيا من خلال تقديم خدمة متميزة وضمان رضا عملائنا التام.",
    "Ser líderes del turismo en África Oriental ofreciendo un servicio excelente y garantizando la satisfacción total de nuestros clientes.",
    "Mit hervorragendem Service und vollständiger Kundenzufriedenheit zum führenden Tourismusanbieter Ostafrikas werden.",
    "Diventare leader del turismo in Africa orientale offrendo un servizio eccellente e garantendo la piena soddisfazione dei clienti.",
    "Tornar-nos líderes do turismo na África Oriental com um serviço excelente e a satisfação total dos clientes."
  ],
  "Nos Valeurs Fondamentales.": ["Our Core Values", "Misingi Yetu", "قيمنا الأساسية", "Nuestros valores fundamentales", "Unsere Grundwerte", "I nostri valori fondamentali", "Nossos valores fundamentais"],
  "Nos valeurs fondamentales. Notre passion pour l'authenticité et l'excellence anime chacune de nos actions. Voici les piliers qui façonnent votre voyage": [
    "Our passion for authenticity and excellence guides everything we do. These are the values that shape your journey.",
    "Shauku yetu ya uhalisia na ubora huongoza kila tunachofanya. Hizi ndizo tunu zinazounda safari yako.",
    "شغفنا بالأصالة والتميز يوجّه كل ما نقوم به. هذه هي القيم التي تشكّل رحلتك.",
    "Nuestra pasión por la autenticidad y la excelencia guía cada acción. Estos son los valores que dan forma a tu viaje.",
    "Unsere Leidenschaft für Authentizität und Exzellenz prägt unser Handeln. Diese Werte gestalten Ihre Reise.",
    "La passione per autenticità ed eccellenza guida ogni nostra azione. Questi sono i valori che plasmano il tuo viaggio.",
    "Nossa paixão por autenticidade e excelência orienta cada ação. Estes são os valores que moldam sua viagem."
  ],
  "Professionnalisme.": ["Professionalism", "Utaalamu", "الاحترافية", "Profesionalidad", "Professionalität", "Professionalità", "Profissionalismo"],
  "Intégrité": ["Integrity", "Uadilifu", "النزاهة", "Integridad", "Integrität", "Integrità", "Integridade"],
  "Satisfaction Client.": ["Customer Satisfaction", "Kuridhika kwa Wateja", "رضا العملاء", "Satisfacción del cliente", "Kundenzufriedenheit", "Soddisfazione del cliente", "Satisfação do cliente"],
  "Protection de l'Environnement.": ["Environmental Protection", "Utunzaji wa Mazingira", "حماية البيئة", "Protección del medio ambiente", "Umweltschutz", "Protezione ambientale", "Proteção ambiental"],
  "Innovation.": ["Innovation", "Ubunifu", "الابتكار", "Innovación", "Innovation", "Innovazione", "Inovação"],
  "Nous nous engageons à fournir un service d'exception, fiable et de haute qualité, fondé sur l'expertise, le respect et une attention méticuleuse portée aux détails, du début à la fin de votre séjour..": [
    "We are committed to exceptional, reliable, high-quality service based on expertise, respect and careful attention to detail throughout your stay.",
    "Tumejizatiti kutoa huduma bora, ya kuaminika na yenye ubora wa juu, inayotegemea utaalamu, heshima na umakini kwa kila jambo wakati wote wa ukaaji wako.",
    "نلتزم بتقديم خدمة استثنائية وموثوقة وعالية الجودة تقوم على الخبرة والاحترام والاهتمام الدقيق بالتفاصيل طوال إقامتك.",
    "Nos comprometemos a ofrecer un servicio excepcional, fiable y de alta calidad, basado en la experiencia, el respeto y la atención al detalle durante toda tu estancia.",
    "Wir bieten während Ihres gesamten Aufenthalts einen erstklassigen, zuverlässigen Service mit Fachkompetenz, Respekt und viel Liebe zum Detail.",
    "Ci impegniamo a offrire un servizio eccellente, affidabile e di alta qualità, basato su competenza, rispetto e cura dei dettagli durante tutto il soggiorno.",
    "Comprometemo-nos com um serviço excepcional, confiável e de alta qualidade, com experiência, respeito e atenção aos detalhes durante toda a estadia."
  ],
  "Nous exerçons notre activité en toute honnêteté, transparence et équité, en tissant des relations de confiance afin que vous puissiez voyager en toute sérénité.": [
    "We work with honesty, transparency and fairness, building trusted relationships so you can travel with peace of mind.",
    "Tunafanya kazi kwa uaminifu, uwazi na haki, tukijenga mahusiano ya kuaminiana ili uweze kusafiri kwa amani.",
    "نعمل بأمانة وشفافية وإنصاف، ونبني علاقات قائمة على الثقة لتسافر براحة واطمئنان.",
    "Trabajamos con honestidad, transparencia y equidad, creando relaciones de confianza para que viajes con tranquilidad.",
    "Wir handeln ehrlich, transparent und fair und schaffen vertrauensvolle Beziehungen, damit Sie unbeschwert reisen können.",
    "Operiamo con onestà, trasparenza ed equità, creando rapporti di fiducia per farti viaggiare serenamente.",
    "Atuamos com honestidade, transparência e justiça, construindo relações de confiança para que você viaje com tranquilidade."
  ],
  "Nos voyageurs sont au cœur de toutes nos attentions. Nous offrons un service personnalisé, une communication réactive et une prise en charge attentive pour surpasser toutes vos attentes.": [
    "Our travelers are at the heart of everything we do. We provide personalized service, responsive communication and attentive care to exceed your expectations.",
    "Wasafiri wetu ndio kipaumbele chetu. Tunatoa huduma binafsi, mawasiliano ya haraka na uangalizi makini ili kuzidi matarajio yako.",
    "مسافرونا محور اهتمامنا. نقدم خدمة شخصية وتواصلاً سريعاً ورعاية دقيقة لتجاوز توقعاتكم.",
    "Nuestros viajeros son nuestra prioridad. Ofrecemos atención personalizada, comunicación rápida y un cuidado atento para superar tus expectativas.",
    "Unsere Gäste stehen im Mittelpunkt. Persönlicher Service, schnelle Kommunikation und aufmerksame Betreuung sollen Ihre Erwartungen übertreffen.",
    "I nostri viaggiatori sono al centro di tutto. Offriamo un servizio personalizzato, comunicazioni tempestive e assistenza attenta per superare le tue aspettative.",
    "Nossos viajantes estão no centro de tudo. Oferecemos atendimento personalizado, comunicação ágil e cuidado atencioso para superar suas expectativas."
  ],
  "Nous préservons la beauté naturelle et la culture de Zanzibar pour les générations futures en promouvant un tourisme responsable et en soutenant les écosystèmes locaux.": [
    "We preserve Zanzibar's natural beauty and culture for future generations by promoting responsible tourism and supporting local ecosystems.",
    "Tunahifadhi uzuri wa asili na utamaduni wa Zanzibar kwa vizazi vijavyo kwa kuhimiza utalii wenye uwajibikaji na kusaidia mifumo ya ikolojia ya hapa.",
    "نحافظ على جمال زنجبار الطبيعي وثقافتها للأجيال القادمة من خلال تعزيز السياحة المسؤولة ودعم النظم البيئية المحلية.",
    "Preservamos la belleza natural y la cultura de Zanzíbar para las generaciones futuras promoviendo el turismo responsable y apoyando los ecosistemas locales.",
    "Wir bewahren Sansibars Natur und Kultur für kommende Generationen, fördern verantwortungsvollen Tourismus und unterstützen lokale Ökosysteme.",
    "Preserviamo la bellezza naturale e la cultura di Zanzibar per le generazioni future promuovendo il turismo responsabile e sostenendo gli ecosistemi locali.",
    "Preservamos a beleza natural e a cultura de Zanzibar para as futuras gerações, promovendo o turismo responsável e apoiando os ecossistemas locais."
  ],
  "Nous adoptons en permanence les technologies modernes et des solutions créatives pour vous garantir des réservations fluides, des circuits inédits et des aventures uniques.": [
    "We continually adopt modern technology and creative solutions to offer seamless bookings, original tours and unique adventures.",
    "Tunatumia teknolojia za kisasa na suluhisho bunifu ili kukupa uhifadhi rahisi, ziara za kipekee na matukio yasiyofanana na mengine.",
    "نعتمد باستمرار التقنيات الحديثة والحلول الإبداعية لنضمن حجوزات سلسة وجولات مميزة ومغامرات فريدة.",
    "Adoptamos continuamente tecnologías modernas y soluciones creativas para ofrecer reservas sencillas, rutas originales y aventuras únicas.",
    "Mit moderner Technologie und kreativen Lösungen ermöglichen wir reibungslose Buchungen, besondere Touren und einzigartige Abenteuer.",
    "Adottiamo tecnologie moderne e soluzioni creative per offrirti prenotazioni semplici, tour originali e avventure uniche.",
    "Adotamos tecnologias modernas e soluções criativas para oferecer reservas fáceis, passeios originais e aventuras únicas."
  ],
  "Activités & Tarifs": ["Activities & Prices", "Shughuli na Bei", "الأنشطة والأسعار", "Actividades y precios", "Aktivitäten & Preise", "Attività e prezzi", "Atividades e preços"],
  "Prix fixe": ["Fixed price", "Bei maalum", "سعر ثابت", "Precio fijo", "Festpreis", "Prezzo fisso", "Preço fixo"],
  "Découvrez des sites historiques majeurs et éveillez vos sens lors d'une route des épices parfumée.": [
    "Discover major historical sites and awaken your senses on a fragrant spice tour.",
    "Gundua maeneo muhimu ya kihistoria na uchangamkie hisia zako katika ziara yenye harufu nzuri ya viungo.",
    "اكتشف أهم المواقع التاريخية واستمتع بحواسك في جولة عطرة بين مزارع التوابل.",
    "Descubre importantes lugares históricos y despierta tus sentidos en una ruta aromática de especias.",
    "Entdecken Sie bedeutende historische Stätten und erleben Sie eine duftende Gewürztour.",
    "Scopri importanti siti storici e risveglia i sensi con un profumato tour delle spezie.",
    "Conheça locais históricos importantes e desperte seus sentidos em um passeio perfumado pelas especiarias."
  ],
  "Détendez vous sur un banc de sable d'exception et explorez de spectaculaires mondes sous-marins..": [
    "Relax on an exceptional sandbank and explore spectacular underwater worlds.",
    "Pumzika kwenye ufukwe wa mchanga wa kipekee na uchunguze ulimwengu wa kuvutia chini ya maji.",
    "استرخِ على لسان رملي رائع واستكشف عوالم مذهلة تحت الماء.",
    "Relájate en un banco de arena excepcional y explora espectaculares mundos submarinos.",
    "Entspannen Sie auf einer außergewöhnlichen Sandbank und entdecken Sie faszinierende Unterwasserwelten.",
    "Rilassati su un banco di sabbia speciale ed esplora spettacolari mondi sottomarini.",
    "Relaxe em um banco de areia especial e explore mundos subaquáticos espetaculares."
  ],
  "Plongez au cœur de récifs coralliens vibrants, grouillants de vie marine multicolore.": [
    "Dive into vibrant coral reefs teeming with colorful marine life.",
    "Zamia kwenye miamba hai ya matumbawe iliyojaa viumbe wa baharini wenye rangi nyingi.",
    "اغطس في شعاب مرجانية نابضة بالحياة تعج بالكائنات البحرية الملونة.",
    "Sumérgete en vibrantes arrecifes de coral llenos de vida marina multicolor.",
    "Tauchen Sie in lebendige Korallenriffe voller bunter Meeresbewohner ein.",
    "Immergiti in vivaci barriere coralline ricche di vita marina colorata.",
    "Mergulhe em recifes de coral vibrantes repletos de vida marinha colorida."
  ],
  "Observez des singes rares dans la forêt de Jozani, baignez-vous dans la grotte de Maalum et détendez-vous sur la plage de Mtende.": [
    "Spot rare monkeys in Jozani Forest, swim in Maalum Cave and relax on Mtende Beach.",
    "Waone nyani adimu katika Msitu wa Jozani, oga kwenye Pango la Maalum na upumzike Ufukwe wa Mtende.",
    "شاهد القرود النادرة في غابة جوزاني واسبح في كهف مالوم واسترخِ على شاطئ متندي.",
    "Observa monos poco comunes en el bosque Jozani, báñate en la cueva Maalum y relájate en la playa Mtende.",
    "Beobachten Sie seltene Affen im Jozani-Wald, baden Sie in der Maalum-Höhle und entspannen Sie am Mtende-Strand.",
    "Avvista rare scimmie nella foresta di Jozani, nuota nella grotta Maalum e rilassati sulla spiaggia di Mtende.",
    "Observe macacos raros na floresta Jozani, nade na caverna Maalum e relaxe na praia de Mtende."
  ],
  "Explorez des eaux cristallines en palmes-masque-tuba, admirez les étoiles de mer et détendez-vous au bord de l'eau.": [
    "Explore crystal-clear waters by snorkeling, admire starfish and relax by the water.",
    "Chunguza maji safi kwa kuogelea na barakoa, tazama nyota wa baharini na upumzike kando ya maji.",
    "استكشف المياه الصافية بالغطس، وشاهد نجوم البحر واسترخِ بجانب المياه.",
    "Explora aguas cristalinas haciendo snorkel, admira estrellas de mar y relájate junto al agua.",
    "Erkunden Sie kristallklares Wasser beim Schnorcheln, bewundern Sie Seesterne und entspannen Sie am Ufer.",
    "Esplora acque cristalline facendo snorkeling, ammira le stelle marine e rilassati sulla riva.",
    "Explore águas cristalinas com snorkel, admire estrelas-do-mar e relaxe à beira-mar."
  ],
  "Safaris": ["Safaris", "Safari", "رحلات السفاري", "Safaris", "Safaris", "Safari", "Safáris"],
  "Vivez un safari palpitant au cœur de la faune sauvage, idéal pour les séjours courts.": [
    "Enjoy an exciting wildlife safari, ideal for short stays.",
    "Furahia safari ya kusisimua ya wanyamapori, inayofaa kwa likizo fupi.",
    "عش تجربة سفاري مثيرة بين الحياة البرية، وهي مثالية للإقامات القصيرة.",
    "Disfruta de un emocionante safari por la naturaleza, ideal para estancias cortas.",
    "Erleben Sie eine aufregende Wildtiersafari – ideal für kurze Aufenthalte.",
    "Vivi un emozionante safari nella natura, ideale per soggiorni brevi.",
    "Viva um emocionante safári pela vida selvagem, ideal para estadias curtas."
  ],
  "Soyez le témoin de la légendaire Grande Migration et observez les félins emblématiques d'Afrique.": [
    "Witness the legendary Great Migration and spot Africa's iconic big cats.",
    "Shuhudia Uhamaji Mkuu maarufu na uwaone paka wakubwa mashuhuri wa Afrika.",
    "شاهد الهجرة الكبرى الأسطورية وتعرّف على السنوريات الشهيرة في أفريقيا.",
    "Sé testigo de la legendaria Gran Migración y observa los grandes felinos emblemáticos de África.",
    "Erleben Sie die legendäre Große Migration und beobachten Sie Afrikas berühmte Großkatzen.",
    "Assisti alla leggendaria Grande Migrazione e osserva i grandi felini simbolo dell'Africa.",
    "Testemunhe a lendária Grande Migração e observe os grandes felinos icônicos da África."
  ],
  "De vastes plaines à perte de vue, célèbres pour la Grande Migration et l'observation exceptionnelle des grands prédateurs.": [
    "Vast open plains, famous for the Great Migration and exceptional predator sightings.",
    "Nyanda kubwa zisizo na mwisho, maarufu kwa Uhamaji Mkuu na kuwaona wawindaji wakubwa.",
    "سهول شاسعة تشتهر بالهجرة الكبرى ومشاهدة الحيوانات المفترسة المهيبة.",
    "Inmensas llanuras famosas por la Gran Migración y la excepcional observación de grandes depredadores.",
    "Weite Ebenen, berühmt für die Große Migration und außergewöhnliche Sichtungen großer Raubtiere.",
    "Vaste pianure, famose per la Grande Migrazione e gli avvistamenti eccezionali dei grandi predatori.",
    "Vastas planícies famosas pela Grande Migração e pela observação excepcional de grandes predadores."
  ],
  "Accueil > Nos Services": ["Home > Our Services", "Nyumbani > Huduma Zetu", "الرئيسية > خدماتنا", "Inicio > Servicios", "Startseite > Leistungen", "Home > Servizi", "Início > Serviços"],
  "Nous proposons une large gamme de services touristiques conçus pour vous garantir des vacances agréables et sans aucun stress": [
    "We offer a wide range of travel services designed to ensure an enjoyable, stress-free vacation.",
    "Tunatoa huduma nyingi za utalii zilizoundwa kuhakikisha likizo yako inafurahisha na haina usumbufu.",
    "نقدم مجموعة واسعة من الخدمات السياحية المصممة لضمان عطلة ممتعة وخالية من التوتر.",
    "Ofrecemos una amplia gama de servicios turísticos para garantizarte unas vacaciones agradables y sin estrés.",
    "Wir bieten ein breites Spektrum an Reisedienstleistungen für einen angenehmen und stressfreien Urlaub.",
    "Offriamo un'ampia gamma di servizi turistici per garantirti una vacanza piacevole e senza stress.",
    "Oferecemos uma ampla variedade de serviços turísticos para garantir férias agradáveis e sem estresse."
  ],
  "Accueil > Contactez Nous": ["Home > Contact Us", "Nyumbani > Wasiliana Nasi", "الرئيسية > اتصل بنا", "Inicio > Contacto", "Startseite > Kontakt", "Home > Contatti", "Início > Contato"],
  "Contactez nous": ["Contact us", "Wasiliana nasi", "اتصل بنا", "Contáctanos", "Kontaktieren Sie uns", "Contattaci", "Fale conosco"],
  "Notre adresse": ["Our address", "Anwani yetu", "عنواننا", "Nuestra dirección", "Unsere Adresse", "Il nostro indirizzo", "Nosso endereço"],
  "Discuter sur WhatsApp": ["Chat on WhatsApp", "Zungumza nasi WhatsApp", "تحدث عبر واتساب", "Chatea por WhatsApp", "Per WhatsApp chatten", "Chatta su WhatsApp", "Converse pelo WhatsApp"],
  "Notre adresse email": ["Our email address", "Anwani yetu ya barua pepe", "بريدنا الإلكتروني", "Nuestro correo electrónico", "Unsere E-Mail-Adresse", "Il nostro indirizzo email", "Nosso endereço de e-mail"],
  "Envoyez nous un message": ["Send us a message", "Tutumie ujumbe", "أرسل لنا رسالة", "Envíanos un mensaje", "Senden Sie uns eine Nachricht", "Inviaci un messaggio", "Envie-nos uma mensagem"],
  "Vous recherchez des conseils ou des informations pour votre prochain voyage ?": ["Looking for advice or information for your next trip?", "Unatafuta ushauri au maelezo kuhusu safari yako ijayo?", "هل تبحث عن نصائح أو معلومات لرحلتك القادمة؟", "¿Buscas consejos o información para tu próximo viaje?", "Suchen Sie Tipps oder Informationen für Ihre nächste Reise?", "Cerchi consigli o informazioni per il tuo prossimo viaggio?", "Procura conselhos ou informações para sua próxima viagem?"],
  "Nom complet": ["Full name", "Jina kamili", "الاسم الكامل", "Nombre completo", "Vollständiger Name", "Nome completo", "Nome completo"],
  "Adresse Email": ["Email address", "Anwani ya barua pepe", "البريد الإلكتروني", "Correo electrónico", "E-Mail-Adresse", "Indirizzo email", "Endereço de e-mail"],
  "Numéro de téléphone": ["Phone number", "Nambari ya simu", "رقم الهاتف", "Número de teléfono", "Telefonnummer", "Numero di telefono", "Número de telefone"],
  "Vos objectifs": ["Your goals", "Malengo yako", "أهدافك", "Tus objetivos", "Ihre Ziele", "I tuoi obiettivi", "Seus objetivos"],
  "Objet du message": ["Subject", "Mada ya ujumbe", "موضوع الرسالة", "Asunto del mensaje", "Betreff", "Oggetto del messaggio", "Assunto da mensagem"],
  "Je souhaite obtenir des conseils ou des informations sur votre séjour.": ["I would like advice or information about your stay.", "Ningependa ushauri au maelezo kuhusu ukaaji wako.", "أرغب في الحصول على نصائح أو معلومات حول إقامتك.", "Me gustaría recibir consejos o información sobre tu estancia.", "Ich möchte Tipps oder Informationen zu Ihrem Aufenthalt erhalten.", "Vorrei ricevere consigli o informazioni sul tuo soggiorno.", "Gostaria de receber conselhos ou informações sobre sua estadia."],
  "Envoyez Message": ["Send Message", "Tuma Ujumbe", "إرسال الرسالة", "Enviar mensaje", "Nachricht senden", "Invia messaggio", "Enviar mensagem"],
  "Votre nom": ["Your name", "Jina lako", "اسمك", "Tu nombre", "Ihr Name", "Il tuo nome", "Seu nome"],
  "Accueil > À propos": ["Home > About Us", "Nyumbani > Kuhusu Sisi", "الرئيسية > من نحن", "Inicio > Sobre nosotros", "Startseite > Über uns", "Home > Chi siamo", "Início > Sobre nós"]
};

const translations = Object.fromEntries(
  languageCodes.map((language, languageIndex) => [
    language,
    Object.fromEntries(
      Object.entries(phrases).map(([source, values]) => [
        source,
        values[languageIndex]
      ])
    )
  ])
);

const languageSelects = document.querySelectorAll(".language-select");
const supportedLanguages = ["fr", ...languageCodes];
const textNodes = [];
const translatableAttributes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let textNode;

while ((textNode = walker.nextNode())) {
  if (textNode.parentElement.closest("script, style, .language-switcher")) {
    continue;
  }
  const sourceText = textNode.nodeValue.trim().replace(/\s+/g, " ");
  if (sourceText) {
    textNodes.push({ node: textNode, originalText: textNode.nodeValue, sourceText });
  }
}

document.querySelectorAll("input[placeholder], textarea[placeholder], input[type='submit'][value]").forEach((element) => {
  ["placeholder", "value"].forEach((attribute) => {
    if (element.hasAttribute(attribute)) {
      translatableAttributes.push({
        element,
        attribute,
        sourceText: element.getAttribute(attribute)
      });
    }
  });
});

function setLanguage(language) {
  const dictionary = translations[language] || {};
  textNodes.forEach(({ node, originalText, sourceText }) => {
    const translatedText = dictionary[sourceText];
    if (translatedText) {
      const leadingWhitespace = originalText.match(/^\s*/)[0];
      const trailingWhitespace = originalText.match(/\s*$/)[0];
      node.nodeValue = leadingWhitespace + translatedText + trailingWhitespace;
    } else {
      node.nodeValue = originalText;
    }
  });
  translatableAttributes.forEach(({ element, attribute, sourceText }) => {
    element.setAttribute(attribute, dictionary[sourceText] || sourceText);
  });

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  localStorage.setItem("site-language", language);
  languageSelects.forEach((select) => {
    select.value = language;
  });
}

const savedLanguage = localStorage.getItem("site-language");
const initialLanguage = supportedLanguages.includes(savedLanguage)
  ? savedLanguage
  : "fr";
setLanguage(initialLanguage);
languageSelects.forEach((select) => {
  select.addEventListener("change", () => setLanguage(select.value));
});
