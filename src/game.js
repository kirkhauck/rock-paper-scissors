class Game {
  constructor(player1, player2) {
    this.human = new Player(player1);
    this.computer = new Player(player2);
    this.difficulty = undefined;
    this.rules = undefined;
    this.winner = undefined;
  }

  changeDifficulty(event) {
    if (event.target.parentElement.id === 'easyModeSelector') {
      this.difficulty = 'easy';
    } else if (event.target.parentElement.id === 'hardModeSelector') {
      this.difficulty = 'hard';
    }
  };

  changeRules() {
    if (this.difficulty === 'easy') {
      this.rules = {
        // fighters: ['rock', 'scissors', 'paper'],
        'rock': ['scissors'],
        'scissors': ['paper'],
        'paper': ['rock']
      };
    } else if (this.difficulty === 'hard') {
      this.rules = {
        // fighters: ['cat', 'mouse', 'elephant', 'dog', 'monkey'],
        'cat': ['mouse', 'monkey'],
        'mouse': ['elephant', 'dog'],
        'elephant': ['dog', 'cat'],
        'dog': ['monkey', 'cat'],
        'monkey': ['elephant', 'mouse']
      };
    }
  }

  // change this.rules to this.board once functionality is confirmed
  // find way to use keys list instead of fighters if time allows
  // changeBoard(gameMode) {
  //   this.difficulty = gameMode;
  //   this.winner = undefined;
  //   if (this.difficulty === 'easy') {
  //     this.rules = {
  //       fighters: ['rock', 'scissors', 'paper'],
  //       'rock': ['scissors'],
  //       'scissors': ['paper'],
  //       'paper': ['rock']
  //     };
  //   } else if (this.difficulty === 'hard') {
  //     this.rules = {
  //       fighters: ['cat', 'mouse', 'elephant', 'dog', 'monkey'],
  //       'cat': ['mouse', 'monkey'],
  //       'mouse': ['elephant', 'dog'],
  //       'elephant': ['dog', 'cat'],
  //       'dog': ['monkey', 'cat'],
  //       'monkey': ['elephant', 'mouse']
  //     };
  //   }
  // }

  // changeBoard(gameMode) {
  //   this.difficulty = gameMode;
  //   this.winner = undefined;
  //   if (this.difficulty === 'easy') {
  //     this.rules = {
  //       fighters: ['rock', 'scissors', 'paper'],
  //       'rock': ['scissors'],
  //       'scissors': ['paper'],
  //       'paper': ['rock']
  //     };
  //   } else if (this.difficulty === 'hard') {
  //     this.rules = {
  //       fighters: ['cat', 'mouse', 'elephant', 'dog', 'monkey'],
  //       'cat': ['mouse', 'monkey'],
  //       'mouse': ['elephant', 'dog'],
  //       'elephant': ['dog', 'cat'],
  //       'dog': ['monkey', 'cat'],
  //       'monkey': ['elephant', 'mouse']
  //     };
  //   }
  // }

  checkIfDraw() {
    if (this.human.fighter === this.computer.fighter) {
      this.winner = 'draw';
    }
  }

  checkWinner() {
    this.human.takeTurn(event);
    this.computer.takeTurn(event);
    this.checkIfDraw();
    var humanFighter = this.human.fighter;
    var computerFighter = this.computer.fighter;
    for (var i = 0; i < this.rules[humanFighter].length; i++) {
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

  resetGame() {
    this.difficulty = undefined;
    this.rules = undefined;
    this.winner = undefined;
  }
}