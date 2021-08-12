// Declare variables
var cardWrapper = document.querySelector("#cardWrapper");
var scoreWrapper = document.querySelector("#scoreWrapper");
var score = 0;
var cards = [];

// Initialize game:  distribute cards randomly, display on screen, set function to run on clicking any card
function init() {
    // Assign an animal to each of the 6 cards

    // Set total number of each animal for final set:
    var elephants = 2;
    var tigers = 2;
    var penguins = 2;

    // Choose animal for first card to be added:
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
        console.log(cards[0]);
        console.log(elephants, tigers, penguins);
        console.log(cards.length);
        console.log(cards);
    }

    // Display the 6 cards in 2 columns of 3 each
    var cardCount = 1;
    while (cardCount <= 6) {
        cardWrapper.insertAdjacentHTML(
            "afterbegin",
            '<img class="cardImage" src="images/card_back.jpg" alt="Back of playing card">'
        );
        cardCount++;
    }

    // Set an eventListener on each card; randomly assign the 6 card objects to the 6 cards displayed
}

//
init();