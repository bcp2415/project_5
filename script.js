// Declare variables
const cardWrapper = document.querySelector("#cardWrapper");
const scoreWrapper = document.querySelector("#scoreWrapper");
let elephants = 2;
let tigers = 2;
let penguins = 2;
let score = 0;

let cards = [];

let Card = class {
  constructor(animal, number) {
    this.animal = animal;
    this.readyToCompare = false;
    this.matched = false;
  }
};

function init() {
  // generate cards, store each as an object in the cards array
  genCards();
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
      `<img src="images/card_back.jpg" class=cardImage id=card-${counter}>`
    );
    counter++;
  }
}

function clickCard() {
  // add event listener to each card
  let counter = 0;
  while (counter < 6) {
    const cardPointer = document.querySelector(`#card-${counter}`);
    let intCount = counter;
    cardPointer.addEventListener("click", function () {
      // display animal image
      changeImage(intCount);
      // update readyToCompare property on card to "true"
      updateCardProperty(intCount);

      // check whether any other card is already readyToCompare=true
      checkReadyToCompare(intCount);
    });
    counter++;
  }
}

function changeImage(counter) {
  const cardID = document.querySelector(`#card-${counter}`);
  cardID.src = `images/${cards[counter].animal}.png`;
}

function updateCardProperty(counter) {
  if (cards[counter].matched === false) {
    cards[counter].readyToCompare = true;
  }
}

function checkReadyToCompare(intCount) {
  // check whether any other card has readyToCompare = true
  let numberReady = 0;
  let comparands = [];
  let counter = 0;
  while (counter < 6) {
    if (cards[counter].readyToCompare === true) {
      comparands.push(counter);
      numberReady++;
    }
    counter++;
  }

  if (numberReady === 2) {
    console.log(
      `Calling checkMatch on comparands ${comparands[0]} and ${comparands[1]}`
    );
    checkMatch(comparands[0], comparands[1]);
  }
}

function checkMatch(first, second) {
  // check whether 2 turned up cards have same animal
  // check if the 2 members of compare[] have same .animal property or differ
  if (cards[first].animal === cards[second].animal) {
    // if animals match, set the property "matched" to true on both of them
    cards[first].matched = true;
    cards[second].matched = true;
    cards[first].readyToCompare = false;
    cards[second].readyToCompare = false;
    updateScore();
    displayScore();
  } else {
    // do something if animals don't match
    console.log("The animals don't match!");
    turnAllCardsFaceDown();
  }
}

function turnAllCardsFaceDown() {
  setTimeout(function () {
    // turn all cards that are face up, face down, except for those already matched
    let counter = 0;
    while (counter < 6) {
      let currentCard = document.querySelector(`#card-${counter}`);
      if (cards[counter].matched === false) {
        currentCard.src = "images/card_back.jpg";
        cards[counter].readyToCompare = false;
      }
      counter++;
    }
  }, 2000);
}

function updateScore() {
  // add 1 to score
  score++;
}

function displayScore() {
  // update display of score in DOM
  const scoreDOM = document.querySelector("#yourScore");
  scoreDOM.innerText = `Your score: ${String(score)}`;
}

init();
