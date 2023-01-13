// Global Variables
var board = new Board;
var easyFighters = ['rock', 'paper', 'scissors'];
var hardFighters = ['cat', 'dog', 'mouse', 'monkey', 'elephant'];

// DOM Variables
var subtitle = document.getElementById('subtitle');
var humanToken = document.getElementById('humanToken');
var humanScoreDisplay = document.getElementById('humanScore');
var computerToken = document.getElementById('computerToken');
var computerScoreDisplay = document.getElementById('computerScore');
var modeSelectionDisplay = document.getElementById('modeSelectionSection');
var easyModeSection = document.getElementById('easyModeSection');
var hardModeSection = document.getElementById('hardModeSection');
var resultsSection = document.getElementById('resultsSection');
var easyModeSelector = document.getElementById('easyModeSelector');
var hardModeSelector = document.getElementById('hardModeSelector');
var changeGameButton = document.querySelector('button');

// Event Listeners
window.addEventListener('load', function() {
  showPlayerTokens();
  showScore();
});
easyModeSelector.addEventListener('click', setupEasyGame);
hardModeSelector.addEventListener('click', setupHardGame);
changeGameButton.addEventListener('click', returnToGameSelect);
easyModeSection.addEventListener('click', function() {
  board.playEasyGame(event);
  showScore();
  showResults();
  setTimeout(setupEasyGame, 3000);
});
hardModeSection.addEventListener('click', function() {
  board.playHardGame(event);
  showScore();
  showResults();
  setTimeout(setupHardGame, 3000);
});

// Functions

  // sandbox

  // var rock = {
  //   name: 'rock',
  //   winsAgainst: 'scissors',
  //   losesTo: 'paper'
  // }
  
  // var paper = {
  //   name: 'paper',
  //   winsAgainst: 'rock',
  //   losesTo: 'scissors'
  // }
  
  // var scissors = {
  //   name: 'scissors',
  //   winsAgainst: 'paper',
  //   losesTo: 'rock'
  // }
  
//humanChar rock --- computerChar scissors

  // function checkWinner(humanChar, computerChar) {
  //   checkIfDraw();
  //   if (humanChar.name === computerChar.winsAgainst) {
  //     // human wins
  //   } else {
  //     // computer wins
  //   }
  // }
  
    // sandbox

function setupEasyGame() {
  board.changeBoard('easy')
  subtitle.innerText = 'Choose your fighter!';
  modeSelectionDisplay.classList.add('hidden');
  resultsSection.classList.add('hidden');
  easyModeSection.classList.remove('hidden');
  changeGameButton.classList.remove('hidden');
}

function setupHardGame() {
  board.changeBoard('hard')
  subtitle.innerText = 'Choose your fighter!';
  modeSelectionDisplay.classList.add('hidden');
  resultsSection.classList.add('hidden');
  hardModeSection.classList.remove('hidden');
  changeGameButton.classList.remove('hidden');
}

function showResults() {
  var humanFighter = board.human.fighter;
  var computerFighter = board.computer.fighter;
  easyModeSection.classList.add('hidden');
  hardModeSection.classList.add('hidden');
  changeGameButton.classList.add('hidden');
  resultsSection.classList.remove('hidden');
  if (board.winner === 'human') {
    subtitle.innerText = 'You win!';
  } else if (board.winner === 'computer') {
    subtitle.innerText = 'You lose!';
  } else if (board.winner === 'draw') {
    subtitle.innerText = 'It\'s a draw!';
  }
  resultsSection.innerHTML = `
    <img src="assets/${humanFighter}.png" alt="${humanFighter}" id="${humanFighter}" class="fighter">
    <img src="assets/${computerFighter}.png" alt="${computerFighter}" id="${computerFighter}" class="fighter">
  `;
}

function showScore() {
  humanScoreDisplay.innerText = board.human.score;
  computerScoreDisplay.innerText = board.computer.score;
}

function showPlayerTokens() {
  humanToken.src = board.human.token;
  computerToken.src = board.computer.token;
}

function returnToGameSelect() {
  board.changeBoard(undefined);
  subtitle.innerText = 'Choose your difficulty!';
  modeSelectionDisplay.classList.remove('hidden');
  resultsSection.classList.add('hidden');
  easyModeSection.classList.add('hidden');
  hardModeSection.classList.add('hidden');
  changeGameButton.classList.add('hidden');
}