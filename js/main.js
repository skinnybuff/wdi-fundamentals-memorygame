
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
var scoreDisplay = document.querySelector('#score-display');
var scoreValue =0;

var matchDisplay = document.querySelector('#match-display');

var cardElement;

var resetBtn = document.querySelector('button');
resetBtn.addEventListener('click', restBoard);

var checkForMatch = function(){
    
    if(cardsInPlay.length <2){
        // do nothing
    }else if(cardsInPlay.length = 2 && cardsInPlay[0] === cardsInPlay[1]){
        matchDisplay.innerHTML = "You found a match!"; 
        scoreValue++;
        scoreDisplay.textContent = scoreValue;
        // cardElement.removeEventListener('click', flipCard);
    }else{
        matchDisplay.innerHTML = "Sorry try again!";
        // cardElement.removeEventListener('click', flipCard);   
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
        
        cardElement = document.createElement('img');
        cardElement.setAttribute('src', "img/back.png");
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    }
}

function restBoard(){
    var reset = document.querySelectorAll('img');


    matchDisplay.innerHTML="";

    for(var i=0; i < reset.length; i++){
        reset[i].remove();
    }

    createBoard();
}


createBoard();