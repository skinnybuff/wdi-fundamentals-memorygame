
var cards = ["king", "king", "queen", "queen"];
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[1];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipper " + cardsInPlay[0]);

if(cardsInPlay.length === 2){
    if(cardsInPlay[0] === cardsInPlay[1]){
        alert("You found a match!");
    }else{
        alert("Sorry try again");
    }
}
