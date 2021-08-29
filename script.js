// Declare variables
const cardWrapper = document.querySelector("#cardWrapper");
const scoreWrapper = document.querySelector("#scoreWrapper");
let elephants = 2;
let tigers = 2;
let penguins = 2;

cards = [];

function init() {
  // generate cards, store each as an object in the cards array
  genCards();
}

function genCards() {
  let counter = 0;
  while (counter < 6) {
    let animal = animalPicker();
    console.log(
      `Now generating card ${counter + 1}...with an ${animal} on it.`
    );
    counter++;
  }
}

function animalPicker() {
  let choice = Math.floor(Math.random() * 3);

  if (choice === 0 && elephants > 0) {
    elephants--;
    return "elephant";
  } else if (choice === 1 && tigers > 0) {
    tigers--;
    return "tiger";
  } else if (choice === 2 && penguins > 0) {
    penguins--;
    return "penguin";
  } else if (tigers) {
    --tigers;
    return "tiger";
  } else if (penguins) {
    --penguins;
    return "penguin";
  } else if (elephants) {
    --elephants;
    return "elephant";
  }
}

init();
