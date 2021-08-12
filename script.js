// Declare variables
var cardWrapper = document.querySelector("#cardWrapper");
var scoreWrapper = document.querySelector("#scoreWrapper");
var score = 0;
var cards = [];

// Initialize game:  distribute cards randomly, display on screen, set function to run on clicking any card
function init() {
    // Assign an animal to each of the 6 cards
    // Choose animal for first card to be added:
    var randomNum = Math.floor(Math.random() * 3);
    console.log(randomNum);

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