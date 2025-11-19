document.addEventListener("DOMContentLoaded", function() {
    // Location lists per language. 'tr' is original Turkish; other languages are approximate translations.
    const locationsByLang = {
      tr: {
        dailyLife: [
            "Süpermarket", "Park", "Sinema", "Okul", "Hastane", "Restoran", "Otel", "Havalimanı",
            "Banka", "Sahil", "Kahveci", "Camii", "Sirk", "Mahkeme", "Fabrika", "Orman", "Göl",
            "Deniz", "Köy", "Oto Sanayi", "Kütüphane", "Müze", "Dershane", "Karakol",
            "Tuvalet", "Vergi Dairesi",
        ],
        sciFi: [
            "Paralel Evren", "Atlantis", "Hogwarts", "Dünya'nın Çekirdeği", "Uzay İstasyonu",
            "Mars", "Yıldız Gemisi", "Galaksi", "Kara Delik", "Buzul Çağı", "Kıyamet Sonrası Dünya",
        ],
        middleAges: [
            "Şato", "Zindan", "Pazar Yeri", "Kilise", "Köy Meydanı", "İpek Yolu", "Kervansaray",
            "Osmanlı Sarayı", "Bizans İmparatorluğu", "Viking Köyü", "Kılıç Ustası'nın Atölyesi",
            "Şövalye Turnuvası", "Cadı İnfazı", "Köylü Evi", "Köy Çeşmesi","Ticaret Kervanı",
        ],
        turkey: [
            "İstanbul", "Kadıköy", "Konya", "Heybeliada", "Anıtkabir", "Uludağ", "Çanakkale",
            "Bodrum", "TBMM", "Kız Kulesi", "Efes Antik Kenti", "Pamukkale", "Kapadokya",
            "Nasreddin Hoca Heykeli", "Ayasofya", "İstanbul Boğazı", "Topkapı Sarayı",
            "Galata Kulesi", "Süleymaniye Camii", "Beyoğlu", "Kalkan", "Fethiye", "Antalya",
        ],
        europe: [
            "Londra", "Paris", "Yunanistan", "Berlin", "Roma", "Barselona", "Amsterdam",
            "Viyana", "Prag", "Budapeşte", "Stockholm", "Cenevre", "Kopenhag", "Brüksel",
            "Zürih", "Dublin", "Oslo", "Helsinki", "Lizbon", "Madrid", "Atina",
            "Moskova", "Sankt Petersburg", "Krakow", "Dubrovnik", "Edinburgh", "Venedik",
        ],
        naughty: [
          "F4ke Taxi", "Genelev", "Yatak Odası", "Küvet", "Banyo", "Balkon", "Moda Sahili",
          "Er0tik Shop", "Amsterdam Redl1ght", "Esk0rt", "Çıplaklar Plajı", "Striptiz Kulübü",
          "0rgy Partisi", "Br4zzers Stüdyosu", "P0rnHub",
        ],
      },
      en: {
        dailyLife: [
            "Supermarket","Park","Cinema","School","Hospital","Restaurant","Hotel","Airport",
            "Bank","Beach","Coffee Shop","Mosque","Circus","Court","Factory","Forest","Lake",
            "Sea","Village","Auto Repair","Library","Museum","Tuition Center","Police Station",
            "Toilet","Tax Office",
        ],
        sciFi: [
            "Parallel Universe","Atlantis","Hogwarts","Earth's Core","Space Station",
            "Mars","Starship","Galaxy","Black Hole","Ice Age","Post-Apocalyptic World",
        ],
        middleAges: [
            "Castle","Dungeon","Market","Church","Village Square","Silk Road","Caravanserai",
            "Ottoman Palace","Byzantine Empire","Viking Village","Swordsmith's Workshop",
            "Knight Tournament","Witch Execution","Peasant House","Village Fountain","Trading Caravan",
        ],
        turkey: [
            "Istanbul","Kadıköy","Konya","Heybeliada","Anıtkabir","Uludağ","Çanakkale",
            "Bodrum","Parliament","Maiden's Tower","Ephesus","Pamukkale","Cappadocia",
            "Nasreddin Hodja Statue","Hagia Sophia","Bosphorus","Topkapı Palace",
            "Galata Tower","Süleymaniye Mosque","Beyoğlu","Kalkan","Fethiye","Antalya",
        ],
        europe: [
            "London","Paris","Greece","Berlin","Rome","Barcelona","Amsterdam",
            "Vienna","Prague","Budapest","Stockholm","Geneva","Copenhagen","Brussels",
            "Zurich","Dublin","Oslo","Helsinki","Lisbon","Madrid","Athens",
            "Moscow","Saint Petersburg","Krakow","Dubrovnik","Edinburgh","Venice",
        ],
        naughty: [
          "Fake Taxi","Brothel","Bedroom","Bathtub","Bathroom","Balcony","Fashion Beach",
          "Erotic Shop","Red Light District","Escort","Nudist Beach","Strip Club",
          "Orgy Party","Adult Studio","PornHub",
        ],
      },
      fr: {
        dailyLife: [
            "Supermarché","Parc","Cinéma","École","Hôpital","Restaurant","Hôtel","Aéroport",
            "Banque","Plage","Café","Mosquée","Cirque","Tribunal","Usine","Forêt","Lac",
            "Mer","Village","Garage","Bibliothèque","Musée","Centre de soutien","Commissariat",
            "Toilettes","Service des impôts",
        ],
        sciFi: [
            "Univers Parallèle","Atlantide","Poudlard","Noyau de la Terre","Station Spatiale",
            "Mars","Vaisseau Spatial","Galaxie","Trou Noir","Ère Glaciaire","Monde Post-Apocalyptique",
        ],
        middleAges: [
            "Château","Donjon","Marché","Église","Place du Village","Route de la Soie","Caravansérail",
            "Palais Ottoman","Empire Byzantin","Village Viking","Atelier du Forgeron",
            "Tournoi de Chevaliers","Exécution de Sorcière","Maison Paysanne","Fontaine du Village","Caravane Commerciale",
        ],
        turkey: [
            "Istanbul","Kadıköy","Konya","Heybeliada","Anıtkabir","Uludağ","Çanakkale",
            "Bodrum","Parlement","Tour de la Jeune Fille","Éphèse","Pamukkale","Cappadoce",
            "Statue de Nasreddin Hoca","Sainte-Sophie","Bosphore","Palais de Topkapı",
            "Tour de Galata","Mosquée Süleymaniye","Beyoğlu","Kalkan","Fethiye","Antalya",
        ],
        europe: [
            "Londres","Paris","Grèce","Berlin","Rome","Barcelone","Amsterdam",
            "Vienne","Prague","Budapest","Stockholm","Genève","Copenhague","Bruxelles",
            "Zurich","Dublin","Oslo","Helsinki","Lisbonne","Madrid","Athènes",
            "Moscou","Saint-Pétersbourg","Cracovie","Dubrovnik","Édimbourg","Venise",
        ],
        naughty: [
          "Taxi Bidon","Bordel","Chambre","Baignoire","Salle de Bain","Balcon","Plage de la Mode",
          "Boutique Érotique","Quartier Rouge","Escort","Plage Naturiste","Club de Strip-tease",
          "Fête Orgie","Studio Adulte","PornHub",
        ],
      },
      it: {
        dailyLife: [
            "Supermercato","Parco","Cinema","Scuola","Ospedale","Ristorante","Hotel","Aeroporto",
            "Banca","Spiaggia","Caffetteria","Moschea","Circo","Tribunale","Fabbrica","Foresta","Lago",
            "Mare","Villaggio","Officina","Biblioteca","Museo","Centro Studio","Stazione di Polizia",
            "Bagno","Agenzia delle Entrate",
        ],
        sciFi: [
            "Universo Parallelo","Atlantide","Hogwarts","Nucleo della Terra","Stazione Spaziale",
            "Marte","Astronave","Galassia","Buco Nero","Era Glaciale","Mondo Post-Apocalittico",
        ],
        middleAges: [
            "Castello","Prigione","Mercato","Chiesa","Piazza del Villaggio","Via della Seta","Caravanserraglio",
            "Palazzo Ottomano","Impero Bizantino","Villaggio Vichingo","Officina del Fabbro",
            "Torni di Cavalieri","Esecuzione di Strega","Casa Contadina","Fontana del Villaggio","Carovana Commerciale",
        ],
        turkey: [
            "Istanbul","Kadıköy","Konya","Heybeliada","Anıtkabir","Uludağ","Çanakkale",
            "Bodrum","Parlamento","Torre della Fanciulla","Efeso","Pamukkale","Cappadocia",
            "Statua di Nasreddin Hoca","Santa Sofia","Bosphorus","Palazzo Topkapı",
            "Torre di Galata","Moschea di Süleymaniye","Beyoğlu","Kalkan","Fethiye","Antalya",
        ],
        europe: [
            "Londra","Parigi","Grecia","Berlino","Roma","Barcellona","Amsterdam",
            "Vienna","Praga","Budapest","Stoccolma","Ginevra","Copenaghen","Bruxelles",
            "Zurigo","Dublino","Oslo","Helsinki","Lisbona","Madrid","Atene",
            "Mosca","San Pietroburgo","Cracovia","Dubrovnik","Edimburgo","Venezia",
        ],
        naughty: [
          "Fake Taxi","Bordello","Camera da Letto","Vasca","Bagno","Balcone","Spiaggia della Moda",
          "Negozio Erotico","Quartiere a Luci Rosse","Escort","Spiaggia Nudisti","Strip Club",
          "Festa Orgia","Studio Adulto","PornHub",
        ],
      },
      de: {
        dailyLife: [
            "Supermarkt","Park","Kino","Schule","Krankenhaus","Restaurant","Hotel","Flughafen",
            "Bank","Strand","Café","Moschee","Zirkus","Gericht","Fabrik","Wald","See",
            "Meer","Dorf","Autowerkstatt","Bibliothek","Museum","Lernzentrum","Polizeistation",
            "Toilette","Finanzamt",
        ],
        sciFi: [
            "Paralleles Universum","Atlantis","Hogwarts","Erdkern","Raumstation",
            "Mars","Raumschiff","Galaxie","Schwarzes Loch","Eiszeit","Postapokalyptische Welt",
        ],
        middleAges: [
            "Burg","Kerker","Markt","Kirche","Dorfsplatz","Seidenstraße","Karawanserei",
            "Osmanischer Palast","Byzantinisches Reich","Wikingerdorf","Schmiedewerkstatt",
            "Ritterturnier","Hexenverbrennung","Bauernhaus","Dorfbrunnen","Handelskarawane",
        ],
        turkey: [
            "Istanbul","Kadıköy","Konya","Heybeliada","Anıtkabir","Uludağ","Çanakkale",
            "Bodrum","Parlament","Mädchenturm","Ephesus","Pamukkale","Kappadokien",
            "Nasreddin Hoca Statue","Hagia Sophia","Bosporus","Topkapı Palast",
            "Galata Turm","Süleymaniye Moschee","Beyoğlu","Kalkan","Fethiye","Antalya",
        ],
        europe: [
            "London","Paris","Griechenland","Berlin","Rom","Barcelona","Amsterdam",
            "Wien","Prag","Budapest","Stockholm","Genf","Kopenhagen","Brüssel",
            "Zürich","Dublin","Oslo","Helsinki","Lissabon","Madrid","Athen",
            "Moskau","Sankt Petersburg","Krakau","Dubrovnik","Edinburgh","Venedig",
        ],
        naughty: [
          "Fake Taxi","Bordell","Schlafzimmer","Wanne","Badezimmer","Balkon","Mode Strand",
          "Erotik Shop","Rotlichtviertel","Escort","Nacktbadestrand","Stripclub",
          "Orgie Party","Adult Studio","PornHub",
        ],
      }
    };

    let currentLocationsPool = [];
    let countdownInterval;
    // track removed locations across rounds (empty until user starts removing)
    window.removedLocations = new Set();
    window.lastAssignedLocation = null;

    const MIN_PLAYERS = 2;
    const MAX_PLAYERS = 50;
    const MIN_SPIES = 1;

    const MIN_DURATION_SECONDS = 30; // 00:30
    const MAX_DURATION_SECONDS = 59 * 60 + 30; // 59:30
    const DURATION_STEP_SECONDS = 30;

    const BASE_SECONDS_PER_CIVILIAN = 90;


    let playerCount = 4;
    let spyCount = 1;
    let gameDurationSeconds; // This will hold the current selected duration

    // Store game state variables for "Tekrar Oyna"
    let lastPlayersNames = [];
    let lastPlayerCount = 0;
    let lastSpyCount = 0;
    let lastGameDurationSeconds = 0;

    // DOM Elements
    const titleInfoSection = document.getElementById('title-info-section');
    const gameParametersSection = document.getElementById('game-parameters-section');
    const gameInterfaceSection = document.getElementById('game-interface-section');

    const playerCountDisplay = document.getElementById('player-count-display');
    const spyCountDisplay = document.getElementById('spy-count-display');
    const recommendedSpyCountDisplay = document.getElementById('recommended-spy-count');
    const durationDisplay = document.getElementById('duration-display');
    const recommendedDurationDisplay = document.getElementById('recommended-duration-count');
    const nameInputsContainer = document.getElementById('name-inputs-container');
    const customPlacesContainer = document.getElementById('custom-places-container');
    const removePlayedToggle = document.getElementById('remove-played-toggle');
    const noPlacesMessage = document.getElementById('no-places-message');
    const countdownElement = document.getElementById("countdown");
    const cardsContainer = document.getElementById("cards-container");
    const startButton = document.getElementById("start-button");
    const resetButton = document.getElementById("reset-button");
    const restartButton = document.getElementById('restart-button');
    const commenceCountdownButton = document.getElementById('commence-countdown-button');
    const showSpiesButton = document.getElementById('show-spies-button');
    const languageSelect = document.getElementById('language-select');

    // i18n strings
    const i18n = {
        tr: {
            title: 'Casus Kim?',
            description: `Oyunda herkese rastgele atanan iki rol vardır: Köylüler ve casuslar. <br>
                Köylülere bir yer ismi verilir. Casuslar ise bu yer ismini bilmezler. Casuslar, köylülerin
                söylediklerini dinleyerek bu yer ismini doğru tahmin etmeye çalışırlar. Köylüler ise süre dolmadan casusların kim
                olduğunu bulmaya çalışırlar.`,
            settingsTitle: 'Oyun Ayarları',
            playerCountLabel: 'Oyuncu Sayısı',
            spyCountLabel: 'Casus Sayısı',
            durationLabel: 'Süre',
            startButton: 'OYNA!',
            commenceButton: 'BAŞLA!',
            restartButton: 'Tekrar Oyna',
            showSpiesButton: 'Casusları Göster',
            resetButton: 'Ayarları değiştir',
            categoryTitle: 'Mekan Kategorileri',
            categoryInfo: 'İstediğiniz tüm kategorileri seçebilirsiniz.',
            switchText: 'Oynanmış mekanı havuzdan çıkar (Tekrar Oynama)',
            noPlacesMessage: 'Havuz boşaldı; yeni bir tur başlatmak için kategori seçimlerini veya ayarları değiştirin.',
            playerNamePlaceholder: 'Oyuncu {n} Adı',
            customPlacePlaceholder: 'Özel mekan ismi',
            alerts: {
                noCategory: 'Oyun başlatılamadı: Mekan seçimi için en az bir kategori seçili olmalı!',
                namesCountMismatch: 'Girdiğiniz isim sayısı oyuncu sayısına eşit olmalı.',
                spiesTooMany: 'Casus sayısı oyuncu sayısından az olmalı!',
                tooManySpies: 'Çok fazla casus seçtiniz!',
                playFirst: 'Önce bir oyun başlatmalısınız!',
                cardsNotCreated: 'Kartlar oluşturulamadı, oyuncu sayısını kontrol edin.',
            },
            categories: {
                dailyLife: 'Günlük Hayat', sciFi: 'Bilim Kurgu', middleAges: 'Orta Çağ', turkey: 'Türkiye', europe: 'Avrupa', saintJoseph: 'Saint-Joseph', naughty: '+18', custom: 'Kendin Ekle'
            },
            roles: { spy: 'CASUS', civilian: 'Köylüsün' }
            ,
            languageLabel: 'dil',
            banner: 'casus.dens.dev yakında yeni adresine taşınacak: casuskim.net',
            footer: `<b>Casus Kim? v2.1</b> 25w47a | © 2025 densdev\nAlexandr Ushan'ın Spyfall oyunu üzerine kurulmuştur.`
        },
        en: {
            title: 'Who\'s the Spy?',
            description: `Players are randomly assigned two roles: Civilians and Spies. <br>
                Civilians are given a location name. Spies do not know the location. Spies listen to clues
                and try to guess the location while civilians try to identify the spies before time runs out.`,
            settingsTitle: 'Game Settings',
            playerCountLabel: 'Players',
            spyCountLabel: 'Spies',
            durationLabel: 'Duration',
            startButton: 'PLAY!',
            commenceButton: 'START!',
            restartButton: 'Play Again',
            showSpiesButton: 'Show Spies',
            resetButton: 'Change Settings',
            categoryTitle: 'Location Categories',
            categoryInfo: 'You can select any categories you want.',
            switchText: 'Remove played location from pool (no repeats)',
            noPlacesMessage: 'Pool is empty; change categories or settings to continue playing.',
            playerNamePlaceholder: 'Player {n} Name',
            customPlacePlaceholder: 'Custom place name',
            alerts: {
                noCategory: 'Cannot start: at least one category must be selected!',
                namesCountMismatch: 'Number of entered names must match player count.',
                spiesTooMany: 'Number of spies must be less than players!',
                tooManySpies: 'Too many spies selected!',
                playFirst: 'You must start a game first!',
                cardsNotCreated: 'Cards could not be created, check player count.',
            },
            categories: { dailyLife: 'Daily Life', sciFi: 'Sci-Fi', middleAges: 'Middle Ages', turkey: 'Turkey', europe: 'Europe', saintJoseph: 'Saint-Joseph', naughty: '18+', custom: 'Add Custom' },
            roles: { spy: 'SPY', civilian: 'You are a Civilian' }
            ,
            languageLabel: 'language',
            banner: 'casus.dens.dev will soon move to its new address: casuskim.net',
            footer: `<b>Casus Kim? v2.1</b> 25w71a | © 2025 densdev\nBased on Alexandr Ushan's Spyfall game.`
        },
        fr: {
            title: 'Qui est l\'Espion ?',
            description: `Les joueurs reçoivent deux rôles aléatoires : Civils et Espions. <br>
                Les Civils reçoivent un nom de lieu. Les Espions ne connaissent pas le lieu. Les espions écoutent
                les indices et essaient de deviner le lieu pendant que les civils tentent d'identifier les espions.`,
            settingsTitle: 'Paramètres du jeu',
            playerCountLabel: 'Joueurs',
            spyCountLabel: 'Espions',
            durationLabel: 'Durée',
            startButton: 'JOUER!',
            commenceButton: 'DÉMARRER!',
            restartButton: 'Rejouer',
            showSpiesButton: 'Montrer les espions',
            resetButton: 'Modifier les paramètres',
            categoryTitle: 'Catégories de lieux',
            categoryInfo: 'Vous pouvez sélectionner toutes les catégories que vous souhaitez.',
            switchText: 'Retirer le lieu joué de la réserve (pas de répétition)',
            noPlacesMessage: 'La réserve est vide ; changez les catégories ou paramètres pour continuer.',
            playerNamePlaceholder: 'Joueur {n} Nom',
            customPlacePlaceholder: 'Nom de lieu personnalisé',
            alerts: {
                noCategory: 'Impossible de démarrer : au moins une catégorie doit être sélectionnée !',
                namesCountMismatch: "Le nombre de noms saisis doit correspondre au nombre de joueurs.",
                spiesTooMany: "Le nombre d'espions doit être inférieur au nombre de joueurs !",
                tooManySpies: "Trop d'espions sélectionnés !",
                playFirst: "Vous devez d'abord lancer une partie !",
                cardsNotCreated: "Les cartes n'ont pas pu être créées, vérifiez le nombre de joueurs.",
            },
            categories: { dailyLife: 'Vie quotidienne', sciFi: 'Science-Fiction', middleAges: 'Moyen Âge', turkey: 'Turquie', europe: 'Europe', saintJoseph: 'Saint-Joseph', naughty: '18+', custom: 'Ajouter personnalisé' },
            roles: { spy: 'ESPION', civilian: 'Tu es un Civil' }
            ,
            languageLabel: 'langue',
            banner: 'casus.dens.dev va bientôt déménager vers sa nouvelle adresse : casuskim.net',
            footer: `<b>Casus Kim? v2.1</b> 25w71a | © 2025 densdev\nBasé sur le jeu Spyfall d'Alexandr Ushan.`
        },
        it: {
            title: 'Chi è la Spia?',
            description: `I giocatori ricevono ruoli casuali: Cittadini e Spie. <br>
                I Cittadini ricevono il nome di un luogo. Le Spie non conoscono il luogo. Le spie ascoltano gli indizi
                e cercano di indovinare il luogo mentre i cittadini cercano di trovare le spie.`,
            settingsTitle: 'Impostazioni di gioco',
            playerCountLabel: 'Giocatori',
            spyCountLabel: 'Spie',
            durationLabel: 'Durata',
            startButton: 'GIOCA!',
            commenceButton: 'AVVIA!',
            restartButton: 'Rigioca',
            showSpiesButton: 'Mostra le spie',
            resetButton: 'Cambia impostazioni',
            categoryTitle: 'Categorie di luoghi',
            categoryInfo: 'Puoi selezionare tutte le categorie che desideri.',
            switchText: 'Rimuovi il luogo giocato dalla riserva (no ripetizioni)',
            noPlacesMessage: 'La riserva è vuota; cambia categorie o impostazioni per continuare.',
            playerNamePlaceholder: 'Giocatore {n} Nome',
            customPlacePlaceholder: 'Nome luogo personalizzato',
            alerts: {
                noCategory: 'Impossibile avviare: almeno una categoria deve essere selezionata!',
                namesCountMismatch: 'Il numero di nomi inseriti deve corrispondere al numero di giocatori.',
                spiesTooMany: 'Il numero di spie deve essere inferiore ai giocatori!',
                tooManySpies: 'Troppe spie selezionate!',
                playFirst: 'Devi prima avviare una partita!',
                cardsNotCreated: 'Impossibile creare le carte, controlla il numero di giocatori.',
            },
            categories: { dailyLife: 'Vita quotidiana', sciFi: 'Fantascienza', middleAges: 'Medioevo', turkey: 'Turchia', europe: 'Europa', saintJoseph: 'Saint-Joseph', naughty: '18+', custom: 'Aggiungi personalizzato' },
            roles: { spy: 'SPIA', civilian: 'Sei un Civile' }
            ,
            languageLabel: 'lingua',
            banner: 'casus.dens.dev presto si trasferirà al suo nuovo indirizzo: casuskim.net',
            footer: `<b>Casus Kim? v2.1</b> 25w71a | © 2025 densdev\nBasato sul gioco Spyfall di Alexandr Ushan.`
        },
        de: {
            title: 'Wer ist der Spion?',
            description: `Den Spielern werden zufällig zwei Rollen zugewiesen: Zivilisten und Spione. <br>
                Zivilisten erhalten einen Ortsnamen. Spione kennen den Ort nicht. Spione hören Hinweise
                und versuchen, den Ort zu erraten, während die Zivilisten die Spione aufdecken wollen.`,
            settingsTitle: 'Spiel Einstellungen',
            playerCountLabel: 'Spieler',
            spyCountLabel: 'Spione',
            durationLabel: 'Dauer',
            startButton: 'SPIELEN!',
            commenceButton: 'START!',
            restartButton: 'Nochmal spielen',
            showSpiesButton: 'Spione zeigen',
            resetButton: 'Einstellungen ändern',
            categoryTitle: 'Ortskategorien',
            categoryInfo: 'Sie können beliebige Kategorien auswählen.',
            switchText: 'Gespielte Orte aus Pool entfernen (keine Wiederholung)',
            noPlacesMessage: 'Pool ist leer; ändern Sie Kategorien oder Einstellungen, um weiterzuspielen.',
            playerNamePlaceholder: 'Spieler {n} Name',
            customPlacePlaceholder: 'Benutzerdefinierter Ortsname',
            alerts: {
                noCategory: 'Kann nicht starten: mindestens eine Kategorie muss ausgewählt sein!',
                namesCountMismatch: 'Anzahl der eingetragenen Namen muss der Spielerzahl entsprechen.',
                spiesTooMany: 'Anzahl der Spione muss kleiner als die Spieleranzahl sein!',
                tooManySpies: 'Zu viele Spione ausgewählt!',
                playFirst: 'Sie müssen zuerst ein Spiel starten!',
                cardsNotCreated: 'Karten konnten nicht erstellt werden, überprüfen Sie die Spieleranzahl.',
            },
            categories: { dailyLife: 'Alltag', sciFi: 'Sci-Fi', middleAges: 'Mittelalter', turkey: 'Türkei', europe: 'Europa', saintJoseph: 'Saint-Joseph', naughty: '18+', custom: 'Benutzerdefiniert' },
            roles: { spy: 'SPION', civilian: 'Du bist ein Zivilist' }
            ,
            languageLabel: 'sprache',
            banner: 'casus.dens.dev wird bald an seine neue Adresse umziehen: casuskim.net',
            footer: `<b>Casus Kim? v2.1</b> 25w71a | © 2025 densdev\nBasierend auf dem Spyfall-Spiel von Alexandr Ushan.`
        }
    };

    let currentLang = 'tr';

    // Helper functions for time formatting
    function secondsToMMSS(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    // Helper functions for UI updates
    function updatePlayerCountDisplay() {
        playerCountDisplay.textContent = playerCount;
        updateMaxSpyCount();
        updateRecommendedSpyCount();
        
        gameDurationSeconds = calculateRecommendedDuration();
        updateDurationDisplay(); 
        updateRecommendedDurationDisplay();
        
        generateNameInputs();
    }

    // Helper to get translated text
    function t(keyPath, vars) {
        const parts = keyPath.split('.');
        let cur = i18n[currentLang];
        for (const p of parts) {
            if (!cur) return '';
            cur = cur[p];
        }
        if (typeof cur === 'string' && vars) {
            Object.keys(vars).forEach(k => {
                cur = cur.replace(`{${k}}`, vars[k]);
            });
        }
        return cur || '';
    }

    function applyTranslations() {
        // Title and description
        const titleEl = document.querySelector('#title-info-section h2');
        const descEl = document.querySelector('#title-info-section p');
        if (titleEl) titleEl.textContent = t('title');
        if (descEl) descEl.innerHTML = t('description');

        // Section titles
        const settingsTitleEl = document.querySelector('#game-parameters-section .section-title');
        if (settingsTitleEl) settingsTitleEl.textContent = t('settingsTitle');

        // Counter labels (they are the first three labels in .counter-row)
        const counterLabels = document.querySelectorAll('.counter-item label');
        if (counterLabels && counterLabels.length >= 3) {
            counterLabels[0].textContent = t('playerCountLabel');
            counterLabels[1].textContent = t('spyCountLabel');
            counterLabels[2].textContent = t('durationLabel');
        }

        // Category title and info
        const catTitle = document.querySelector('.category-title');
        const catInfo = document.querySelector('#location-categories p');
        if (catTitle) catTitle.textContent = t('categoryTitle');
        if (catInfo) catInfo.textContent = t('categoryInfo');

        // Category box labels
        const categoryBoxes = document.querySelectorAll('.category-box');
        categoryBoxes.forEach(box => {
            const checkbox = box.querySelector('.category-toggle');
            const span = box.querySelector('span');
            if (checkbox && span) {
                const key = checkbox.value;
                const label = (i18n[currentLang].categories && i18n[currentLang].categories[key]) || key;
                span.textContent = label;
            }
        });

        // Buttons
        if (startButton) startButton.textContent = t('startButton');
        if (commenceCountdownButton) commenceCountdownButton.textContent = t('commenceButton');
        if (showSpiesButton) showSpiesButton.textContent = t('showSpiesButton');
        if (restartButton) restartButton.innerHTML = `<i class="fa-solid fa-rotate-right"></i> &nbsp;${t('restartButton')}`;
        if (resetButton) resetButton.innerHTML = `<i class="fa-solid fa-sliders"></i> &nbsp; ${t('resetButton')}`;

        // Switch text and message
        const switchTextEl = document.querySelector('.switch-text');
        if (switchTextEl) switchTextEl.textContent = t('switchText');
        if (noPlacesMessage) noPlacesMessage.textContent = t('noPlacesMessage');

        // Language label and banner
        const langLabelEl = document.getElementById('language-label');
        if (langLabelEl) langLabelEl.textContent = t('languageLabel');
        const bannerEl = document.getElementById('top-banner');
        if (bannerEl) {
            const text = t('banner') || '';
            bannerEl.textContent = text;
            bannerEl.style.display = text ? 'block' : 'none';
        }

        // Update name input placeholders
        generateNameInputs();

        // Update custom input placeholder text for any existing custom inputs
        const customInputs = document.querySelectorAll('#custom-places-container input[type="text"]');
        customInputs.forEach(inp => inp.placeholder = t('customPlacePlaceholder'));

        // Update footer text minimally (keep credit link)
        const footer = document.querySelector('.footer-text');
        if (footer) {
            const f = t('footer') || '';
            // Replace 'densdev' token with a clickable link, then convert newlines to <br>
            const linked = f.replace(/densdev/g, '<a href="https://dens.dev" target="_blank" rel="noopener noreferrer">densdev</a>');
            footer.innerHTML = linked.replace(/\n/g, '<br>');
        }
    }

    function updateSpyCountDisplay() {
        spyCountDisplay.textContent = spyCount;
        updateRecommendedSpyCount();

        gameDurationSeconds = calculateRecommendedDuration();
        updateDurationDisplay();
        updateRecommendedDurationDisplay();
    }

    function updateDurationDisplay() {
        durationDisplay.textContent = secondsToMMSS(gameDurationSeconds);
    }

    function calculateRecommendedDuration() {
        const numCivilians = Math.max(1, playerCount - spyCount); 
        const rawSeconds = numCivilians * BASE_SECONDS_PER_CIVILIAN;

        const roundedSeconds = Math.round(rawSeconds / DURATION_STEP_SECONDS) * DURATION_STEP_SECONDS;

        return Math.max(MIN_DURATION_SECONDS, Math.min(MAX_DURATION_SECONDS, roundedSeconds));
    }

    function updateRecommendedSpyCount() {
        const recommended = Math.ceil(playerCount / 5);
        recommendedSpyCountDisplay.textContent = `Önerilen: ${recommended}`;
    }

    function updateRecommendedDurationDisplay() {
        const recommended = calculateRecommendedDuration();
        recommendedDurationDisplay.textContent = `Önerilen: ${secondsToMMSS(recommended)}`;
    }

    function updateMaxSpyCount() {
        const maxAllowedSpies = Math.max(MIN_SPIES, playerCount - 1);
        if (spyCount > maxAllowedSpies) {
            spyCount = maxAllowedSpies;
            updateSpyCountDisplay();
        }
    }

    function generateNameInputs() {
        nameInputsContainer.innerHTML = '';
        for (let i = 0; i < playerCount; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.id = `player-name-${i}`;
            input.placeholder = t('playerNamePlaceholder', { n: i + 1 });
            nameInputsContainer.appendChild(input);
        }
    }

    // Initialize display and inputs on load
    gameDurationSeconds = calculateRecommendedDuration();
    updatePlayerCountDisplay();
    updateSpyCountDisplay();
    updateDurationDisplay();
    updateRecommendedSpyCount();
    updateRecommendedDurationDisplay();


    // Event Listeners for Player Count Buttons
    document.getElementById('decrease-players').addEventListener('click', () => {
        if (playerCount > MIN_PLAYERS) {
            playerCount--;
            updatePlayerCountDisplay();
        }
    });

    document.getElementById('increase-players').addEventListener('click', () => {
        if (playerCount < MAX_PLAYERS) {
            playerCount++;
            updatePlayerCountDisplay();
        }
    });

    // Event Listeners for Spy Count Buttons
    document.getElementById('decrease-spies').addEventListener('click', () => {
        if (spyCount > MIN_SPIES) {
            spyCount--;
            updateSpyCountDisplay();
        }
    });

    document.getElementById('increase-spies').addEventListener('click', () => {
        const maxAllowedSpies = playerCount - 1;
        if (spyCount < maxAllowedSpies) {
            spyCount++;
            updateSpyCountDisplay();
        }
    });

    // Event Listeners for Duration Count Buttons
    document.getElementById('decrease-duration').addEventListener('click', () => {
        if (gameDurationSeconds - DURATION_STEP_SECONDS >= MIN_DURATION_SECONDS) {
            gameDurationSeconds -= DURATION_STEP_SECONDS;
            updateDurationDisplay();
        } else {
            gameDurationSeconds = MIN_DURATION_SECONDS;
            updateDurationDisplay();
        }
    });

    document.getElementById('increase-duration').addEventListener('click', () => {
        if (gameDurationSeconds + DURATION_STEP_SECONDS <= MAX_DURATION_SECONDS) {
            gameDurationSeconds += DURATION_STEP_SECONDS;
            updateDurationDisplay();
        } else {
            gameDurationSeconds = MAX_DURATION_SECONDS;
            updateDurationDisplay();
        }
    });

    // Location Pool Logic
    function updateLocationPool() {
        currentLocationsPool = [];
        const categoryToggles = document.querySelectorAll('.category-toggle');
        categoryToggles.forEach(toggle => {
            if (toggle.checked) {
                const categoryKey = toggle.value;
                const langLocations = (locationsByLang[currentLang] || locationsByLang['tr']);
                if (langLocations && langLocations[categoryKey]) {
                    currentLocationsPool.push(...langLocations[categoryKey]);
                }
            }
        });

        // If custom category selected, include custom places entered by the user
        const customToggle = document.querySelector('.category-toggle[value="custom"]');
        if (customToggle && customToggle.checked && customPlacesContainer) {
            const inputs = customPlacesContainer.querySelectorAll('input[type="text"]');
            inputs.forEach(input => {
                const val = input.value.trim();
                if (val !== '') currentLocationsPool.push(val);
            });
        }

        // If the "remove played" option is enabled, filter out already-used locations
        if (removePlayedToggle && removePlayedToggle.checked && window.removedLocations instanceof Set) {
            currentLocationsPool = currentLocationsPool.filter(loc => !window.removedLocations.has(loc));
        }

        // Update UI availability if in-game
        checkPoolAvailability();
    }

    const categoryBoxes = document.querySelectorAll('.category-box');
    categoryBoxes.forEach(box => {
        const checkbox = box.querySelector('.category-toggle');

        if (checkbox.checked) {
            box.classList.add('selected');
        }

        box.addEventListener('click', function() {
            checkbox.checked = !checkbox.checked;
            this.classList.toggle('selected', checkbox.checked);

            updateLocationPool();
            // Show/hide custom places inputs when the custom category is toggled
            if (checkbox.value === 'custom' && customPlacesContainer) {
                customPlacesContainer.classList.toggle('hidden', !checkbox.checked);
                // initialize at least one input when shown
                if (checkbox.checked) {
                    ensureCustomInputsInitialized();
                }
            }
        });
    });

    // Custom places dynamic inputs
    function createCustomInput() {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = t('customPlacePlaceholder');
        input.addEventListener('input', onCustomInputChange);
        return input;
    }

    function ensureCustomInputsInitialized() {
        if (!customPlacesContainer) return;
        const existing = customPlacesContainer.querySelectorAll('input[type="text"]');
        if (existing.length === 0) {
            customPlacesContainer.appendChild(createCustomInput());
        }
    }

    function onCustomInputChange(e) {
        const inputs = Array.from(customPlacesContainer.querySelectorAll('input[type="text"]'));
        const last = inputs[inputs.length - 1];
        // If last input now has text, append another blank input
        if (this === last && this.value.trim() !== '') {
            // limit to reasonable amount to avoid runaway
            if (inputs.length < 100) customPlacesContainer.appendChild(createCustomInput());
        }

        // Remove extra trailing empty inputs so there's only one blank at the end
        const updated = Array.from(customPlacesContainer.querySelectorAll('input[type="text"]'));
        for (let i = updated.length - 1; i > 0; i--) {
            const cur = updated[i];
            const prev = updated[i - 1];
            if (cur.value.trim() === '' && prev.value.trim() === '') {
                cur.remove();
            } else {
                break;
            }
        }
    }

    // Initialize custom inputs container state on load
    if (customPlacesContainer) {
        // keep it hidden until user toggles "Özel"
        customPlacesContainer.classList.add('hidden');
    }

    // Countdown Logic
    let animationFrameId;

    function startCountdown(totalSeconds) {
        const startTime = new Date().getTime();
        const endTime = startTime + totalSeconds * 1000;

        function animateCountdown() {
            const now = new Date().getTime();
            const timeRemaining = endTime - now;

            if (timeRemaining <= 0) {
                countdownElement.textContent = "00:00";
                cancelAnimationFrame(animationFrameId);
                showSpiesButton.classList.remove('hidden'); // Show the "Casusları Göster" button
                showSpiesButton.disabled = false;
                commenceCountdownButton.classList.add('hidden'); // Hide the start button if still visible
                return;
            }

            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            countdownElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            animationFrameId = requestAnimationFrame(animateCountdown);
        }
        animationFrameId = requestAnimationFrame(animateCountdown);
    }

    function resetCountdownDisplay() {
        cancelAnimationFrame(animationFrameId);
        countdownElement.textContent = secondsToMMSS(gameDurationSeconds);
    }

    // Game Core Logic
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function getRandomLocation() {
        if (currentLocationsPool.length === 0) {
            alert(t('alerts.noCategory'));
            return "UNKNOWN LOCATION (No categories selected)";
        }
        const index = getRandomInt(0, currentLocationsPool.length - 1);
        return currentLocationsPool[index];
    }

    // Keep track of the last assigned non-spy location so we can remove it on replay if needed
    // window.lastAssignedLocation will be set inside assignRoles

    function cardClickHandler(event) {
        const card = event.currentTarget;
        if (card.classList.contains("flipped")) return;

        card.classList.add("flipped");

        setTimeout(() => {
            const isSpy = card.dataset.spy === "true";
            const playerName = card.querySelector('.player-name-front').textContent;
            const backContentDiv = card.querySelector(".back");

            backContentDiv.innerHTML = ''; // Clear previous content

            // Add player info to the back
            const playerInfoDiv = document.createElement('div');
            playerInfoDiv.classList.add('card-player-info');
            playerInfoDiv.innerHTML = `<span class="user-icon">👤</span><span class="player-name-back">${playerName}</span>`;
            backContentDiv.appendChild(playerInfoDiv);

            // Add role label
            const roleLabelDiv = document.createElement('div');
            roleLabelDiv.classList.add('card-role-label');
            if (isSpy) {
                roleLabelDiv.innerHTML = `<span class="spy-text">${t('roles.spy')}</span>`;
            } else {
                roleLabelDiv.textContent = t('roles.civilian');
            }
            backContentDiv.appendChild(roleLabelDiv);

            // Add location if not a spy
            if (!isSpy) {
                const locationNameDiv = document.createElement('div');
                locationNameDiv.classList.add('card-location-name');
                locationNameDiv.textContent = card.dataset.location;
                backContentDiv.appendChild(locationNameDiv);
            }

            setTimeout(() => {
                card.classList.remove("flipped");
                setTimeout(() => {
                    backContentDiv.innerHTML = ""; // Clear back content when flipped back
                }, 300);
            }, 2000); // Card stays flipped for 2 seconds
        }, 100);
    }

    function createCards(numCards, names) {
        cardsContainer.innerHTML = "";

        for (let i = 0; i < numCards; i++) {
            const card = document.createElement("div");
            card.classList.add("card");
            card.id = `card-${i + 1}`;

            const front = document.createElement("div");
            front.classList.add("front");
            
            const frontPlayerInfo = document.createElement('div');
            frontPlayerInfo.classList.add('card-player-info');
            frontPlayerInfo.innerHTML = `<span class="user-icon">👤</span><span class="player-name-front">${names[i]}</span>`;
            front.appendChild(frontPlayerInfo);
            card.appendChild(front);

            const back = document.createElement("div");
            back.classList.add("back");
            card.appendChild(back);

            cardsContainer.appendChild(card);
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function assignRoles(numPlayers, numSpies) {
        const cards = Array.from(document.querySelectorAll(".card"));
        if (cards.length === 0) {
            alert(t('alerts.cardsNotCreated'));
            return false;
        }

        const playerIndices = Array.from({ length: numPlayers }, (_, i) => i);
        shuffleArray(playerIndices);

        const spyIndices = playerIndices.slice(0, numSpies);

        const randomLocation = getRandomLocation();
        if (randomLocation === "UNKNOWN LOCATION (No categories selected)") {
            return false;
        }

    // record last assigned location for potential removal on replay
    window.lastAssignedLocation = randomLocation;

        cards.forEach((card, index) => {
            if (spyIndices.includes(index)) {
                card.dataset.spy = "true";
            } else {
                card.dataset.spy = "false";
                card.dataset.location = randomLocation;
            }
        });
        return true;
    }

    // UI helper: check whether pool has any locations left and update the in-game controls
    function checkPoolAvailability() {
        if (!noPlacesMessage || !restartButton) return;

        if (currentLocationsPool.length === 0) {
            // disable replay and show message
            restartButton.disabled = true;
            noPlacesMessage.style.display = 'block';
        } else {
            restartButton.disabled = false;
            noPlacesMessage.style.display = 'none';
        }
    }

    function startActualCountdown() {
        startCountdown(gameDurationSeconds);
        commenceCountdownButton.classList.add('hidden');
        commenceCountdownButton.disabled = true;
    }

    // Main Game Flow Functions
    function initializeGame() {
        updateLocationPool();

        // Hide top banner when entering the game interface
        const bannerElInit = document.getElementById('top-banner');
        if (bannerElInit) bannerElInit.style.display = 'none';

        if (currentLocationsPool.length === 0) {
            alert(t('alerts.noCategory'));
            return;
        }

        const currentNumPlayers = parseInt(playerCountDisplay.textContent, 10);
        const currentNumSpies = parseInt(spyCountDisplay.textContent, 10);
        const currentDurationSeconds = gameDurationSeconds;

        const nameInputs = document.querySelectorAll('#name-inputs-container input[type="text"]');
        const names = Array.from(nameInputs).map((input, index) => {
            const trimmedName = input.value.trim();
            if (trimmedName === '') {
                const defaultName = t('playerNamePlaceholder', { n: index + 1 });
                input.value = defaultName;
                return defaultName;
            }
            return trimmedName;
        });

        if (names.length !== currentNumPlayers) {
            alert(t('alerts.namesCountMismatch'));
            return;
        }
        if (currentNumSpies >= currentNumPlayers) {
            alert(t('alerts.spiesTooMany'));
            return;
        }
        if (currentNumSpies > MAX_PLAYERS - 1) {
            alert(t('alerts.tooManySpies'));
            return;
        }

        // Store current settings for "Tekrar Oyna"
        lastPlayersNames = names;
        lastPlayerCount = currentNumPlayers;
        lastSpyCount = currentNumSpies;
        lastGameDurationSeconds = currentDurationSeconds;

            // Initialize removedLocations set if needed
            if (typeof removedLocations === 'undefined' || removedLocations === null) {
                window.removedLocations = new Set();
            }

        // Hide settings, show game interface
        titleInfoSection.classList.add('hidden');
        gameParametersSection.classList.add('hidden');
        gameInterfaceSection.classList.remove('hidden');

        // Scroll to the top of the page
        window.scrollTo(0, 0);

        resetCountdownDisplay(); // Display initial time, but don't start countdown yet

        // Show and enable the "BAŞLA!" button
        commenceCountdownButton.classList.remove('hidden');
        commenceCountdownButton.disabled = false;
        
        // Hide "Casusları Göster" button and "Tekrar Oyna" until needed
        showSpiesButton.classList.add('hidden');
        showSpiesButton.disabled = true;
        restartButton.classList.add('hidden');

        createCards(currentNumPlayers, names);
        const rolesAssigned = assignRoles(currentNumPlayers, currentNumSpies);

        if (!rolesAssigned) {
            gameInterfaceSection.classList.add('hidden');
            titleInfoSection.classList.remove('hidden');
            gameParametersSection.classList.remove('hidden');
            cardsContainer.innerHTML = "";
            return;
        }

        const cards = document.querySelectorAll(".card");
        cards.forEach((card) => {
            card.addEventListener("click", cardClickHandler);
        });

        // Show "Tekrar Oyna" button after game setup
        restartButton.classList.remove('hidden');
    }

    function resetGame() {
        resetCountdownDisplay();
        cardsContainer.innerHTML = "";

        titleInfoSection.classList.remove('hidden');
        gameParametersSection.classList.remove('hidden');
        gameInterfaceSection.classList.add('hidden');
        
        commenceCountdownButton.classList.remove('hidden');
        commenceCountdownButton.disabled = false;

        showSpiesButton.classList.add('hidden');
        showSpiesButton.disabled = true;
        restartButton.classList.add('hidden'); // Hide restart button when going back to settings
        // Clear removed locations and UI hints when returning to settings
        if (window.removedLocations instanceof Set) window.removedLocations.clear();
        if (noPlacesMessage) noPlacesMessage.style.display = 'none';
        // Show top banner again (if there's banner text for the current language)
        const bannerElReset = document.getElementById('top-banner');
        if (bannerElReset) {
            const txt = t('banner');
            bannerElReset.textContent = txt || '';
            bannerElReset.style.display = txt ? 'block' : 'none';
        }
    }

    function restartGameSameSettings() {
        if (lastPlayersNames.length === 0) {
            alert(t('alerts.playFirst'));
            resetGame(); // Go back to settings if no previous game state
            return;
        }

        resetCountdownDisplay();
        cardsContainer.innerHTML = "";

        // Ensure currentLocationsPool is updated based on saved category selections
        // (Category selections are not changed when restarting, so this is fine)
        // If the user enabled "remove played" then add last assigned location to removed set
        if (removePlayedToggle && removePlayedToggle.checked && window.lastAssignedLocation) {
            if (!(window.removedLocations instanceof Set)) window.removedLocations = new Set();
            window.removedLocations.add(window.lastAssignedLocation);
        }

        updateLocationPool();
        if (currentLocationsPool.length === 0) {
            // Disable replay and inform user
            if (noPlacesMessage) noPlacesMessage.style.display = 'block';
            if (restartButton) restartButton.disabled = true;
            return;
        }

        // Show and enable the "BAŞLA!" button again
        commenceCountdownButton.classList.remove('hidden');
        commenceCountdownButton.disabled = false;

        // Hide "Casusları Göster" button, it should only appear when timer ends
        showSpiesButton.classList.add('hidden');
        showSpiesButton.disabled = true;

        // Re-create cards with stored data
        createCards(lastPlayerCount, lastPlayersNames);
        const rolesAssigned = assignRoles(lastPlayerCount, lastSpyCount);

        if (!rolesAssigned) {
            // This case is unlikely if initializeGame() already passed this check
            // If it happens, go back to initial screen.
            resetGame();
            return;
        }

        const cards = document.querySelectorAll(".card");
        cards.forEach((card) => {
            card.addEventListener("click", cardClickHandler);
        });

        // Ensure "Tekrar Oyna" button remains visible
        restartButton.classList.remove('hidden');

        // Hide top banner while in-game
        const bannerElRestart = document.getElementById('top-banner');
        if (bannerElRestart) bannerElRestart.style.display = 'none';
    }

    // Event Listeners
    startButton.addEventListener("click", initializeGame);
    resetButton.addEventListener("click", resetGame);
    restartButton.addEventListener("click", restartGameSameSettings);
    commenceCountdownButton.addEventListener("click", startActualCountdown);

    // Toggle listener to update pool availability immediately when user toggles the option
    if (removePlayedToggle) {
        removePlayedToggle.addEventListener('change', () => {
            updateLocationPool();
        });
    }

    if (languageSelect) {
        languageSelect.value = currentLang;
        languageSelect.addEventListener('change', (e) => {
            currentLang = e.target.value;
            applyTranslations();
            updateLocationPool();
        });
        // apply initial translations
        applyTranslations();
    }
    // Ensure translations applied even if languageSelect wasn't found above
    applyTranslations();

    showSpiesButton.addEventListener('click', () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.add('flipped'); // Flip all cards
            const isSpy = card.dataset.spy === "true";
            const playerName = card.querySelector('.player-name-front').textContent;
            const backContentDiv = card.querySelector(".back");

            backContentDiv.innerHTML = ''; // Clear previous content

            // Add player info to the back
            const playerInfoDiv = document.createElement('div');
            playerInfoDiv.classList.add('card-player-info');
            playerInfoDiv.innerHTML = `<span class="user-icon">👤</span><span class="player-name-back">${playerName}</span>`;
            backContentDiv.appendChild(playerInfoDiv);

            // Add role label
            const roleLabelDiv = document.createElement('div');
            roleLabelDiv.classList.add('card-role-label');
            if (isSpy) {
                roleLabelDiv.innerHTML = `<span class="spy-text">${t('roles.spy')}</span>`;
            } else {
                roleLabelDiv.textContent = t('roles.civilian');
            }
            backContentDiv.appendChild(roleLabelDiv);

            // Add location if not a spy
            if (!isSpy) {
                const locationNameDiv = document.createElement('div');
                locationNameDiv.classList.add('card-location-name');
                locationNameDiv.textContent = card.dataset.location;
                backContentDiv.appendChild(locationNameDiv);
            }

            // Remove click listener from this card to prevent further individual flips/unflips
            card.removeEventListener('click', cardClickHandler);
        });
        showSpiesButton.classList.add('hidden'); // Hide the button after use
        showSpiesButton.disabled = true;
    });
});