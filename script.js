// Declare variables
const cardWrapper = document.querySelector("#cardWrapper");
const scoreWrapper = document.querySelector("#scoreWrapper");
cards = [];

function init() {
  console.log("init fcn called.");

  // generate cards, store each as an object in the cards array
  genCards();
}

function genCards() {
  let counter = 0;
  while (counter < 6) {
    const animal = animalPicker();
    console.log(
      `Now generating card ${counter + 1}...with an ${animal} on it.`
    );
    counter++;
  }
}

function animalPicker() {
  let elephants = 2;
  let tigers = 2;
  let penguins = 2;
  let choice = Math.floor(Math.random);
}

init();
