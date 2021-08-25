// Declare variables
const cardWrapper = document.querySelector("#cardWrapper");
const scoreWrapper = document.querySelector("#scoreWrapper");
let score = 0;
let cards = [];
let turnedUp = false;
let matched = [];

// Initialize game:  distribute cards randomly, display on screen, set function to run on clicking any card
function init() {
  console.log(turnedUp);
  // Assign an animal to each card
  assignCards();
  // Show backs of cards on screen
  displayCards();
  // Create an eventListener on each card
  let n = 0;
  while (n < 6) {
    createOnClick(n);
    n++;
  }
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
    if (turnedUp == true) {
      // check for match

      // iterate through all 6 cards
      let nn = 0;
      while (nn < 6) {
        // test whether each card is the one already turned up
        let testCard = document.querySelector(`#card${nn}`).src;
        if (!testCard.endsWith("card_back.jpg")) {
          console.log(`Card ${nn + 1} is turned up.`);
          // add the turned-up cards to match[]
          matched.push(`${cards[nn]}`);
          console.log(matched);
        }
        nn++;
      }
      // test whether the 2 cards in matched[] are the same or different
      // if no match
      if (matched[0] !== matched[1]) {
        // wait 2 seconds
        // turn all cards face down
        setTimeout(function () {
          let n = 0;
          while (n < 6) {
            document.querySelector(`#card${n}`).src = "images/card_back.jpg";
            n++;
          }
        }, 2000);
        // set turnedUp back to false
        matched = [];
        turnedUp = false;
      } else if (matched[0] == matched[1]) {
        console.log("The cards match!");
        // if match, leave both cards up, increment score
      }
    } else {
      // what to do if turnedUp == false
      turnedUp = true;
    }

    // If faceUp() returns true, show both cards face up for 2 seconds, then turn both back to face down
    //turnDown();

    // If no other card is already face up (i.e. faceUp() returns FALSE), leave this card face up
    // no code needed?  Just exit this function and go back to control...?
  });
}

init();
