/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/




//CREATE VARIABLES FOR GAME

//array for the global scores of player 1 and 2
//roundscore, only have one at a time
//active player 0 for first player, 1 for second. reading the scores from array
//math.floor rounds decimal points to ints
//math.random generates random number between 0 and 1, so multiply by 6 and round will give random number between 0 and 5
// add +1 to get between 1 and 6
var scores, roundScore, activePlayer; 

scores = [0,0];
roundScore = 0;
activePlayer = 0;


//object that gives access to the DOM is the document object
//setting the dice variable = the players scores in the html
//current- + activePlayer(1 or 0)so current-0 or current-1

//SETTER TO SET A VALUE
//document.querySelector('#current-'+ activePlayer).textContent = dice;

// document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>';

//GETTER - TO GET A VALUE
// var x = document.querySelector('#score-0').textContent;
// console.log(x)


//using querySelector to changes the css,hiding the dice at the start
//style css method
//display property set to none
document.querySelector('.dice').style.display='none';

//set all the default values to 0 on load
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//adding the event listener to the button roll. addEventListener("whatevent", what action)


//ANONYMOUS FUNCTION - no name, cant be used again, created as part of the eventlistener agruments

//CALLBACK functions, created outside the eventlistener function and is called by the eventlistener functions. Name of function is passed into another function as an argument. 

// function btn()
// {
// }

//using an anonymous function
document.querySelector('.btn-roll').addEventListener('click', function(){

    //1. Random Number
    var dice = Math.floor(Math.random()* 6) + 1;

    //2. Display the result
    var diceDOM = document.querySelector('.dice')
    
    //make image visible again
    diceDOM.style.display='block';    

    //change the image to match the dice result
    // e.g. roll a one...src=dice-1
    diceDOM.src = 'dice-' + dice + '.png';

    //3. Update the round score but only if the rolled number was not 1
    if (dice !== 1){
        //add score

    } else{
        //next players turn
    }


});
























