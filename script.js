
/*Déclaration des variables*/

const ScoreTotal1 = document.getElementById('score-total-1');
const current1 = document.getElementById('current-score-1');
const ScoreTotal2 = document.getElementById('score-total-2');
const current2 = document.getElementById('current-score-2');
const buttonStart = document.getElementById('newgame');
const roll = document.getElementById('roll-dice');
const hold = document.getElementById('hold');
const dice = document.getElementById('dice');
const playOn1 = document.getElementById('on-1');
const playOn2 = document.getElementById('on-2');
const gameStart = "true";




/*mis à 0 des compteurs avec le bouton newgame*/

buttonStart.addEventListener('click', function () {

    ScoreTotal1.innerText = 0;
    ScoreTotal2.innerText = 0;
    current1.innerText = 0;
    current2.innerText = 0;
    dice.src = "./images/emptyDice.png";
    gameStart = "true";
    playOn2.style.display = 'none';


});

/*affiche un nombre aléatoire avec le bouton roll dice*/

roll.addEventListener('click', function() {



        const diceNumber = Math.floor(Math.random() * 6) + 1;
        dice.src = './images/dice' + diceNumber + '.png';
        current1.innerText += diceNumber;

    
   

    

});





