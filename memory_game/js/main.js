//Test to seee if JS is working
console.log("Up and running!");

// types of cards
var cards = ["queen", "queen", "king", "king"];

// empty array that will have card values pushed in as used they become in play
var cardsInPlay = [];

// assining to first card value "queen"
var cardOne = cards[0];

// Pusing the value into cardsInPlay
cardsInPlay.push(cardOne);

// displaying which card is flipped to the console.
console.log("User flipped " + cardOne);

// assining to third card value "king"
var cardTwo = cards[2];

// Pusing the value into cardsInPlay
cardsInPlay.push(cardTwo);

// displaying which card is flipped to the console.
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!")
	} else {
		alert("Sorry, try again!")
	}
}