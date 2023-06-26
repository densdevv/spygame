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
        "Müze"
      ];

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
