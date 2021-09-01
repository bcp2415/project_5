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
  cards[counter].readyToCompare = true;
}

function checkReadyToCompare(intCount) {
  // check whether any other card has readyToCompare = true
  let numberReady = 0;
  let counter = 0;
  while (counter < 6) {
    if (counter === intCount) {
    } else if (cards[counter].readyToCompare === true) {
      numberReady++;
    }
    counter++;
  }
  console.log(`This is the second card turned up:  ${isSecondCard}`);
  // if not (i.e. this is the only card readyToCompare), do nothing
  // if yes (i.e. this is the 2nd card readyToCompare at the same time), check if the 2 readyToCompare cards match...if not, turn back face down, if they match, do other stuff...
  if (numberReady === 2) {
    checkMatch();
  }
}

function checkMatch() {
  // check whether 2 turned up cards have same animal
  // find the 2 cards turned up, put both together in an array called compare[]
  let counter = 0;
  let compare = [];
  while (counter < 6) {
    if (cards[counter].readyToCompare === true) {
      compare.push(cards[counter]);
    }
    counter++;
  }
  // check if the 2 members of compare[] have same .animal property or differ
  if (compare[0].animal === compare[1].animal) {
    // do something if animals are same
    console.log(compare);
    console.log("The animals match!");
    // find the 2 matching cards, set the property "matched" to true on both of them
    let newCounter = 0;
    while (newCounter < 6) {
      if (cards[newCounter].readyToCompare === true) {
        cards[newCounter].matched = true;
      }
      newCounter++;
    }
  } else {
    // do something if animals don't match
    console.log("The animals don't match!");
    turnAllCardsFaceDown();
  }
}

function turnAllCardsFaceDown() {
  setTimeout(function () {
    // turn all cards that are face up, face down
    let counter = 0;
    while (counter < 6) {
      let currentCard = document.querySelector(`#card-${counter}`);
      if (cards[counter].matched === false) {
        currentCard.src = "images/card_back.jpg";
      }
      counter++;
    }
  }, 2000);
}

init();
