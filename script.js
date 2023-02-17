// déclaration des variables
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
const diceNumber = Math.floor(Math.random() * 6) + 1;
let currentPlayer = 1;

let gameStart = true;

// fonction changement de joueur
function switchPlayer() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  playOn1.style.display = currentPlayer === 1 ? "inline" : "none";
  playOn2.style.display = currentPlayer === 2 ? "inline" : "none";
};


// fonction remise du score current à 0
function resetCurrentScore() {
  current1.innerText = "0";
  current2.innerText = "0";
};

// fonction de mise à jour du score total des joueurs
function updateTotalScore() {
  const currentScore = currentPlayer === 1 ? current1 : current2;
  const totalScore = currentPlayer === 1 ? ScoreTotal1 : ScoreTotal2;
  const score = parseInt(currentScore.innerText);
  totalScore.innerText = parseInt(totalScore.innerText) + score;
};


// fonction pour en cas de victoire d'un des joueurs
function checkWin() {
  const totalScore = currentPlayer === 1 ? ScoreTotal1 : ScoreTotal2;
  if (parseInt(totalScore.innerText) >= 100) {
    alert("Player " + currentPlayer + " wins!");
    gameStart = false;
  }
};

// action sur bouton newgame
buttonStart.addEventListener('click', function(){
    ScoreTotal1.innerText = 0;
    current1.innerText = 0;
    ScoreTotal2.innerText = 0;
    current2.innerText = 0;
    currentPlayer = 1;
    dice.src = "./images/emptyDice.png";
    gameStart = true;
    playOn1.style.display = "inline";
    playOn2.style.display = "none";
  });


// action sur bouton roll dice  
roll.addEventListener('click', function() {
  if (gameStart) {
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    dice.src = './images/dice' + diceNumber + '.png';
    if (diceNumber !== 1) {
      const currentScore = currentPlayer === 1 ? current1 : current2;
      currentScore.innerText = parseInt(currentScore.innerText) + diceNumber;
    } else {
      switchPlayer();
      resetCurrentScore();
    }
  }
});


// action sur bouton hold
hold.addEventListener('click', function() {
  if (gameStart) {
    updateTotalScore();
    checkWin();
    if (gameStart) {
      switchPlayer();
      resetCurrentScore();
    }
  }
});
