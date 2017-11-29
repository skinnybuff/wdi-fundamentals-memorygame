
var cards = [
    {rank:"queen",
    suit:"hearts",
    cardImage: "img/queen-of-hearts.png"
    },
    {rank:"queen",
    suit:"diamonds",
    cardImage: "img/queen-of-diamonds.png"
    },
    {rank:"king",
    suit:"hearts",
    cardImage: "img/king-of-hearts.png"
    },
    {rank:"king",
    suit:"diamonds",
    cardImage: "img/king-of-diamonds.png"
    }
];
var cardsInPlay = [];

var checkForMatch = function(){
    if(cardsInPlay[0] === cardsInPlay[1]){
        alert("You found a match!");
    }else{
        alert("Sorry try again");
    }
}

var flipCard= function(cardId){
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].suit);
    console.log(cards[cardId].cardImage);

    cardsInPlay.push(cards[cardId].rank);

    checkForMatch();
}


flipCard(0);
flipCard(2);


