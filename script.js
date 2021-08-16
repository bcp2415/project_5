// Declare variables
var cardWrapper = document.querySelector("#cardWrapper");
var scoreWrapper = document.querySelector("#scoreWrapper");
var score = 0;
var cards = [];
console.log(cards.length);

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
        console.log(cards.length);
        console.log(cards);
    }
    displayCards();
}

// Display the 6 cards in 2 columns of 3 each
function displayCards() {
    console.log("displayCards called.");
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
    console.log("createOnClick called.");

    var currentCard = document.querySelector(`#card${cardCount}`);
    currentCard.addEventListener("click", function() {
        console.log(`Card${cardCount} clicked.`);
        currentCard.src = `images/${cards[cardCount - 1]}.png`;
    });
}

//
init();