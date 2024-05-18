document.addEventListener("DOMContentLoaded", function() {
    const locations = [
        "Londra",
        "Paris",
        "New York",
        "Süpermarket",
        "Park",
        "Sinema",
        "Okul",
        "Hastane",
        "Restoran",
        "Otel",
        "Havalimanı",
        "Banka",
        "Sahil",
        "Kahveci",
        "Camii",
        "Sirk",
        "Mahkeme",
        "Fabrika",
        "Paralel Evren",
        "Türkiye",
        "İstanbul",
        "Orman",
        "Göl",
        "Deniz",
        "Köy",
        "Oto Sanayi",
        "Kütüphane",
        "Müze",
        "Dershane",
        "Paris",
        "Charbel'in evi",
        "Kadıköy sahili",
        "Dingonun ahırı",
        "Mesude'nin gıdısı",
        "Ender'in odası",
        "Paul Georges'un evi",
        "Maral'ın göbeği",
        "Atlantis",
        "Hogwarts",
        "Başakşehir",
        "Cruise gemisi",
        "Titanic",
        "Karakol",
        "İstanbul Büyükşehir Belediyesi",
        "Sevişme merdiveni",
        "Yüksek Hızlı Tren",
        "Konya",
        "Genelev",
        "BKM Mutfak",
        "Suriye",
        "Zafer Partisi HQ",
        "HÜDAPAR İl Başkanlığı",
        "Heybeliada",
        "MFINUE Soirée",
        "Kâbe",
        "Anıtkabir",
        "Kuş yuvası",
        "Araba fabrikası",
        "Yatak",
        "Kökle'nin beyaz donu",
        "Tuvalet",
        "Uludağ",
        "Tutam Tutam Matematik Festivali",
        "Sport en Fete",
        "Migros",
        "Çöl",
        "Kuzey Kutbu",
        "Kuzey Kore",
        "Vergi Dairesi",
        "Erdoğan'ın Lap'i",
        "Enes'in Keşfeti",
        "Volkan'ın Arabası",
        "Yunanistan",
        "Kürdistan",
        "Dünya'nın Çekirdeği",
        "Olimpiyatlar",
        "Beyzat'ın Litterbox'u",
        "Utku Aytaç'ın Odası",

      ];

      let countdownTimer; // Variable to hold the countdown timer
      const countdownMinutes = 6; // Set the countdown duration in minutes
    
      function startCountdown() {
        const countdownElement = document.getElementById("countdown");
        const endTime = new Date().getTime() + countdownMinutes * 60 * 1000; // Calculate the end time
    
        function updateCountdown() {
          const now = new Date().getTime();
          const timeRemaining = endTime - now;
    
          const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
          countdownElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;
    
          if (timeRemaining > 0) {
            requestAnimationFrame(updateCountdown);
          } else {
            countdownElement.textContent = "00:00";
          }
        }
    
        updateCountdown();
      }
    
      function resetCountdown() {
        clearInterval(countdownTimer);
        const countdownElement = document.getElementById("countdown");
        countdownElement.textContent = "05:00"; // Set the initial countdown time
      }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function getRandomLocation() {
    const index = getRandomInt(0, locations.length - 1);
    return locations[index];
  }

  function cardClickHandler(event) {
    const card = event.currentTarget;
    card.classList.add("flipped");

    setTimeout(() => {
      const isSpy = card.dataset.spy === "true";

      if (isSpy) {
        card.querySelector(".back").textContent = "Casus sensin.";
        card.querySelector(".back").style = "color: red;"
      } else {
        const location = card.dataset.location;
        card.querySelector(".back").innerHTML = location + "<br>(Köylüsün)";
      }

      setTimeout(() => {
        card.classList.remove("flipped");
        card.querySelector(".back").textContent = "";
      }, 2000);
    });
  }

  function createCards(numCards, names) {
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = "";

    for (let i = 1; i <= numCards; i++) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.id = "card" + i;

      const front = document.createElement("div");
      front.classList.add("front");
      front.textContent = names[i - 1]; // Assign the name to the front face
      card.appendChild(front);

      const back = document.createElement("div");
      back.classList.add("back");
      card.appendChild(back);

      cardsContainer.appendChild(card);
    }
  }

  function assignSpyCard() {
    const cards = document.querySelectorAll(".card");
    const randomIndex = getRandomInt(0, cards.length - 1);
    const randomLocation = getRandomLocation();

    cards.forEach((card, index) => {
      if (index === randomIndex) {
        card.dataset.spy = "true";
      } else {
        card.dataset.spy = "false";
        card.dataset.location = randomLocation;
      }
    });
  }

  function initializeGame() {
    
    resetCountdown();
    startCountdown();
    const numCardsInput = document.getElementById("num-cards");
    const numCards = parseInt(numCardsInput.value, 10);

    const namesInput = document.getElementById("names-input");
    const names = namesInput.value.split(",").map(name => name.trim()); // Split the names and remove leading/trailing whitespace

    if (names.length !== numCards) {
      alert("Oyuncu sayısı isim sayısına eşit olmalıdır.");
      return;
    }

    createCards(numCards, names);
    assignSpyCard(numCards);

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("click", cardClickHandler);
    });
  }

  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", initializeGame);
});
