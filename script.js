document.addEventListener("DOMContentLoaded", function() {
    const locationCategories = {
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
        saintJoseph: [
            "Charbel'in evi", "Mesude'nin gıdısı", "Ender'in odası", "Paul Georges'un evi",
            "Maral'ın göbeği", "MFINUE Soirée", "Tutam Tutam Matematik Festivali", "Sport en Fête",
            "Utku Aytaç'ın Odası", "Maker Odası", 
        ],
        naughty: [
          "F4ke Taxi", "Genelev", "Yatak Odası", "Küvet", "Banyo", "Balkon", "Moda Sahili",
          "Er0tik Shop", "Amsterdam Redl1ght", "Esk0rt", "Çıplaklar Plajı", "Striptiz Kulübü",
          "0rgy Partisi", "Br4zzers Stüdyosu", "P0rnHub",
        ],
    };

    let currentLocationsPool = [];
    let countdownInterval;

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
    const countdownElement = document.getElementById("countdown");
    const cardsContainer = document.getElementById("cards-container");
    const startButton = document.getElementById("start-button");
    const resetButton = document.getElementById("reset-button");
    const restartButton = document.getElementById('restart-button');
    const commenceCountdownButton = document.getElementById('commence-countdown-button');
    const showSpiesButton = document.getElementById('show-spies-button');

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
            input.placeholder = `Oyuncu ${i + 1} Adı`;
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
                if (locationCategories[categoryKey]) {
                    currentLocationsPool.push(...locationCategories[categoryKey]);
                }
            }
        });
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
        });
    });

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
            alert("Oyun başlatılamadı: Mekan seçimi için en az bir kategori seçili olmalı!");
            return "UNKNOWN LOCATION (No categories selected)";
        }
        const index = getRandomInt(0, currentLocationsPool.length - 1);
        return currentLocationsPool[index];
    }

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
                roleLabelDiv.innerHTML = '<span class="spy-text">CASUS</span>';
            } else {
                roleLabelDiv.textContent = 'Köylüsün';
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
            alert("Kartlar oluşturulamadı, oyuncu sayısını kontrol edin.");
            return false;
        }

        const playerIndices = Array.from({ length: numPlayers }, (_, i) => i);
        shuffleArray(playerIndices);

        const spyIndices = playerIndices.slice(0, numSpies);

        const randomLocation = getRandomLocation();
        if (randomLocation === "UNKNOWN LOCATION (No categories selected)") {
            return false;
        }

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

    function startActualCountdown() {
        startCountdown(gameDurationSeconds);
        commenceCountdownButton.classList.add('hidden');
        commenceCountdownButton.disabled = true;
    }

    // Main Game Flow Functions
    function initializeGame() {
        updateLocationPool();

        if (currentLocationsPool.length === 0) {
            alert("Oyun başlatılamadı: Mekan seçimi için en az bir kategori seçili olmalı!");
            return;
        }

        const currentNumPlayers = parseInt(playerCountDisplay.textContent, 10);
        const currentNumSpies = parseInt(spyCountDisplay.textContent, 10);
        const currentDurationSeconds = gameDurationSeconds;

        const nameInputs = document.querySelectorAll('#name-inputs-container input[type="text"]');
        const names = Array.from(nameInputs).map((input, index) => {
            const trimmedName = input.value.trim();
            if (trimmedName === '') {
                input.value = `Oyuncu ${index + 1}`;
                return `Oyuncu ${index + 1}`;
            }
            return trimmedName;
        });

        if (names.length !== currentNumPlayers) {
            alert("Girdiğiniz isim sayısı oyuncu sayısına eşit olmalı.");
            return;
        }
        if (currentNumSpies >= currentNumPlayers) {
            alert("Casus sayısı oyuncu sayısından az olmalı!");
            return;
        }
        if (currentNumSpies > MAX_PLAYERS - 1) {
            alert("Çok fazla casus seçtiniz!");
            return;
        }

        // Store current settings for "Tekrar Oyna"
        lastPlayersNames = names;
        lastPlayerCount = currentNumPlayers;
        lastSpyCount = currentNumSpies;
        lastGameDurationSeconds = currentDurationSeconds;

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
    }

    function restartGameSameSettings() {
        if (lastPlayersNames.length === 0) {
            alert("Önce bir oyun başlatmalısınız!");
            resetGame(); // Go back to settings if no previous game state
            return;
        }

        resetCountdownDisplay();
        cardsContainer.innerHTML = "";

        // Ensure currentLocationsPool is updated based on saved category selections
        // (Category selections are not changed when restarting, so this is fine)
        updateLocationPool(); 
        if (currentLocationsPool.length === 0) {
            alert("Mekan seçimi için en az bir kategori seçili olmalı. Ayarları değiştirin.");
            resetGame(); 
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
    }

    // Event Listeners
    startButton.addEventListener("click", initializeGame);
    resetButton.addEventListener("click", resetGame);
    restartButton.addEventListener("click", restartGameSameSettings);
    commenceCountdownButton.addEventListener("click", startActualCountdown);

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
                roleLabelDiv.innerHTML = '<span class="spy-text">CASUS</span>';
            } else {
                roleLabelDiv.textContent = 'Köylüsün';
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