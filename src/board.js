class Board {
  constructor(player1, player2) {
    this.human = new Player(player1);
    this.computer = new Player(player2);
    this.difficulty = undefined;
    this.rules = undefined;
    this.winner = undefined;
  }

  changeBoard(gameMode) {
    this.difficulty = gameMode;
    this.winner = undefined;
    if (this.difficulty === 'easy') {
      this.rules = {
        'rock': 'scissors',
        'scissors': 'paper',
        'paper': 'rock'
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
    }
  }

  updateWinnerEasy() {
    this.human.takeTurn(event);
    this.computer.takeTurn(event);
    this.checkIfDraw();
    var humanFighter = this.human.fighter;
    var computerFighter = this.computer.fighter;
    if (this.rules[humanFighter] === computerFighter) {
      this.winner = 'human';
      this.human.score++;
    } else if (this.winner !== 'draw') {
      this.winner = 'computer';
      this.computer.score++
    }
  }

  updateWinnerHard() {
    this.human.takeTurn(event);
    this.computer.takeTurn(event);
    this.checkIfDraw();
    var humanFighter = this.human.fighter;
    var computerFighter = this.computer.fighter;
    for (var i = 0; i < 2; i++) {
      if (this.rules[humanFighter][i] === computerFighter) {
        this.winner = 'human';
        this.human.score++;
        return;
      }
    }
    if (this.winner !== 'draw') {
      this.winner = 'computer';
      this.computer.score++;
    }
  }
}