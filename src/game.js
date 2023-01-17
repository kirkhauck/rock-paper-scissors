class Game {
  constructor(player1, player2) {
    this.human = new Player(player1);
    this.computer = new Player(player2);
    this.difficulty = undefined;
    this.rules = undefined;
    this.winner = undefined;
  }

  changeDifficulty(event) {
    if (event.target.parentElement.id === 'easyModeButton') {
      this.difficulty = 'easy';
    } else if (event.target.parentElement.id === 'hardModeButton') {
      this.difficulty = 'hard';
    }
  };

  changeRules() {
    if (this.difficulty === 'easy') {
      this.rules = {
        'rock': ['scissors'],
        'scissors': ['paper'],
        'paper': ['rock']
      };
    } else if (this.difficulty === 'hard') {
      this.rules = {
        'cat': ['mouse', 'monkey'],
        'mouse': ['elephant', 'dog'],
        'elephant': ['dog', 'cat'],
        'dog': ['monkey', 'cat'],
        'monkey': ['elephant', 'mouse']
      };
    }
  }

  checkIfDraw() {
    if (this.human.fighter === this.computer.fighter) {
      this.winner = 'draw';
      return true;
    }
  }

  checkWinner() {
    this.winner = undefined;
    this.human.takeTurn(event);
    this.computer.takeTurn(event);
    var humanFighter = this.human.fighter;
    var computerFighter = this.computer.fighter;
    if (this.rules[humanFighter].includes(computerFighter)) {
      this.winner = 'human';
      this.human.score++;
    } else if (!this.checkIfDraw()) {
      this.winner = 'computer';
      this.computer.score++;
    } 
  }

  resetGame() {
    this.difficulty = undefined;
    this.rules = undefined;
    this.winner = undefined;
    this.human.resetFighter();
    this.computer.resetFighter();
  }
}