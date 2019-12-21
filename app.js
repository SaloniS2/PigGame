    //variables defined in global scope
    var Scores,roundScore,activePlayer,gamePlaying;

    init()

    //Whenever the button is rolled
    document.querySelector('.btn-roll').addEventListener('click',function(){

        if(gamePlaying){
            
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
                        nextplayer();
                        } 
            }     
    });

    //Another event handler for hold button
    document.querySelector('.btn-hold').addEventListener('click',function(){
    
    if(gamePlaying){
       
        //Add current score to the global score
        Scores[activePlayer] += roundScore;

        //update the UI
        document.querySelector('#score-'+activePlayer).textContent=Scores[activePlayer];
 
        //check if player won the game
        if(Scores[activePlayer] >= 100){
            document.querySelector('#name-'+activePlayer).textContent='Winner!';
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying=false;
            }
        else{
            //Next Player
            nextplayer();
            }
        }
        
    });
    
    //Switching Players
    function nextplayer(){
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';

        //Add Toggle and Remove class using javaScript
        //Toggle adds the class if it is not there and removes if it's already there

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        //Hiding the dice when player is switched
        document.querySelector('.dice').style.display='none';
    }       

    //New Game EventListener
    document.querySelector('.btn-new').addEventListener('click',init);

    //Initializing the game
    function init(){

            Scores=[0,0];
            roundScore=0;
            activePlayer=0;
            gamePlaying=true;

        //at the start of the game dice img should not be visible
        document.querySelector('.dice').style.display='none';

        document.getElementById('score-0').textContent='0';
        document.getElementById('score-1').textContent='0';
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        document.getElementById('name-0').textContent='Player-1';
        document.getElementById('name-1').textContent='Player-2';
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
    }