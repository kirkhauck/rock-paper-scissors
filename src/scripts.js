// Global Variables
var board = new Board;
var easyFighters = ['rock', 'paper', 'scissors'];
var hardFighters = ['cat', 'dog', 'mouse', 'monkey', 'elephant'];

// DOM Variables
var subtitle = document.querySelector('h2');
var modeSelectionDisplay = document.getElementById('modeSelectionSection');
var easyModeSection = document.getElementById('easyModeSection');
var hardModeSection = document.getElementById('hardModeSection');
var easyModeSelector = document.getElementById('easyModeSelector');
var hardModeSelector = document.getElementById('hardModeSelector');
var changeGameButton = document.querySelector('button');

// Event Listeners
easyModeSelector.addEventListener('click', setupEasyGame);
hardModeSelector.addEventListener('click', setupHardGame);
changeGameButton.addEventListener('click', returnToGameSelect);
easyModeSection.addEventListener('click', function() {
  board.human.takeTurn(event);
});
hardModeSection.addEventListener('click', function() {
  board.human.takeTurn(event);
});

// Functions
function setupEasyGame() {
  board.changeBoard('easy')
  subtitle.innerText = 'Choose your fighter!';
  modeSelectionDisplay.classList.add('hidden');
  easyModeSection.classList.remove('hidden');
  changeGameButton.classList.remove('hidden');
}

function setupHardGame() {
  board.changeBoard('hard')
  subtitle.innerText = 'Choose your fighter!';
  modeSelectionDisplay.classList.add('hidden');
  hardModeSection.classList.remove('hidden');
  changeGameButton.classList.remove('hidden');
}

function returnToGameSelect() {
  board.changeBoard(undefined);
  subtitle.innerText = 'Choose your difficulty!';
  modeSelectionDisplay.classList.remove('hidden');
  easyModeSection.classList.add('hidden');
  hardModeSection.classList.add('hidden');
  changeGameButton.classList.add('hidden');
}