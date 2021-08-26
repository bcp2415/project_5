// Declare variables
const cardWrapper = document.querySelector("#cardWrapper");
const scoreWrapper = document.querySelector("#scoreWrapper");
let score = 0;

// Initialize game:  distribute cards randomly, display on screen, set function to run on clicking any card
function init() {
  // Assign an animal to each card
  assignCards();
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

init();
