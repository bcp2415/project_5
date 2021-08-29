// Declare variables
const cardWrapper = document.querySelector("#cardWrapper");
const scoreWrapper = document.querySelector("#scoreWrapper");
let elephants = 2;
let tigers = 2;
let penguins = 2;

cards = [];

let Card = class {
  constructor(animal, number) {
    this.animal = animal;
    this.number = number;
    this.image = "card_back.jpg";
    this.turnedUp = false;
  }
};

function init() {
  // generate cards, store each as an object in the cards array
  genCards();
  console.log(cards);
  // display all 6 cards face down
  showFaceDown();

  // add eventListener to each card
  clickCard();
}

function genCards() {
  let counter = 0;
  while (counter < 6) {
    let animal = animalPicker();
    let card = new Card(animal, counter + 1);
    cards.push(card);
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

function showFaceDown() {
  let counter = 0;
  while (counter < 6) {
    // show all 6 cards face down
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `<img src="images/card_back.jpg" class=cardImage id=card-${counter + 1}>`
    );
    counter++;
  }
}

function clickCard() {
  // add event listener to each card
  let counter = 0;
  while (counter < 6) {
    const cardPointer = document.querySelector(`#card-${counter + 1}`);
    cardPointer.addEventListener("click", function () {
      // display animal image
      changeImage();
      // update turnedUp property on card to "true"
      updateCardProperty();
    });
    counter++;
  }
}

init();
