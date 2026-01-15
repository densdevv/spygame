// This file contains large location arrays per language to keep them out of main script.js
// It assigns the data to `window.locationsByLangData` so `script.js` can load it dynamically.
window.locationsByLangData = {
    tr: {
        dailyLife: [
            "Bakkal", "Kasap", "Manav", "Kıraathane", "Halı Saha", "Camii", "Park", "Eczane", "Berber", "Terzi",
            "Muhtarlık", "Karakol", "Sağlık Ocağı", "Pastane", "Fırın", "Okul Bahçesi", "Çay Bahçesi", "Taksi Durağı",
            "Pazar Yeri", "Otobüs Durağı", "Çocuk Parkı", "Çöp Konteyneri", "Apartman Girişi", "Çatı Katı",
            "Bodrum Katı", "Garaj", "Oto Yıkama", "Kırtasiye", "Tekel Bayii", "Büfe", "İnternet Kafe", "Spor Salonu",
            "Veteriner", "Düğün Salonu", "Noter", "PTT", "Bankamatik", "Simitçi Arabası",
            "Bilardo Salonu", "Kuyumcu", "Çilingir", "Yufkacı"
        ],
        turkey: [
            "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin",
            "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa",
            "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan",
            "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta",
            "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir",
            "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla",
            "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop",
            "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat",
            "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın",
            "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
        ],
        europe: [
            "Paris", "Londra", "Roma", "Berlin", "Madrid", "Barselona", "Amsterdam", "Viyana", "Prag", "Budapeşte",
            "Atina", "Lizbon", "Brüksel", "Kopenhag", "Stockholm", "Oslo", "Helsinki", "Zürih", "Cenevre", "Lozan",
            "Venedik", "Floransa", "Milano", "Münih", "Frankfurt", "Varşova", "Dubrovnik", "Santorini",
            "Mikonos", "İbiza", "Nice", "Lyon", "Marsilya", "Edinburgh", "Dublin", "Lüksemburg", "Monako", "Vatikan",
            "Reykjavik", "Porto", "Sevilla", "Salzburg"
        ],
        billionaires: [
            "Elon Musk", "Jeff Bezos", "Bill Gates", "Mark Zuckerberg", "Warren Buffett", "Larry Page", "Michael Bloomberg", 
            "Jim Walton", "Michael Dell", "Jensen Huang"
        ],
        football: [
            "Pelé", "Diego Maradona", "Lionel Messi", "Cristiano Ronaldo", "Johan Cruyff", "Zinedine Zidane", "Ronaldinho",
            "Ronaldo Nazário", "Franz Beckenbauer", "Michel Platini", "Gerd Müller", "Eusebio", "George Best", "Roberto Baggio",
            "Marco van Basten", "Thierry Henry", "Lev Yashin", "Gianluigi Buffon", "Iker Casillas", "Paolo Maldini",
            "Roberto Carlos", "Cafu", "Xavi", "Andres Iniesta", "Luka Modric", "Zlatan Ibrahimovic", "Neymar", "Erling Haaland",
            "Kylian Mbappé", "Alex de Souza", "Gheorghe Hagi",  "Arda Güler", "Mauro Icardi", "Edin Dzeko"
        ],
        mythology: [
            "Zeus", "Hera", "Poseidon", "Hades", "Athena", "Apollo", "Artemis", "Ares", "Afrodit", "Hephaestus",
            "Hermes", "Hestia", "Dionysos", "Herkül", "Aşil", "Medusa", "Perseus", "Pandora", "Prometheus", 
            "Odin", "Thor", "Loki", "Freya", "Eros", "Cupid", "Pegasus"
        ],
        globalArtists: [
            "Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo", "Salvador Dalí", "Frida Kahlo",
            "Claude Monet", "Johannes Vermeer", "Rembrandt", "Andy Warhol", "Michael Jackson", "Freddie Mercury",
            "Elvis Presley", "Madonna", "Beyoncé", "Taylor Swift", "Lady Gaga", "Rihanna", "David Bowie", "Prince",
            "Elton John", "Paul McCartney", "John Lennon", "Bob Dylan", "Frank Sinatra", "Steven Spielberg", "Christopher Nolan",
            "Quentin Tarantino", "Martin Scorsese", "Meryl Streep", "Tom Hanks", "Robert De Niro", "Al Pacino",
            "Leonardo DiCaprio", "Brad Pitt", "Angelina Jolie", "Johnny Depp", "Morgan Freeman", "Denzel Washington", "Scarlett Johansson"
        ],
        professions: [
            "Doktor", "Mühendis", "Öğretmen", "Avukat", "Pilot", "Mimar", "Polis", "İtfaiyeci", "Hemşire", "Diş Hekimi",
            "Eczacı", "Psikolog", "Yazılımcı", "Veri Bilimci", "Grafik Tasarımcı", "Şef Aşçı", "Garson", "Kaptan",
            "Şoför", "Çiftçi", "Bahçıvan", "Marangoz", "Tesisatçı", "Elektrikçi", "Kaynakçı", "Terzi", "Berber", "Kuyumcu",
            "Emlakçı", "Gazeteci", "Fotoğrafçı", "Kütüphaneci", "Arkeolog", "Astronom", "Biyolog", "Kimyager", "Fizikçi",
            "Matematikçi", "Ekonomist", "Diplomat"
        ],
        yks: [
            "Mert Hoca", "Eyüp B", "Rehber Matematik", "Görkem Şahin", "Selin Hoca", "Dr. Biyoloji", "VIP Fizik",
            "Özcan Aykın", "Rüştü Hoca", "Kadir Gümüş", "Benim Hocam", "Gri Koç", "Hocalara Geldik", "ÖSYM Başkanı",
            "Mezuna Kalmak", "Limit-Türev-İntegral", "Paragraf Sorusu", "TYT", "AYT", "YDT"
        ],
        epfl: [
            "Rolex Learning Center", "SwissTech Convention Center", "Musée Bolo", "BC Binası", "EPFL Tabelası", "Food Trucks",
            "Alpine", "Arcadie", "Batochimie", "Double Deck", "Agora", "Atrium", "EPFL Metro", "EPFL Migros", "L'Esplanade",
            "Öğrenci İşleri", "La Diagonale", "Sat", "AGEPoly Boutique", "EPFL Innovation Park"
        ],
        saintJoseph: [
            "Meryem Ana Heykeli", "Saint-Joseph Heykeli", "Medyatek", "Türk Müdür Odası", "TDE Zümresi", "Öğretmenler Odası",
            "Fırın Binası", "FRC Atölyesi", "Halı Saha", "Petit Quartier", "Grand Quartier", "Kantin", "Tuvaletler", "Resim Atölyesi",
            "Müzik Atölyesi", "BAOBAB", "Frer Henri Salonu", "Tırmanma Duvarı", "Ön Bahçe", "Orman", "Revir", "Yemekhane"
        ],
        custom: []
    },
    en: {
        dailyLife: [
            "Grocer", "Butcher", "Greengrocer", "Teahouse", "Mini Pitch", "Mosque", "Park", "Pharmacy", "Barber", "Tailor",
            "Municipal Office", "Police Station", "Health Clinic", "Pastry Shop", "Bakery", "School Courtyard", "Tea Garden", "Taxi Stand",
            "Market", "Bus Stop", "Playground", "Trash Bin", "Apartment Entrance", "Rooftop",
            "Basement", "Garage", "Car Wash", "Stationery", "Alcohol Store", "Snack Bar", "Internet Cafe", "Gym",
            "Veterinary", "Wedding Hall", "Notary", "Post Office", "ATM", "Bagel Cart",
            "Billiard Hall", "Jeweler", "Locksmith", "Flatbread Seller"
        ],
        turkey: [
            "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin",
            "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa",
            "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan",
            "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta",
            "Mersin", "Istanbul", "Izmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir",
            "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla",
            "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop",
            "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat",
            "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın",
            "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
        ],
        europe: [
            "Paris", "London", "Rome", "Berlin", "Madrid", "Barcelona", "Amsterdam", "Vienna", "Prague", "Budapest",
            "Athens", "Lisbon", "Brussels", "Copenhagen", "Stockholm", "Oslo", "Helsinki", "Zurich", "Geneva", "Lausanne",
            "Venice", "Florence", "Milan", "Munich", "Frankfurt", "Warsaw", "Dubrovnik", "Santorini",
            "Mykonos", "Ibiza", "Nice", "Lyon", "Marseille", "Edinburgh", "Dublin", "Luxembourg", "Monaco", "Vatican",
            "Reykjavik", "Porto", "Seville", "Salzburg"
        ],
        billionaires: [
            "Elon Musk", "Jeff Bezos", "Bill Gates", "Mark Zuckerberg", "Warren Buffett", "Larry Page", "Michael Bloomberg", 
            "Jim Walton", "Michael Dell", "Jensen Huang"
        ],
        football: [
            "Pelé", "Diego Maradona", "Lionel Messi", "Cristiano Ronaldo", "Johan Cruyff", "Zinedine Zidane", "Ronaldinho",
            "Ronaldo Nazário", "Franz Beckenbauer", "Michel Platini", "Gerd Müller", "Eusebio", "George Best", "Roberto Baggio",
            "Marco van Basten", "Thierry Henry", "Lev Yashin", "Gianluigi Buffon", "Iker Casillas", "Paolo Maldini",
            "Roberto Carlos", "Cafu", "Xavi", "Andres Iniesta", "Luka Modric", "Zlatan Ibrahimovic", "Neymar", "Erling Haaland",
            "Kylian Mbappé", "Alex de Souza", "Gheorghe Hagi", "Arda Güler", "Mauro Icardi", "Edin Dzeko"
        ],
        mythology: [
            "Zeus", "Hera", "Poseidon", "Hades", "Athena", "Apollo", "Artemis", "Ares", "Aphrodite", "Hephaestus",
            "Hermes", "Hestia", "Dionysus", "Hercules", "Achilles", "Medusa", "Perseus", "Pandora", "Prometheus", 
            "Odin", "Thor", "Loki", "Freya", "Eros", "Cupid", "Pegasus"
        ],
        globalArtists: [
            "Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo", "Salvador Dalí", "Frida Kahlo",
            "Claude Monet", "Johannes Vermeer", "Rembrandt", "Andy Warhol", "Michael Jackson", "Freddie Mercury",
            "Elvis Presley", "Madonna", "Beyoncé", "Taylor Swift", "Lady Gaga", "Rihanna", "David Bowie", "Prince",
            "Elton John", "Paul McCartney", "John Lennon", "Bob Dylan", "Frank Sinatra", "Steven Spielberg", "Christopher Nolan",
            "Quentin Tarantino", "Martin Scorsese", "Meryl Streep", "Tom Hanks", "Robert De Niro", "Al Pacino",
            "Leonardo DiCaprio", "Brad Pitt", "Angelina Jolie", "Johnny Depp", "Morgan Freeman", "Denzel Washington", "Scarlett Johansson"
        ],
        professions: [
            "Doctor", "Engineer", "Teacher", "Lawyer", "Pilot", "Architect", "Police Officer", "Firefighter", "Nurse", "Dentist",
            "Pharmacist", "Psychologist", "Software Developer", "Data Scientist", "Graphic Designer", "Chef", "Waiter", "Captain",
            "Driver", "Farmer", "Gardener", "Carpenter", "Plumber", "Electrician", "Welder", "Tailor", "Barber", "Jeweler",
            "Real Estate Agent", "Journalist", "Photographer", "Librarian", "Archaeologist", "Astronomer", "Biologist", "Chemist", "Physicist",
            "Mathematician", "Economist", "Diplomat"
        ],
        yks: [
            "Mert Hoca", "Eyüp B", "Rehber Matematik", "Görkem Şahin", "Selin Hoca", "Dr. Biyoloji", "VIP Fizik",
            "Özcan Aykın", "Rüştü Hoca", "Kadir Gümüş", "Benim Hocam", "Gri Koç", "Hocalara Geldik", "ÖSYM President",
            "Retaking Year", "Limit-Derivative-Integral", "Paragraph Question", "TYT", "AYT", "YDT"
        ],
        epfl: [
            "Rolex Learning Center", "SwissTech Convention Center", "Musée Bolo", "BC Building", "EPFL Signboard", "Food Trucks",
            "Alpine", "Arcadie", "Batochimie", "Double Deck", "Agora", "Atrium", "EPFL Metro", "EPFL Migros", "L'Esplanade",
            "Student Affairs", "La Diagonale", "Sat", "AGEPoly Boutique", "EPFL Innovation Park"
        ],
        saintJoseph: [
            "Mary Statue", "Saint-Joseph Statue", "Mediatek", "Turkish Director's Office", "TDE Department", "Teachers' Room",
            "Bakery Building", "FRC Workshop", "Mini Pitch", "Petit Quartier", "Grand Quartier", "Canteen", "Restrooms", "Art Studio",
            "Music Studio", "BAOBAB", "Frère Henri Hall", "Climbing Wall", "Front Garden", "Forest", "Infirmary", "Dining Hall"
        ],
        custom: []
    },
    fr: {
        dailyLife: [
            "Épicier", "Boucher", "Marchand de légumes", "Salon de thé", "Terrain de mini-foot", "Mosquée", "Parc", "Pharmacie", "Barbier", "Tailleur",
            "Mairie", "Poste de police", "Clinique de santé", "Pâtisserie", "Boulangerie", "Cour d'école", "Jardin de thé", "Arrêt de taxi",
            "Marché", "Arrêt d'autobus", "Aire de jeux", "Poubelle", "Entrée d'immeuble", "Toit",
            "Sous-sol", "Garage", "Lavage de voitures", "Papeterie", "Débit de boissons alcoolisées", "Snack-bar", "Cybercafé", "Salle de sport",
            "Vétérinaire", "Salle des fêtes", "Notaire", "Bureau de poste", "Distributeur automatique", "Chariot à pain",
            "Salle de billard", "Bijouterie", "Serrurier", "Vendeur de pâtes levées"
        ],
        turkey: [
            "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin",
            "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa",
            "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan",
            "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta",
            "Mersin", "Istanbul", "Izmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir",
            "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla",
            "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop",
            "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat",
            "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın",
            "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
        ],
        europe: [
            "Paris", "Londres", "Rome", "Berlin", "Madrid", "Barcelone", "Amsterdam", "Vienne", "Prague", "Budapest",
            "Athènes", "Lisbona", "Bruxelles", "Copenhague", "Stockholm", "Oslo", "Helsinki", "Zurich", "Genève", "Lausanne",
            "Venise", "Florence", "Milan", "Monaco", "Francfort", "Varsovie", "Dubrovnik", "Santorin",
            "Mykonos", "Ibiza", "Nice", "Lyon", "Marseille", "Édimbourg", "Dublin", "Luxembourg", "Monaco", "Vatican",
            "Reykjavik", "Porto", "Séville", "Salzbourg"
        ],
        billionaires: [
            "Elon Musk", "Jeff Bezos", "Bill Gates", "Mark Zuckerberg", "Warren Buffett", "Larry Page", "Michael Bloomberg", 
            "Jim Walton", "Michael Dell", "Jensen Huang"
        ],
        football: [
            "Pelé", "Diego Maradona", "Lionel Messi", "Cristiano Ronaldo", "Johan Cruyff", "Zinedine Zidane", "Ronaldinho",
            "Ronaldo Nazário", "Franz Beckenbauer", "Michel Platini", "Gerd Müller", "Eusebio", "George Best", "Roberto Baggio",
            "Marco van Basten", "Thierry Henry", "Lev Yashin", "Gianluigi Buffon", "Iker Casillas", "Paolo Maldini",
            "Roberto Carlos", "Cafu", "Xavi", "Andres Iniesta", "Luka Modric", "Zlatan Ibrahimovic", "Neymar", "Erling Haaland",
            "Kylian Mbappé", "Alex de Souza", "Gheorghe Hagi", "Arda Güler", "Mauro Icardi", "Edin Dzeko"
        ],
        mythology: [
            "Zeus", "Héra", "Poséidon", "Hadès", "Athéna", "Apollon", "Artémis", "Arès", "Aphrodite", "Héphaïstos",
            "Hermès", "Hestia", "Dionysos", "Hercule", "Achille", "Méduse", "Persée", "Pandore", "Prométhée", 
            "Odin", "Thor", "Loki", "Freyja", "Éros", "Cupidon", "Pégase"
        ],
        globalArtists: [
            "Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelange", "Salvador Dalí", "Frida Kahlo",
            "Claude Monet", "Johannes Vermeer", "Rembrandt", "Andy Warhol", "Michael Jackson", "Freddie Mercury",
            "Elvis Presley", "Madonna", "Beyoncé", "Taylor Swift", "Lady Gaga", "Rihanna", "David Bowie", "Prince",
            "Elton John", "Paul McCartney", "John Lennon", "Bob Dylan", "Frank Sinatra", "Steven Spielberg", "Christopher Nolan",
            "Quentin Tarantino", "Martin Scorsese", "Meryl Streep", "Tom Hanks", "Robert De Niro", "Al Pacino",
            "Leonardo DiCaprio", "Brad Pitt", "Angelina Jolie", "Johnny Depp", "Morgan Freeman", "Denzel Washington", "Scarlett Johansson"
        ],
        professions: [
            "Médecin", "Ingénieur", "Professeur", "Avocat", "Pilote", "Architecte", "Agent de police", "Pompier", "Infirmière", "Dentiste",
            "Pharmacien", "Psychologue", "Développeur logiciel", "Data scientist", "Designer graphique", "Chef cuisinier", "Serveur", "Capitaine",
            "Chauffeur", "Agriculteur", "Jardinier", "Charpentier", "Plombier", "Électricien", "Soudeur", "Tailleur", "Barbier", "Bijoutier",
            "Agent immobilier", "Journaliste", "Photographe", "Bibliothécaire", "Archéologue", "Astronome", "Biologiste", "Chimiste", "Physicien",
            "Mathématicien", "Économiste", "Diplomate"
        ],
        yks: [
            "Mert Hoca", "Eyüp B", "Rehber Matematik", "Görkem Şahin", "Selin Hoca", "Dr. Biyoloji", "VIP Fizik",
            "Özcan Aykın", "Rüştü Hoca", "Kadir Gümüş", "Benim Hocam", "Gri Koç", "Hocalara Geldik", "Président ÖSYM",
            "Année de rattrapage", "Limite-Dérivée-Intégrale", "Question de paragraphe", "TYT", "AYT", "YDT"
        ],
        epfl: [
            "Rolex Learning Center", "SwissTech Convention Center", "Musée Bolo", "Bâtiment BC", "Pancarte EPFL", "Camions de nourriture",
            "Alpine", "Arcadie", "Batochimie", "Double Deck", "Agora", "Atrium", "EPFL Metro", "EPFL Migros", "L'Esplanade",
            "Affaires étudiantes", "La Diagonale", "Sat", "AGEPoly Boutique", "EPFL Innovation Park"
        ],
        saintJoseph: [
            "Statue de Marie", "Statue de Saint-Joseph", "Médiathèque", "Bureau du Directeur turc", "Département TDE", "Salle des professeurs",
            "Bâtiment de boulangerie", "Atelier FRC", "Terrain de mini-foot", "Petit Quartier", "Grand Quartier", "Cantine", "Toilettes", "Studio d'art",
            "Studio de musique", "BAOBAB", "Salle Frère Henri", "Mur d'escalade", "Jardin avant", "Forêt", "Infirmerie", "Salle à manger"
        ],
        custom: []
    },
    it: {
        dailyLife: [
            "Drogheria", "Macellaio", "Verduraio", "Sala da tè", "Campo di mini-calcio", "Moschea", "Parco", "Farmacia", "Barbiere", "Sarto",
            "Municipio", "Stazione di polizia", "Clinica sanitaria", "Pasticceria", "Panetteria", "Cortile della scuola", "Giardino del tè", "Fermata dei taxi",
            "Mercato", "Fermata dell'autobus", "Parco giochi", "Cestino dei rifiuti", "Ingresso del condominio", "Terrazza",
            "Seminterrato", "Garage", "Lavaggio auto", "Cartoleria", "Negozio di alcolici", "Tavola calda", "Cybercafé", "Palestra",
            "Veterinario", "Sala ricevimenti", "Notaio", "Ufficio postale", "Bancomat", "Carrello di pane",
            "Sala da biliardo", "Gioielleria", "Serraturista", "Venditore di focaccia"
        ],
        turkey: [
            "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin",
            "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa",
            "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan",
            "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta",
            "Mersin", "Istanbul", "Izmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir",
            "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla",
            "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop",
            "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat",
            "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın",
            "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
        ],
        europe: [
            "Parigi", "Londra", "Roma", "Berlino", "Madrid", "Barcellona", "Amsterdam", "Vienna", "Praga", "Budapest",
            "Atene", "Lisbona", "Bruxelles", "Copenaghen", "Stoccolma", "Oslo", "Helsinki", "Zurigo", "Ginevra", "Losanna",
            "Venezia", "Firenze", "Milano", "Monaco", "Francoforte", "Varsavia", "Dubrovnik", "Santorini",
            "Mykonos", "Ibiza", "Nizza", "Lione", "Marsiglia", "Edimburgo", "Dublino", "Lussemburgo", "Monaco", "Vaticano",
            "Reykjavik", "Porto", "Siviglia", "Salisburgo"
        ],
        billionaires: [
            "Elon Musk", "Jeff Bezos", "Bill Gates", "Mark Zuckerberg", "Warren Buffett", "Larry Page", "Michael Bloomberg", 
            "Jim Walton", "Michael Dell", "Jensen Huang"
        ],
        football: [
            "Pelé", "Diego Maradona", "Lionel Messi", "Cristiano Ronaldo", "Johan Cruyff", "Zinedine Zidane", "Ronaldinho",
            "Ronaldo Nazário", "Franz Beckenbauer", "Michel Platini", "Gerd Müller", "Eusebio", "George Best", "Roberto Baggio",
            "Marco van Basten", "Thierry Henry", "Lev Yashin", "Gianluigi Buffon", "Iker Casillas", "Paolo Maldini",
            "Roberto Carlos", "Cafu", "Xavi", "Andres Iniesta", "Luka Modric", "Zlatan Ibrahimovic", "Neymar", "Erling Haaland",
            "Kylian Mbappé", "Alex de Souza", "Gheorghe Hagi", "Arda Güler", "Mauro Icardi", "Edin Dzeko"
        ],
        mythology: [
            "Zeus", "Hera", "Poseidone", "Ade", "Atena", "Apollo", "Artemide", "Ares", "Afrodite", "Efesto",
            "Ermes", "Estia", "Dioniso", "Ercole", "Achille", "Medusa", "Perseo", "Pandora", "Prometeo", 
            "Odino", "Thor", "Loki", "Freyja", "Eros", "Cupido", "Pegaso"
        ],
        globalArtists: [
            "Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo", "Salvador Dalí", "Frida Kahlo",
            "Claude Monet", "Johannes Vermeer", "Rembrandt", "Andy Warhol", "Michael Jackson", "Freddie Mercury",
            "Elvis Presley", "Madonna", "Beyoncé", "Taylor Swift", "Lady Gaga", "Rihanna", "David Bowie", "Prince",
            "Elton John", "Paul McCartney", "John Lennon", "Bob Dylan", "Frank Sinatra", "Steven Spielberg", "Christopher Nolan",
            "Quentin Tarantino", "Martin Scorsese", "Meryl Streep", "Tom Hanks", "Robert De Niro", "Al Pacino",
            "Leonardo DiCaprio", "Brad Pitt", "Angelina Jolie", "Johnny Depp", "Morgan Freeman", "Denzel Washington", "Scarlett Johansson"
        ],
        professions: [
            "Medico", "Ingegnere", "Insegnante", "Avvocato", "Pilota", "Architetto", "Agente di polizia", "Pompiere", "Infermiera", "Dentista",
            "Farmacista", "Psicologo", "Sviluppatore software", "Data scientist", "Designer grafico", "Chef", "Cameriere", "Capitano",
            "Autista", "Agricoltore", "Giardiniere", "Falegname", "Idraulico", "Elettricista", "Saldatore", "Sarto", "Barbiere", "Gioielliere",
            "Agente immobiliare", "Giornalista", "Fotografo", "Bibliotecario", "Archeologo", "Astronomo", "Biologo", "Chimico", "Fisico",
            "Matematico", "Economista", "Diplomatico"
        ],
        yks: [
            "Mert Hoca", "Eyüp B", "Rehber Matematik", "Görkem Şahin", "Selin Hoca", "Dr. Biyoloji", "VIP Fizik",
            "Özcan Aykın", "Rüştü Hoca", "Kadir Gümüş", "Benim Hocam", "Gri Koç", "Hocalara Geldik", "Presidente ÖSYM",
            "Anno di ripetizione", "Limite-Derivata-Integrale", "Domanda di paragrafo", "TYT", "AYT", "YDT"
        ],
        epfl: [
            "Rolex Learning Center", "SwissTech Convention Center", "Musée Bolo", "Edificio BC", "Cartello EPFL", "Camion di cibo",
            "Alpine", "Arcadie", "Batochimie", "Double Deck", "Agora", "Atrium", "EPFL Metro", "EPFL Migros", "L'Esplanade",
            "Affari studenteschi", "La Diagonale", "Sat", "AGEPoly Boutique", "EPFL Innovation Park"
        ],
        saintJoseph: [
            "Statua della Madonna", "Statua di San Giuseppe", "Mediateca", "Ufficio Direttore Turco", "Dipartimento TDE", "Sala insegnanti",
            "Edificio panetteria", "Laboratorio FRC", "Campo di mini-calcio", "Petit Quartier", "Grand Quartier", "Mensa", "Bagni", "Studio d'arte",
            "Studio musicale", "BAOBAB", "Sala Frère Henri", "Muro d'arrampicata", "Giardino anteriore", "Bosco", "Infermeria", "Sala da pranzo"
        ],
        custom: []
    },
    de: {
        dailyLife: [
            "Lebensmittelhändler", "Fleischer", "Gemüsehändler", "Teestube", "Kleinfeld", "Moschee", "Park", "Apotheke", "Friseur", "Schneider",
            "Gemeindeamt", "Polizeiwache", "Gesundheitsklinik", "Konditorei", "Bäckerei", "Schulhof", "Teegarten", "Taxistand",
            "Markt", "Bushaltestelle", "Spielplatz", "Mülleimer", "Wohnungseingang", "Dachterrasse",
            "Kellergeschoß", "Garage", "Autowäsche", "Schreibwarenhandlung", "Alkoholladen", "Imbiss", "Internet-Café", "Fitnessstudio",
            "Tierarzt", "Hochzeitssaal", "Notar", "Postamt", "Geldautomat", "Brezel-Wagen",
            "Billardhalle", "Juwelier", "Schlüsseldienst", "Fladenbrotverkäufer"
        ],
        turkey: [
            "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin",
            "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa",
            "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan",
            "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta",
            "Mersin", "Istanbul", "Izmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir",
            "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla",
            "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop",
            "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat",
            "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın",
            "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
        ],
        europe: [
            "Paris", "London", "Rom", "Berlin", "Madrid", "Barcelona", "Amsterdam", "Wien", "Prag", "Budapest",
            "Athen", "Lissabon", "Brüssel", "Kopenhagen", "Stockholm", "Oslo", "Helsinki", "Zürich", "Genf", "Lausanne",
            "Venedig", "Florenz", "Mailand", "München", "Frankfurt", "Warschau", "Dubrovnik", "Santorin",
            "Mykonos", "Ibiza", "Nizza", "Lyon", "Marseille", "Edinburgh", "Dublin", "Luxemburg", "Monaco", "Vatikan",
            "Reykjavik", "Porto", "Sevilla", "Salzburg"
        ],
        billionaires: [
            "Elon Musk", "Jeff Bezos", "Bill Gates", "Mark Zuckerberg", "Warren Buffett", "Larry Page", "Michael Bloomberg", 
            "Jim Walton", "Michael Dell", "Jensen Huang"
        ],
        football: [
            "Pelé", "Diego Maradona", "Lionel Messi", "Cristiano Ronaldo", "Johan Cruyff", "Zinedine Zidane", "Ronaldinho",
            "Ronaldo Nazário", "Franz Beckenbauer", "Michel Platini", "Gerd Müller", "Eusebio", "George Best", "Roberto Baggio",
            "Marco van Basten", "Thierry Henry", "Lev Yashin", "Gianluigi Buffon", "Iker Casillas", "Paolo Maldini",
            "Roberto Carlos", "Cafu", "Xavi", "Andres Iniesta", "Luka Modric", "Zlatan Ibrahimovic", "Neymar", "Erling Haaland",
            "Kylian Mbappé", "Alex de Souza", "Gheorghe Hagi", "Arda Güler", "Mauro Icardi", "Edin Dzeko"
        ],
        mythology: [
            "Zeus", "Hera", "Poseidon", "Hades", "Athena", "Apollo", "Artemis", "Ares", "Aphrodite", "Hephaistos",
            "Hermes", "Hestia", "Dionysos", "Herkules", "Achilles", "Medusa", "Perseus", "Pandora", "Prometheus", 
            "Odin", "Thor", "Loki", "Freya", "Eros", "Cupido", "Pegasus"
        ],
        globalArtists: [
            "Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo", "Salvador Dalí", "Frida Kahlo",
            "Claude Monet", "Johannes Vermeer", "Rembrandt", "Andy Warhol", "Michael Jackson", "Freddie Mercury",
            "Elvis Presley", "Madonna", "Beyoncé", "Taylor Swift", "Lady Gaga", "Rihanna", "David Bowie", "Prince",
            "Elton John", "Paul McCartney", "John Lennon", "Bob Dylan", "Frank Sinatra", "Steven Spielberg", "Christopher Nolan",
            "Quentin Tarantino", "Martin Scorsese", "Meryl Streep", "Tom Hanks", "Robert De Niro", "Al Pacino",
            "Leonardo DiCaprio", "Brad Pitt", "Angelina Jolie", "Johnny Depp", "Morgan Freeman", "Denzel Washington", "Scarlett Johansson"
        ],
        professions: [
            "Arzt", "Ingenieur", "Lehrer", "Anwalt", "Pilot", "Architekt", "Polizist", "Feuerwehrmann", "Krankenschwester", "Zahnarzt",
            "Apotheker", "Psychologe", "Softwareentwickler", "Data Scientist", "Grafikdesigner", "Küchenchef", "Kellner", "Kapitän",
            "Fahrer", "Bauer", "Gärtner", "Zimmermann", "Klempner", "Elektriker", "Schweißer", "Schneider", "Friseur", "Juwelier",
            "Makler", "Journalist", "Fotograf", "Bibliothekar", "Archäologe", "Astronom", "Biologe", "Chemiker", "Physiker",
            "Mathematiker", "Ökonom", "Diplomat"
        ],
        yks: [
            "Mert Hoca", "Eyüp B", "Rehber Matematik", "Görkem Şahin", "Selin Hoca", "Dr. Biyoloji", "VIP Fizik",
            "Özcan Aykın", "Rüştü Hoca", "Kadir Gümüş", "Benim Hocam", "Gri Koç", "Hocalara Geldik", "ÖSYM-Präsident",
            "Wiederholungsjahr", "Grenzwert-Ableitung-Integral", "Absatzfrage", "TYT", "AYT", "YDT"
        ],
        epfl: [
            "Rolex Learning Center", "SwissTech Convention Center", "Musée Bolo", "BC-Gebäude", "EPFL-Schild", "Essensverkäufer",
            "Alpine", "Arcadie", "Batochimie", "Double Deck", "Agora", "Atrium", "EPFL Metro", "EPFL Migros", "L'Esplanade",
            "Studentenangelegenheiten", "La Diagonale", "Sat", "AGEPoly Boutique", "EPFL Innovation Park"
        ],
        saintJoseph: [
            "Marienskulptur", "Josef-Skulptur", "Mediathek", "Büro Türkischer Direktor", "TDE-Abteilung", "Lehrerzimmer",
            "Backstube", "FRC-Werkstatt", "Kleinfeld", "Petit Quartier", "Grand Quartier", "Kantine", "Toiletten", "Kunststudio",
            "Musikstudio", "BAOBAB", "Bruder-Heinrich-Saal", "Kletterwand", "Vorgarten", "Wald", "Krankenstation", "Speisesaal"
        ],
        custom: []
    }
};
