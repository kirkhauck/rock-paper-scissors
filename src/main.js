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
modeSelectionDisplay.addEventListener('click', function() {
  setupGameBoard(event);
});
// easyModeSelector.addEventListener('click', setupGameBoard);
// hardModeSelector.addEventListener('click', setupGameBoard);
// easyModeSelector.addEventListener('click', setupEasyGame);
// hardModeSelector.addEventListener('click', setupHardGame);
changeGameButton.addEventListener('click', returnToGameSelect);
gameBoard.addEventListener('click', function() {
  playGame(event);
});
// easyModeSection.addEventListener('click', function() {
//   playGame(event);
// });
// hardModeSection.addEventListener('click', function() {
//   playGame(event)
// });

// Functions

function setupGameBoard(event) {
  var parentID = event.target.parentElement.id
  if (parentID === 'easyModeSelector' || parentID === 'hardModeSelector') {
    game.changeDifficulty(event);
    game.changeRules();
    showGameBoard();
    populateGameBoard();
  }
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

function playGame(event) {
  if (event.target.classList.contains('fighter')) {
    game.checkWinner(event);
    showScore();
    showResults();
    setTimeout(showGameBoard, 3000);
  }
}

function showResults() {
  var humanFighter = game.human.fighter;
  var computerFighter = game.computer.fighter;
  gameBoard.classList.add('hidden');
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

function clearGameBoard() {
  gameBoard.innerHTML = ''
}

function returnToGameSelect() {
  game.resetGame();
  clearGameBoard();
  subtitle.innerText = 'Choose your difficulty!';
  modeSelectionDisplay.classList.remove('hidden');
  resultsSection.classList.add('hidden');
  changeGameButton.classList.add('hidden');
  gameBoard.classList.add('hidden');
}