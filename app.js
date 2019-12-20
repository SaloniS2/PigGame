/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var Scores,roundScore,activePlayer;

Scores=[0,0];//score of each player in array and not using 2 variables to keep the code clean
roundScore=0;//to keep the score of each round which would be one at a time for the whole game
activePlayer=0;//0 indicates 1st player is active and 1 indicated 2nd player is active


//at the start of the game dice img should not be visible
document.querySelector('.dice').style.display='none';

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';


//Whenever the button is rolled
document.querySelector('.btn-roll').addEventListener('click',function(){

        //1. generate random number each time the dice is rolled
         var dice=Math.floor(Math.random()*6)+1;

        //2.Display the result
        var diceDOM=document.querySelector('.dice');
        diceDOM.style.display='block';
        diceDOM.src='img/dice-'+dice+'.png';

        //3.Update the round score if the rolled number was not 1
        if(dice !== 1){
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else{
            //Next Player
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;
            
            document.getElementById('current-0').textContent='0';
            document.getElementById('current-1').textContent='0';

            //Add Toggle and Remove class using javaScript

            //Toggle adds the class if it is not there and removes if it's already there
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            // document.querySelector('.player-0-panel').classList.remove('active');
            // document.querySelector('.player-1-panel').classList.add('active');

            //so that no dice appears when player is switched
            // document.querySelector('.dice').style.display='none';
        }

       
});

 //DOM Manipulation
        
