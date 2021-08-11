// Declare variables
var cardWrapper = document.querySelector("#cardWrapper");
var scoreWrapper = document.querySelector("#scoreWrapper");
var score = 0;

// Create 6 cards
let card1 = { position: 1, animal: "elephant" };
let card2 = { position: 2, animal: "elephant" };
let card3 = { position: 3, animal: "tiger" };
let card4 = { position: 4, animal: "tiger" };
let card5 = { position: 5, animal: "penguin" };
let card6 = { position: 6, animal: "penguin" };

// Initialize game:  distribute cards randomly, display on screen, set function to run on clicking any card
function init() {
    // Assign an animal to each of the 6 cards
    // Display the 6 cards in 2 columns of 3 each
    var cardCount = 1;
    while (cardCount <= 6) {
        cardWrapper.insertAdjacentHTML(
            "afterbegin",
            '<img class="cardImage" src="images/card_back.jpg" alt="Back of playing card">'
        );
        cardCount++;
    }

    // Set an eventListener on each card
}

//
init();