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
          "Fake Taxi","Maison Close","Chambre","Baignoire","Salle de Bain","Balcon","Plage de Mode",
          "Boutique Érotique","Quartier Rouge","Escorte","Plage Nudiste","Club de Strip-tease",
          "Partie Fine","Studio Adulte","PornHub",
        ],
      },
      it: {
        dailyLife: [
            "Supermercato","Parco","Cinema","Scuola","Ospedale","Ristorante","Hotel","Aeroporto",
            "Banca","Spiaggia","Caffetteria","Moschea","Circo","Tribunale","Fabbrica","Foresta","Lago",
            "Mare","Villaggio","Autofficina","Biblioteca","Museo","Centro Ripetizioni","Stazione di Polizia",
            "Bagno","Ufficio delle Imposte",
        ],
        sciFi: [
            "Universo Parallelo","Atlantide","Hogwarts","Nucleo della Terra","Stazione Spaziale",
            "Marte","Astronave","Galassia","Buco Nero","Era Glaciale","Mondo Post-Apocalittico",
        ],
        middleAges: [
            "Castello","Prigione","Mercato","Chiesa","Piazza del Villaggio","Via della Seta","Caravanserraglio",
            "Palazzo Ottomano","Impero Bizantino","Villaggio Vichingo","Bottega del Fabbro",
            "Torneo di Cavalieri","Esecuzione della Strega","Casa Contadina","Fontana del Villaggio","Carovana Commerciale",
        ],
        turkey: [
            "Istanbul","Kadıköy","Konya","Heybeliada","Anıtkabir","Uludağ","Çanakkale",
            "Bodrum","Parlamento","Torre di Leandro","Efeso","Pamukkale","Cappadocia",
            "Statua di Nasreddin Hoca","Santa Sofia","Bosforo","Palazzo Topkapı",
            "Torre di Galata","Moschea di Solimano","Beyoğlu","Kalkan","Fethiye","Antalya",
        ],
        europe: [
            "Londra","Parigi","Grecia","Berlino","Roma","Barcellona","Amsterdam",
            "Vienna","Praga","Budapest","Stoccolma","Ginevra","Copenaghen","Bruxelles",
            "Zurigo","Dublino","Oslo","Helsinki","Lisbona","Madrid","Atene",
            "Mosca","San Pietroburgo","Cracovia","Dubrovnik","Edimburgo","Venezia",
        ],
        naughty: [
          "Fake Taxi","Bordello","Camera da Letto","Vasca da Bagno","Bagno","Balcone","Spiaggia alla Moda",
          "Negozio Erotico","Quartiere a Luci Rosse","Escort","Spiaggia Nudista","Strip Club",
          "Orgia","Studio per Adulti","PornHub",
        ],
      },
      de: {
        dailyLife: [
            "Supermarkt","Park","Kino","Schule","Krankenhaus","Restaurant","Hotel","Flughafen",
            "Bank","Strand","Café","Moschee","Zirkus","Gericht","Fabrik","Wald","See",
            "Meer","Dorf","Autowerkstatt","Bibliothek","Museum","Nachhilfezentrum","Polizeistation",
            "Toilette","Finanzamt",
        ],
        sciFi: [
            "Paralleluniversum","Atlantis","Hogwarts","Erdkern","Raumstation",
            "Mars","Raumschiff","Galaxie","Schwarzes Loch","Eiszeit","Postapokalyptische Welt",
        ],
        middleAges: [
            "Schloss","Verlies","Markt","Kirche","Dorfplatz","Seidenstraße","Karawanserei",
            "Osmanischer Palast","Byzantinisches Reich","Wikingerdorf","Schmiedewerkstatt",
            "Ritterturnier","Hexenhinrichtung","Bauernhaus","Dorfbrunnen","Handelskarawane",
        ],
        turkey: [
            "Istanbul","Kadıköy","Konya","Heybeliada","Anıtkabir","Uludağ","Çanakkale",
            "Bodrum","Parlament","Leanderturm","Ephesos","Pamukkale","Kappadokien",
            "Nasreddin Hodscha Statue","Hagia Sophia","Bosporus","Topkapı-Palast",
            "Galataturm","Süleymaniye-Moschee","Beyoğlu","Kalkan","Fethiye","Antalya",
        ],
        europe: [
            "London","Paris","Griechenland","Berlin","Rom","Barcelona","Amsterdam",
            "Wien","Prag","Budapest","Stockholm","Genf","Kopenhagen","Brüssel",
            "Zürich","Dublin","Oslo","Helsinki","Lissabon","Madrid","Athen",
            "Moskau","Sankt Petersburg","Krakau","Dubrovnik","Edinburgh","Venedig",
        ],
        naughty: [
          "Fake Taxi","Bordell","Schlafzimmer","Badewanne","Badezimmer","Balkon","Modestrand",
          "Erotikshop","Rotlichtviertel","Escort","FKK-Strand","Stripclub",
          "Orgie","Erwachsenenstudio","PornHub",
        ],
      },
    };

    // Constants
    const MIN_PLAYERS = 3;
    const MAX_PLAYERS = 15;
    const MIN_SPIES = 1;
    const MIN_DURATION_SECONDS = 60;
    const MAX_DURATION_SECONDS = 900; // 15 minutes
    const DURATION_STEP_SECONDS = 30;

    // State Variables
    let playerCount = 4;
    let spyCount = 1;
    let gameDurationSeconds = 300; // 5 minutes default
    let currentLocationsPool = [];
    let lastPlayersNames = [];
    let lastPlayerCount = 4;
    let lastSpyCount = 1;
    let lastGameDurationSeconds = 300;
    let gameCardsData = [];
    let currentPlayerIndex = 0;
    let scores = {}; // Object to store scores: { "PlayerName": score }

    // DOM Elements
    const playerCountDisplay = document.getElementById('player-count-display');
    const spyCountDisplay = document.getElementById('spy-count-display');
    const durationDisplay = document.getElementById('duration-display');
    const recommendedSpyCount = document.getElementById('recommended-spy-count');
    const recommendedDurationDisplay = document.getElementById('recommended-duration-count');
    const nameInputsContainer = document.getElementById('name-inputs-container');
    const startButton = document.getElementById('start-button');
    const titleInfoSection = document.getElementById('title-info-section');
    const gameParametersSection = document.getElementById('game-parameters-section');
    const gameInterfaceSection = document.getElementById('game-interface-section');
    const countdownElement = document.getElementById('countdown');
    const commenceCountdownButton = document.getElementById('commence-countdown-button');
    const cardsContainer = document.getElementById('cards-container');
    const restartButton = document.getElementById('restart-button');
    const resetButton = document.getElementById('reset-button');
    const showSpiesButton = document.getElementById('show-spies-button');
    const customPlacesContainer = document.getElementById('custom-places-container');
    const removePlayedToggle = document.getElementById('remove-played-toggle');
    const noPlacesMessage = document.getElementById('no-places-message');
    const languageSelect = document.getElementById('language-select');
    const revealTitle = document.getElementById('reveal-title'); // New element
    const scoreboardContainer = document.getElementById('scoreboard-container'); // New element
    const winnerSelectionContainer = document.getElementById('winner-selection-container'); // New element

    // Localization Data
    const i18n = {
        tr: {
            title: 'Casus Kim?',
            description: 'Oyunda herkese rastgele atanan iki rol vardır: Köylüler ve casuslar. <br>Köylülere bir yer ismi verilir. Casuslar ise bu yer ismini bilmezler. Casuslar, köylülerin söylediklerini dinleyerek bu yer ismini doğru tahmin etmeye çalışırlar. Köylüler ise süre dolmadan casusların kim olduğunu bulmaya çalışırlar.',
            settingsTitle: 'Oyun Ayarları',
            playerCountLabel: 'Oyuncu Sayısı',
            spyCountLabel: 'Casus Sayısı',
            durationLabel: 'Süre',
            categoryTitle: 'Mekan Kategorileri',
            categoryInfo: 'İstediğiniz tüm kategorileri seçebilirsiniz.',
            startButton: 'OYNA!',
            commenceButton: 'BAŞLA!',
            showSpiesButton: 'Casusları Göster',
            restartButton: 'Tekrar Oyna',
            resetButton: 'Ayarlar',
            playerNamePlaceholder: 'Oyuncu {n}',
            alerts: {
                noCategory: 'Lütfen en az bir kategori seçin!',
                namesCountMismatch: 'İsim sayısı oyuncu sayısı ile uyuşmuyor!',
                spiesTooMany: 'Casus sayısı oyuncu sayısına eşit veya fazla olamaz!',
                tooManySpies: 'Maksimum casus sayısı aşıldı!',
                playFirst: 'Önce bir oyun oynamalısınız!',
                cardsNotCreated: 'Kartlar oluşturulamadı!'
            },
            categories: {
                dailyLife: 'Günlük Hayat',
                sciFi: 'Bilim Kurgu',
                middleAges: 'Orta Çağ',
                turkey: 'Türkiye',
                europe: 'Avrupa',
                saintJoseph: 'SJ',
                naughty: '+18',
                custom: 'Özel'
            },
            switchText: 'Tekrar oynarken aynı mekan gelmesin',
            noPlacesMessage: 'Havuz boşaldı; yeni bir tur başlatmak için kategori seçimlerini veya ayarları değiştirin.',
            roles: { spy: 'Casus sensin', civilian: 'Köylüsün' },
            languageLabel: 'Dil',
            banner: '🎉 casus.dens.dev artık casuskim.net!',
            revealTitle: 'Bakalım kimsin...',
            civiliansWin: 'Köylüler Kazandı',
            spiesWin: 'Casuslar Kazandı',
            scoreboardTitle: 'Skor Tablosu',
            footerCredits: 'Alexandr Ushan\'ın Spyfall oyunu üzerine kurulmuştur.'
        },
        en: {
            title: 'Who is the Spy?',
            description: 'There are two roles randomly assigned to everyone in the game: Civilians and Spies. <br>Civilians are given a place name. Spies do not know this place name. Spies try to guess this place name correctly by listening to what the civilians say. Civilians try to find out who the spies are before the time runs out.',
            settingsTitle: 'Game Settings',
            playerCountLabel: 'Player Count',
            spyCountLabel: 'Spy Count',
            durationLabel: 'Duration',
            categoryTitle: 'Location Categories',
            categoryInfo: 'You can select all the categories you want.',
            startButton: 'PLAY!',
            commenceButton: 'START!',
            showSpiesButton: 'Show Spies',
            restartButton: 'Play Again',
            resetButton: 'Settings',
            playerNamePlaceholder: 'Player {n}',
            alerts: {
                noCategory: 'Please select at least one category!',
                namesCountMismatch: 'Name count does not match player count!',
                spiesTooMany: 'Spy count cannot be equal to or greater than player count!',
                tooManySpies: 'Maximum spy count exceeded!',
                playFirst: 'You must play a game first!',
                cardsNotCreated: 'Cards could not be created!'
            },
            categories: {
                dailyLife: 'Daily Life',
                sciFi: 'Sci-Fi',
                middleAges: 'Middle Ages',
                turkey: 'Turkey',
                europe: 'Europe',
                saintJoseph: 'SJ',
                naughty: '+18',
                custom: 'Custom'
            },
            switchText: 'Don\'t replay the same location',
            noPlacesMessage: 'Pool is empty; change category selections or settings to start a new round.',
            roles: { spy: 'You are the Spy', civilian: 'You are a Civilian' },
            languageLabel: 'Language',
            banner: '🎉 casus.dens.dev is now casuskim.net!',
            revealTitle: "Let's see who you are...",
            civiliansWin: 'Civilians Won',
            spiesWin: 'Spies Won',
            scoreboardTitle: 'Scoreboard',
            footerCredits: 'Based on the game Spyfall by Alexandr Ushan.'
        },
        fr: {
            title: 'Qui est l\'Espion ?',
            description: 'Il y a deux rôles attribués au hasard à tout le monde dans le jeu : Civils et Espions. <br>Les civils reçoivent un nom de lieu. Les espions ne connaissent pas ce nom de lieu. Les espions essaient de deviner correctement ce nom de lieu en écoutant ce que disent les civils. Les civils essaient de découvrir qui sont les espions avant la fin du temps imparti.',
            settingsTitle: 'Paramètres du Jeu',
            playerCountLabel: 'Nombre de Joueurs',
            spyCountLabel: 'Nombre d\'Espions',
            durationLabel: 'Durée',
            categoryTitle: 'Catégories de Lieux',
            categoryInfo: 'Vous pouvez sélectionner toutes les catégories que vous souhaitez.',
            startButton: 'JOUER !',
            commenceButton: 'COMMENCER !',
            showSpiesButton: 'Montrer les Espions',
            restartButton: 'Rejouer',
            resetButton: 'Paramètres',
            playerNamePlaceholder: 'Joueur {n}',
            alerts: {
                noCategory: 'Veuillez sélectionner au moins une catégorie !',
                namesCountMismatch: 'Le nombre de noms ne correspond pas au nombre de joueurs !',
                spiesTooMany: 'Le nombre d\'espions ne peut pas être égal ou supérieur au nombre de joueurs !',
                tooManySpies: 'Nombre maximum d\'espions dépassé !',
                playFirst: 'Vous devez d\'abord jouer une partie !',
                cardsNotCreated: 'Les cartes n\'ont pas pu être créées !'
            },
            categories: {
                dailyLife: 'Vie Quotidienne',
                sciFi: 'Science-Fiction',
                middleAges: 'Moyen Âge',
                turkey: 'Turquie',
                europe: 'Europe',
                saintJoseph: 'SJ',
                naughty: '+18',
                custom: 'Personnalisé'
            },
            switchText: 'Ne pas rejouer le même lieu',
            noPlacesMessage: 'Le pool est vide ; changez les sélections de catégories ou les paramètres pour commencer une nouvelle manche.',
            roles: { spy: 'Tu es l\'Espion', civilian: 'Tu es un Civil' },
            languageLabel: 'Langue',
            banner: '🎉 casus.dens.dev est maintenant casuskim.net !',
            revealTitle: 'Voyons qui tu es...',
            civiliansWin: 'Les Civils ont Gagné',
            spiesWin: 'Les Espions ont Gagné',
            scoreboardTitle: 'Tableau des Scores',
            footerCredits: 'Basé sur le jeu Spyfall d\'Alexandr Ushan.'
        },
        it: {
            title: 'Chi è la Spia?',
            description: 'Ci sono due ruoli assegnati casualmente a tutti nel gioco: Civili e Spie. <br>Ai civili viene dato un nome di luogo. Le spie non conoscono questo nome di luogo. Le spie cercano di indovinare correttamente questo nome di luogo ascoltando ciò che dicono i civili. I civili cercano di scoprire chi sono le spie prima che scada il tempo.',
            settingsTitle: 'Impostazioni di Gioco',
            playerCountLabel: 'Numero di Giocatori',
            spyCountLabel: 'Numero di Spie',
            durationLabel: 'Durata',
            categoryTitle: 'Categorie di Luoghi',
            categoryInfo: 'Puoi selezionare tutte le categorie che desideri.',
            startButton: 'GIOCA!',
            commenceButton: 'INIZIA!',
            showSpiesButton: 'Mostra Spie',
            restartButton: 'Gioca Ancora',
            resetButton: 'Impostazioni',
            playerNamePlaceholder: 'Giocatore {n}',
            alerts: {
                noCategory: 'Seleziona almeno una categoria!',
                namesCountMismatch: 'Il numero di nomi non corrisponde al numero di giocatori!',
                spiesTooMany: 'Il numero di spie non può essere uguale o superiore al numero di giocatori!',
                tooManySpies: 'Numero massimo di spie superato!',
                playFirst: 'Devi prima giocare una partita!',
                cardsNotCreated: 'Impossibile creare le carte!'
            },
            categories: {
                dailyLife: 'Vita Quotidiana',
                sciFi: 'Fantascienza',
                middleAges: 'Medioevo',
                turkey: 'Turchia',
                europe: 'Europa',
                saintJoseph: 'SJ',
                naughty: '+18',
                custom: 'Personalizzato'
            },
            switchText: 'Non ripetere lo stesso luogo',
            noPlacesMessage: 'Il pool è vuoto; cambia le selezioni delle categorie o le impostazioni per iniziare un nuovo round.',
            roles: { spy: 'Sei la Spia', civilian: 'Sei un Civile' },
            languageLabel: 'Lingua',
            banner: '🎉 casus.dens.dev è ora casuskim.net!',
            revealTitle: 'Vediamo chi sei...',
            civiliansWin: 'I Civili hanno Vinto',
            spiesWin: 'Le Spie hanno Vinto',
            scoreboardTitle: 'Tabellone Punti',
            footerCredits: 'Basato sul gioco Spyfall di Alexandr Ushan.'
        },
        de: {
            title: 'Wer ist der Spion?',
            description: 'Es gibt zwei Rollen, die jedem im Spiel zufällig zugewiesen werden: Zivilisten und Spione. <br>Zivilisten erhalten einen Ortsnamen. Spione kennen diesen Ortsnamen nicht. Spione versuchen, diesen Ortsnamen richtig zu erraten, indem sie zuhören, was die Zivilisten sagen. Zivilisten versuchen herauszufinden, wer die Spione sind, bevor die Zeit abläuft.',
            settingsTitle: 'Spieleinstellungen',
            playerCountLabel: 'Spieleranzahl',
            spyCountLabel: 'Spionanzahl',
            durationLabel: 'Dauer',
            categoryTitle: 'Ortkategorien',
            categoryInfo: 'Sie können alle gewünschten Kategorien auswählen.',
            startButton: 'SPIELEN!',
            commenceButton: 'STARTEN!',
            showSpiesButton: 'Spione Anzeigen',
            restartButton: 'Nochmal Spielen',
            resetButton: 'Einstellungen',
            playerNamePlaceholder: 'Spieler {n}',
            alerts: {
                noCategory: 'Bitte wählen Sie mindestens eine Kategorie aus!',
                namesCountMismatch: 'Die Anzahl der Namen stimmt nicht mit der Spieleranzahl überein!',
                spiesTooMany: 'Die Anzahl der Spione darf nicht gleich oder größer als die Spieleranzahl sein!',
                tooManySpies: 'Maximale Spionanzahl überschritten!',
                playFirst: 'Sie müssen zuerst ein Spiel spielen!',
                cardsNotCreated: 'Karten konnten nicht erstellt werden!'
            },
            categories: {
                dailyLife: 'Alltag',
                sciFi: 'Sci-Fi',
                middleAges: 'Mittelalter',
                turkey: 'Türkei',
                europe: 'Europa',
                saintJoseph: 'SJ',
                naughty: '+18',
                custom: 'Benutzerdefiniert'
            },
            switchText: 'Gleichen Ort nicht erneut spielen',
            noPlacesMessage: 'Der Pool ist leer; ändern Sie die Kategorieauswahl oder die Einstellungen, um eine neue Runde zu beginnen.',
            roles: { spy: 'Du bist der Spion', civilian: 'Du bist ein Zivilist' },
            languageLabel: 'Sprache',
            banner: '🎉 casus.dens.dev ist jetzt casuskim.net!',
            revealTitle: 'Mal sehen, wer du bist...',
            civiliansWin: 'Zivilisten haben Gewonnen',
            spiesWin: 'Spione haben Gewonnen',
            scoreboardTitle: 'Punktetabelle',
            footerCredits: 'Basiert auf dem Spiel Spyfall von Alexandr Ushan.'
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

    function updateSpyCountDisplay() {
        spyCountDisplay.textContent = spyCount;
    }

    function updateDurationDisplay() {
        durationDisplay.textContent = secondsToMMSS(gameDurationSeconds);
    }

    function updateRecommendedSpyCount() {
        const recommended = Math.max(1, Math.floor(playerCount / 4));
        recommendedSpyCount.textContent = `Önerilen: ${recommended}`;
    }

    function calculateRecommendedDuration() {
        // Base time: 3 minutes for 3 players
        // Add 30 seconds for each additional player
        let duration = 180 + (playerCount - 3) * 30;
        return Math.min(Math.max(duration, MIN_DURATION_SECONDS), MAX_DURATION_SECONDS);
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

        // Reveal Title
        const revealTitleEl = document.getElementById('reveal-title');
        if (revealTitleEl) revealTitleEl.textContent = t('revealTitle');

        // Winner Buttons
        const civWinBtn = document.getElementById('civilians-win-btn');
        const spyWinBtn = document.getElementById('spies-win-btn');
        if (civWinBtn) civWinBtn.textContent = t('civiliansWin');
        if (spyWinBtn) spyWinBtn.textContent = t('spiesWin');

        // Scoreboard Title
        const scoreboardTitleEl = document.querySelector('#scoreboard-container h4');
        if (scoreboardTitleEl) scoreboardTitleEl.textContent = t('scoreboardTitle');

        // Language label and banner
        const langLabelEl = document.getElementById('language-label');
        if (langLabelEl) langLabelEl.textContent = '🌍 ' + t('languageLabel');
        const bannerEl = document.getElementById('top-banner');
        if (bannerEl) {
            const txt = t('banner');
            bannerEl.textContent = txt || '';
            bannerEl.style.display = txt ? 'block' : 'none';
        }

        // Footer credits
        const footerCreditsEl = document.getElementById('footer-credits');
        if (footerCreditsEl) {
            footerCreditsEl.textContent = t('footerCredits');
        }
    }

    // Custom Inputs Logic
    function createCustomInput() {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = '...';
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
                showSpiesButton.classList.add('fade-in');
                showSpiesButton.disabled = false;
                
                // Ensure other buttons are hidden
                winnerSelectionContainer.classList.add('hidden');
                restartButton.classList.add('hidden');
                resetButton.classList.add('hidden');
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

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function generateGameData(numPlayers, numSpies, names) {
        const playerIndices = Array.from({ length: numPlayers }, (_, i) => i);
        shuffleArray(playerIndices);
        const spyIndices = playerIndices.slice(0, numSpies);

        const randomLocation = getRandomLocation();
        if (randomLocation === "UNKNOWN LOCATION (No categories selected)") {
            return null;
        }

        window.lastAssignedLocation = randomLocation;
        
        const data = [];
        for (let i = 0; i < numPlayers; i++) {
            const isSpy = spyIndices.includes(i);
            data.push({
                name: names[i],
                isSpy: isSpy,
                location: randomLocation
            });
        }
        return data;
    }

    function showNextCard() {
        cardsContainer.innerHTML = "";

        if (currentPlayerIndex >= gameCardsData.length) {
            // All players have seen their cards
            revealTitle.classList.add('hidden');
            commenceCountdownButton.classList.remove('hidden');
            commenceCountdownButton.classList.add('fade-in'); // Add fade-in animation
            commenceCountdownButton.disabled = false;
            return;
        }

        const playerData = gameCardsData[currentPlayerIndex];
        
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("slide-in"); // Add animation class
        card.id = `card-${currentPlayerIndex}`;

        // Remove slide-in class after animation to allow transform transition (flip) to work
        card.addEventListener('animationend', () => {
            card.classList.remove('slide-in');
        }, { once: true });

        // Front
        const front = document.createElement("div");
        front.classList.add("front");
        const frontPlayerInfo = document.createElement('div');
        frontPlayerInfo.classList.add('card-player-info');
        frontPlayerInfo.innerHTML = `<span class="user-icon">👤</span><span class="player-name-front">${playerData.name}</span>`;
        front.appendChild(frontPlayerInfo);
        
        card.appendChild(front);

        // Back
        const back = document.createElement("div");
        back.classList.add("back");
        
        const backPlayerInfo = document.createElement('div');
        backPlayerInfo.classList.add('card-player-info');
        backPlayerInfo.innerHTML = `<span class="user-icon">👤</span><span class="player-name-back">${playerData.name}</span>`;
        back.appendChild(backPlayerInfo);

        const roleLabelDiv = document.createElement('div');
        roleLabelDiv.classList.add('card-role-label');
        if (playerData.isSpy) {
            roleLabelDiv.innerHTML = `<span class="spy-text">${t('roles.spy')}</span>`;
        } else {
            roleLabelDiv.textContent = t('roles.civilian');
        }
        back.appendChild(roleLabelDiv);

        if (!playerData.isSpy) {
            const locationNameDiv = document.createElement('div');
            locationNameDiv.classList.add('card-location-name');
            locationNameDiv.textContent = playerData.location;
            back.appendChild(locationNameDiv);
        }

        card.appendChild(back);
        
        card.addEventListener("click", cardClickHandler);
        cardsContainer.appendChild(card);
    }

    function cardClickHandler(event) {
        const card = event.currentTarget;
        
        // If card is already flipped (showing back), this click dismisses it
        if (card.classList.contains("flipped")) {
            // Dismiss card logic
            card.classList.remove("slide-in");
            card.classList.add("slide-out");
            
            setTimeout(() => {
                currentPlayerIndex++;
                showNextCard();
            }, 300);
            return;
        }

        // Otherwise flip to show content
        card.classList.add("flipped");
    }

    function startActualCountdown() {
        // Show countdown display
        countdownElement.classList.remove('hidden');
        countdownElement.classList.add('fade-in');
        startCountdown(gameDurationSeconds);
        commenceCountdownButton.classList.add('hidden');
        
        // Hide "Ayarları değiştir" button when game starts
        // resetButton.classList.add('hidden');
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
            inputs.forEach(inp => {
                const val = inp.value.trim();
                if (val) currentLocationsPool.push(val);
            });
        }
    }

    // Category Toggle Logic handled by label and change listener


    // Also listen for direct checkbox changes (just in case)
    document.querySelectorAll('.category-toggle').forEach(toggle => {
        toggle.addEventListener('change', function() {
            const box = this.closest('.category-box');
            if (this.checked) {
                box.classList.add('selected');
            } else {
                box.classList.remove('selected');
            }
             if (this.value === 'custom') {
                if (this.checked) {
                    customPlacesContainer.classList.remove('hidden');
                    ensureCustomInputsInitialized();
                } else {
                    customPlacesContainer.classList.add('hidden');
                }
            }
        });
    });

    // Initialize category visual state based on default checked attributes
    document.querySelectorAll('.category-toggle').forEach(toggle => {
        if (toggle.checked) {
            const box = toggle.closest('.category-box');
            if (box) box.classList.add('selected');
        }
    });

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
                // Use "Player n" as default value, not placeholder text
                return t('playerNamePlaceholder', { n: index + 1 });
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

        resetCountdownDisplay(); 
        countdownElement.classList.add('hidden'); // Hide timer initially
        
        // Hide "BAŞLA!" button initially
        commenceCountdownButton.classList.add('hidden');
        
        // Hide "Casusları Göster" button and "Tekrar Oyna" until needed
        showSpiesButton.classList.add('hidden');
        showSpiesButton.disabled = true;
        restartButton.classList.add('hidden');
        winnerSelectionContainer.classList.add('hidden');
        
        // Show "Ayarları değiştir" initially (before game starts)
        resetButton.classList.remove('hidden');
        resetButton.classList.add('fade-in');

        // Show Reveal Title
        revealTitle.classList.remove('hidden');
        revealTitle.classList.add('fade-in');

        // Generate Data
        gameCardsData = generateGameData(currentNumPlayers, currentNumSpies, names);
        if (!gameCardsData) {
            // Error handling if no location
            gameInterfaceSection.classList.add('hidden');
            titleInfoSection.classList.remove('hidden');
            gameParametersSection.classList.remove('hidden');
            return;
        }

        // Start Sequence
        currentPlayerIndex = 0;
        showNextCard();
        updateScoreboard();
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
        winnerSelectionContainer.classList.add('hidden');
        
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
        countdownElement.classList.add('hidden');
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
            if (restartButton) {
                restartButton.disabled = true;
                restartButton.classList.add('hidden'); // Hide the button completely
            }
            return;
        }

        // Hide "BAŞLA!" button
        commenceCountdownButton.classList.add('hidden');

        // Hide "Casusları Göster" button, it should only appear when timer ends
        showSpiesButton.classList.add('hidden');
        showSpiesButton.disabled = true;
        winnerSelectionContainer.classList.add('hidden');

        // Show Reveal Title
        revealTitle.classList.remove('hidden');
        revealTitle.classList.add('fade-in');

        // Generate Data
        gameCardsData = generateGameData(lastPlayerCount, lastSpyCount, lastPlayersNames);
        if (!gameCardsData) {
            resetGame();
            return;
        }

        // Start Sequence
        currentPlayerIndex = 0;
        showNextCard();

        // Ensure "Tekrar Oyna" button remains hidden until game starts
        restartButton.classList.add('hidden');

        // Hide top banner while in-game
        const bannerElRestart = document.getElementById('top-banner');
        if (bannerElRestart) bannerElRestart.style.display = 'none';
    }

    // Scoreboard Logic
    function updateScoreboard() {
        scoreboardContainer.innerHTML = `<h4>${t('scoreboardTitle')}</h4>`;
        const table = document.createElement('table');
        table.classList.add('scoreboard-table');
        
        // Sort scores descending
        const sortedPlayers = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
        
        // If no scores yet, show all current players with 0
        if (sortedPlayers.length === 0 && lastPlayersNames.length > 0) {
             lastPlayersNames.forEach(name => {
                 if (scores[name] === undefined) scores[name] = 0;
             });
        }

        // Re-sort after potential init
        const finalSorted = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);

        finalSorted.forEach(player => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${player}</td><td>${scores[player]}</td>`;
            table.appendChild(row);
        });
        scoreboardContainer.appendChild(table);
    }

    function handleWin(winnerType) {
        // winnerType: 'civilians' or 'spies'
        gameCardsData.forEach(player => {
            if (winnerType === 'civilians' && !player.isSpy) {
                scores[player.name] = (scores[player.name] || 0) + 1;
            } else if (winnerType === 'spies' && player.isSpy) {
                scores[player.name] = (scores[player.name] || 0) + 1;
            }
        });
        updateScoreboard();
        winnerSelectionContainer.classList.add('hidden');

        // Show restart and reset buttons
        restartButton.classList.remove('hidden');
        restartButton.classList.add('fade-in');
        resetButton.classList.remove('hidden');
        resetButton.classList.add('fade-in');
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
        cardsContainer.innerHTML = ''; // Clear any existing cards

        // Create a wrapper for reveal cards to ensure they stack or align properly
        const revealWrapper = document.createElement('div');
        revealWrapper.style.display = 'flex';
        revealWrapper.style.flexDirection = 'column';
        revealWrapper.style.alignItems = 'center';
        revealWrapper.style.gap = '10px';
        revealWrapper.style.width = '100%';

        // 1. Location Card
        const locationCard = document.createElement('div');
        locationCard.classList.add('reveal-card');
        locationCard.innerHTML = `
            <h3>Mekan</h3>
            <div class="content">${window.lastAssignedLocation}</div>
        `;
        revealWrapper.appendChild(locationCard);

        // 2. Spies Card
        const spies = gameCardsData.filter(p => p.isSpy).map(p => p.name);
        const spiesCard = document.createElement('div');
        spiesCard.classList.add('reveal-card');
        
        let spiesHtml = '<div class="spy-list">';
        spies.forEach(spyName => {
            spiesHtml += `<div class="spy-name">🕵️ ${spyName}</div>`;
        });
        spiesHtml += '</div>';

        spiesCard.innerHTML = `
            <h3>Casuslar</h3>
            ${spiesHtml}
        `;
        revealWrapper.appendChild(spiesCard);
        
        cardsContainer.appendChild(revealWrapper);

        showSpiesButton.classList.add('hidden'); // Hide the button after use
        showSpiesButton.disabled = true;

        // Show winner selection buttons
        winnerSelectionContainer.classList.remove('hidden');
        winnerSelectionContainer.classList.add('fade-in');
    });

    // Winner Selection Listeners
    document.getElementById('civilians-win-btn').addEventListener('click', () => handleWin('civilians'));
    document.getElementById('spies-win-btn').addEventListener('click', () => handleWin('spies'));

});
