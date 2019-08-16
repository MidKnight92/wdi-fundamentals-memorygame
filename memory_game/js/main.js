//Test to seee if JS is working
console.log("Up and running!");

// types of cards
var cards = ["queen", "queen", "king", "king"];

// empty array that will have card values pushed in as used they become in play
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
		  console.log("You found a match!");
		} else {
		  console.log("Sorry, try again.");
		}
	} 
}

function flipCard(cardId) {
	cardsInPlay.push(cardId);
	console.log("User flipped " + cards[cardId]);
	checkForMatch();
	// if (cardsInPlay.length === 2) {
	// 	if (cardsInPlay[0] === cardsInPlay[1]) {
	// 		alert("You found a match!")
	// 	} else {
	// 		alert("Sorry, try again!")
	// 	}
	// } 
}

flipCard(0);
flipCard(2);