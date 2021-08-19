// Declare variables
const cardWrapper = document.querySelector("#cardWrapper");
const scoreWrapper = document.querySelector("#scoreWrapper");
let score = 0;
let cards = [];
let turnedUp = false;

// Initialize game:  distribute cards randomly, display on screen, set function to run on clicking any card
function init() {
  // Assign an animal to each card
  assignCards();
  // Show backs of cards on screen
  displayCards();
  // Create an eventListener on each card
  createOnClick(0);
  createOnClick(1);
  createOnClick(2);
  createOnClick(3);
  createOnClick(4);
  createOnClick(5);
}

function assignCards() {
  // Set total number of each animal for final set:
  const animalNumber = 2;
  let elephants = animalNumber;
  let tigers = animalNumber;
  let penguins = animalNumber;

  // Assign animals to cards randomly, ending up with 2 of each animal:
  while (cards.length < 6) {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum == 0) {
      if (elephants > 0) {
        cards.push("elephant");
        elephants = elephants - 1;
      }
    } else if (randomNum == 1) {
      if (tigers > 0) {
        cards.push("tiger");
        tigers = tigers - 1;
      }
    } else if (randomNum == 2) {
      if (penguins > 0) {
        cards.push("penguin");
        penguins = penguins - 1;
      }
    }
  }
}

// Display the 6 cards face down
function displayCards() {
  let cardCount = 0;
  while (cardCount < 6) {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `<img id="card${cardCount}" class="cardImage" src="images/card_back.jpg" alt="Back of playing card">`
    );

    cardCount++;
  }
}

// Set event listener on each card
function createOnClick(count) {
  let currentCard = document.querySelector(`#card${count}`);
  currentCard.addEventListener("click", function () {
    // Show assigned animal image if card is clicked
    currentCard.src = `images/${cards[count]}.png`;

    // When a card is clicked, check to see if any other card is already face up
    //faceUp();

    // If faceUp() returns true, show both cards face up for 2 seconds, then turn both back to face down
    //turnDown();

    // If no other card is already face up (i.e. faceUp() returns FALSE), leave this card face up
    // no code needed?  Just exit this function and go back to control...?
  });
}

function faceUp() {
  if (turnedUp) {
    // leave 2 cards face up for 3 seconds
    setTimeout(turnDown(), 3000);
  } else return;
}

function turnDown() {
  // turn all cards face down again
  let cardLocalCount = 0;
  let localCard = document.querySelector(`#card${cardLocalCount}`);
  while (cardLocalCount < 6) {
    localCard.src = "images/card_back.jpg";
  }
  cardLocalCount++;
}

//
init();
