// Global Variables
var game = new Game({name: 'Human', token: './assets/human-token.png'}, {name: 'Computer', token: './assets/computer-token.png'});

// DOM Variables
var subtitle = document.getElementById('subtitle');
var humanToken = document.getElementById('humanToken');
var humanScore = document.getElementById('humanScore');
var computerToken = document.getElementById('computerToken');
var computerScore = document.getElementById('computerScore');
var modeSelection = document.getElementById('modeSelection');
var gameBoard = document.getElementById('gameBoard');
var results = document.getElementById('results');
var easyModeButton = document.getElementById('easyModeButton');
var hardModeButton = document.getElementById('hardModeButton');
var changeGameButton = document.querySelector('button');

// Event Listeners
window.addEventListener('load', function() {
  showPlayerTokens();
  showScore();
});

modeSelection.addEventListener('click', function() {
  setupGameBoard(event);
});

gameBoard.addEventListener('click', function() {
  playGame(event);
});

changeGameButton.addEventListener('click', returnToModeSelection);

// Functions
function setupGameBoard(event) {
  var parentID = event.target.parentElement.id

  if (parentID === 'easyModeButton' || parentID === 'hardModeButton') {
    game.changeDifficulty(event);
    game.changeRules();
    showGameBoard();
    populateGameBoard();
  }
}

function showGameBoard() {
  subtitle.innerText = 'Choose your fighter!';
  show(gameBoard);
  show(changeGameButton);
  hide(modeSelection);
  hide(results);
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

  show(results);
  hide(gameBoard);
  hide(changeGameButton);
  if (game.winner === 'human') {
    subtitle.innerText = 'You win!';
  } else if (game.winner === 'computer') {
    subtitle.innerText = 'You lose!';
  } else if (game.winner === 'draw') {
    subtitle.innerText = 'It\'s a draw!';
  }

  results.innerHTML = `
    <img src="assets/${humanFighter}.png" alt="${humanFighter}" id="${humanFighter}" class="fighter">
    <img src="assets/${computerFighter}.png" alt="${computerFighter}" id="${computerFighter}" class="fighter">
  `;
}

function returnToModeSelection() {
  game.resetGame();
  clearGameBoard();
  subtitle.innerText = 'Choose your difficulty!';
  show(modeSelection);
  hide(gameBoard);
  hide(results);
  hide(changeGameButton);
}

function showScore() {
  humanScore.innerText = `Score: ${game.human.score}`;
  computerScore.innerText = `Score: ${game.computer.score}`;
}

function showPlayerTokens() {
  humanToken.src = game.human.token;
  computerToken.src = game.computer.token;
}

function clearGameBoard() {
  gameBoard.innerHTML = ''
}

function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden');
}