// Global Variables
var board = new Board;

// DOM Variables
var subtitle = document.querySelector('h2');
var modeSelectionDisplay = document.getElementById('modeSelectionSection');
var easyModeSection = document.getElementById('easyModeSection')
var hardModeSection = document.getElementById('hardModeSection')
var easyModeSelector = document.getElementById('easyModeSelector');
var hardModeSelector = document.getElementById('hardModeSelector');

// Event Listeners
easyModeSelector.addEventListener('click', setupEasyGame)
hardModeSelector.addEventListener('click', setupHardGame)

function setupEasyGame() {
  board.changeBoard('easy')
  subtitle.innerText = 'Choose your fighter!';
  modeSelectionDisplay.classList.add('hidden');
  easyModeSection.classList.remove('hidden');
}

function setupHardGame() {
  board.changeBoard('hard')
  subtitle.innerText = 'Choose your fighter!';
  modeSelectionDisplay.classList.add('hidden');
  hardModeSection.classList.remove('hidden');
}