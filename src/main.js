// Global Variables
var game = new Game({name: 'Human', token: './assets/human-token.png'}, {name: 'Computer', token: './assets/computer-token.png'});

// DOM Variables
var subtitle = document.getElementById('subtitle');
var humanToken = document.getElementById('humanToken');
var humanScoreDisplay = document.getElementById('humanScore');
var computerToken = document.getElementById('computerToken');
var computerScoreDisplay = document.getElementById('computerScore');
var modeSelectionDisplay = document.getElementById('modeSelectionSection');
var gameBoard = document.getElementById('gameBoard');
// var easyModeSection = document.getElementById('easyModeSection');
// var hardModeSection = document.getElementById('hardModeSection');
var resultsSection = document.getElementById('resultsSection');
var easyModeSelector = document.getElementById('easyModeSelector');
var hardModeSelector = document.getElementById('hardModeSelector');
var changeGameButton = document.querySelector('button');

// Event Listeners
window.addEventListener('load', function() {
  showPlayerTokens();
  showScore();
});
modeSelectionDisplay.addEventListener('click', setupGameBoard);
// easyModeSelector.addEventListener('click', setupGameBoard);
// hardModeSelector.addEventListener('click', setupGameBoard);
// easyModeSelector.addEventListener('click', setupEasyGame);
// hardModeSelector.addEventListener('click', setupHardGame);
changeGameButton.addEventListener('click', returnToGameSelect);
// easyModeSection.addEventListener('click', function() {
//   playGame(event);
// });
// hardModeSection.addEventListener('click', function() {
//   playGame(event)
// });

// Functions

function setupGameBoard() {
  game.changeDifficulty(event);
  game.changeRules();
  showGameBoard();
  populateGameBoard();
}

function showGameBoard() {
  subtitle.innerText = 'Choose your fighter!';
  modeSelectionDisplay.classList.add('hidden');
  resultsSection.classList.add('hidden');
  changeGameButton.classList.remove('hidden');
  gameBoard.classList.remove('hidden');
}

function populateGameBoard() {
  var fighters = Object.keys(game.rules);
  for (var i = 0; i < fighters.length; i++) {
    gameBoard.innerHTML += `
    <button class="fighter-button" type="button">
      <img src="./assets/${fighters[i]}.png" alt="${fighters[i]}" id="${fighters[i]}" class="fighter">
    </button>
    `
  }
}

// function setupEasyGame() {
//   game.changeBoard('easy')
//   subtitle.innerText = 'Choose your fighter!';
//   modeSelectionDisplay.classList.add('hidden');
//   resultsSection.classList.add('hidden');
//   // easyModeSection.classList.remove('hidden');
//   changeGameButton.classList.remove('hidden');
// }

// function setupHardGame() {
//   game.changeBoard('hard')
//   subtitle.innerText = 'Choose your fighter!';
//   modeSelectionDisplay.classList.add('hidden');
//   resultsSection.classList.add('hidden');
//   // hardModeSection.classList.remove('hidden');
//   changeGameButton.classList.remove('hidden');
// }

function playGame(event) {
  if (event.target.classList.contains('fighter')) {
    game.checkWinner(event);
    showScore();
    showResults();
    setTimeout(setupEasyGame, 3000);
  }
}

function showResults() {
  var humanFighter = game.human.fighter;
  var computerFighter = game.computer.fighter;
  // easyModeSection.classList.add('hidden');
  // hardModeSection.classList.add('hidden');
  changeGameButton.classList.add('hidden');
  resultsSection.classList.remove('hidden');
  if (game.winner === 'human') {
    subtitle.innerText = 'You win!';
  } else if (game.winner === 'computer') {
    subtitle.innerText = 'You lose!';
  } else if (game.winner === 'draw') {
    subtitle.innerText = 'It\'s a draw!';
  }
  resultsSection.innerHTML = `
    <img src="assets/${humanFighter}.png" alt="${humanFighter}" id="${humanFighter}" class="fighter">
    <img src="assets/${computerFighter}.png" alt="${computerFighter}" id="${computerFighter}" class="fighter">
  `;
}

function showScore() {
  humanScoreDisplay.innerText = game.human.score;
  computerScoreDisplay.innerText = game.computer.score;
}

function showPlayerTokens() {
  humanToken.src = game.human.token;
  computerToken.src = game.computer.token;
}

function returnToGameSelect() {
  game.resetGame();
  subtitle.innerText = 'Choose your difficulty!';
  modeSelectionDisplay.classList.remove('hidden');
  resultsSection.classList.add('hidden');
  // easyModeSection.classList.add('hidden');
  // hardModeSection.classList.add('hidden');
  changeGameButton.classList.add('hidden');
}