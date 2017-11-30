
var gameBoard = document.querySelector('#game-board');

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
    
    if(cardsInPlay.length <2){
        console.log(cardsInPlay);        
    }else if(cardsInPlay.length = 2 && cardsInPlay[0] === cardsInPlay[1]){
        alert("You found a match!");      
    }else{
        alert("Sorry try again");   
    }
}

var flipCard= function(){

    cardId = this.getAttribute('data-id');
    faceImg = cards[cardId].cardImage;
    this.setAttribute('src', faceImg);

    cardsInPlay.push(cards[cardId].rank);

    checkForMatch();
}

var createBoard = function(){
    for(var i =0; i <cards.length; i++){
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "img/back.png");
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    }
}


createBoard();