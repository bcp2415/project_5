// Declare variables
var cardWrapper = document.querySelector("#cardWrapper");
var scoreWrapper = document.querySelector("#scoreWrapper");
var score = 0;
var cards = [];
console.log(cards.length);
var turnedUp = false;

// Initialize game:  distribute cards randomly, display on screen, set function to run on clicking any card
function init() {
    // Set total number of each animal for final set:
    var elephants = 2;
    var tigers = 2;
    var penguins = 2;

    // Assign animals to cards randomly, ending up with 2 of each animal:
    while (cards.length < 6) {
        var randomNum = Math.floor(Math.random() * 3);
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
    displayCards();
}

// Display the 6 cards in 2 columns of 3 each
function displayCards() {
    var cardCount = 1;
    while (cardCount <= 6) {
        cardWrapper.insertAdjacentHTML(
            "beforeend",
            `<img id="card${cardCount}" class="cardImage" src="images/card_back.jpg" alt="Back of playing card">`
        );
        createOnClick(cardCount);
        cardCount++;
    }
}

function createOnClick(cardCount) {
    var currentCard = document.querySelector(`#card${cardCount}`);
    currentCard.addEventListener("click", function() {
        currentCard.src = `images/${cards[cardCount - 1]}.png`;

        // When a card is clicked, check to see if any other card is already face up
        faceUp();

        // If faceUp() returns true, show both cards face up for 2 seconds, then turn both back to face down
        turnDown();

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
    var cardLocalCount = 0;
    var localCard = document.querySelector(`#card${cardLocalCount}`);
    while (cardLocalCount < 6) {
        localCard.src = "images/card_back.jpg";
    }
    cardLocalCount++;
}

//
init();