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

  // updateWinnerEasy() {
  //   this.human.takeTurn(event);
  //   this.computer.takeTurn(event);
  //   var human = this.human.fighter;
  //   var computer = this.computer.fighter;
  //   if (human === computer) {
  //     this.winner = 'draw'
  //   } else if (human === 'rock' && computer === 'scissors') {
  //     this.human.score++;
  //     this.winner = 'human'
  //   } else if (human === 'rock' && computer === 'paper') {
  //     this.computer.score++;
  //     this.winner = 'computer'
  //   } else if (human === 'paper' && computer === 'rock') {
  //     this.human.score++;
  //     this.winner = 'human'
  //   } else if (human === 'paper' && computer === 'scissors') {
  //     this.computer.score++;
  //     this.winner = 'computer'
  //   } else if (human === 'scissors' && computer === 'paper') {
  //     this.human.score++;
  //     this.winner = 'human'
  //   } else if (human === 'scissors' && computer === 'rock') {
  //     this.computer.score++;
  //     this.winner = 'computer'
  //   }
  // }

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

  // updateWinnerHard() {
  //   this.human.takeTurn(event);
  //   this.computer.takeTurn(event);
  //   var human = this.human.fighter;
  //   var computer = this.computer.fighter;
    
  //   if (human === computer) {
  //     this.winner = 'draw';
  //   } else if (human === 'cat') {
  //     if (computer === 'mouse' || computer === 'monkey') {
  //       this.human.score++;
  //       this.winner = 'human';
  //     } else if (computer === 'dog' || computer === 'elephant') {
  //       this.computer.score++;
  //       this.winner = 'computer';
  //     }
  //   } else if (human === 'mouse') {
  //     if (computer === 'dog' || computer === 'elephant') {
  //       this.human.score++;
  //       this.winner = 'human';
  //     } else if (computer === 'monkey' || computer === 'cat') {
  //       this.computer.score++;
  //       this.winner = 'computer';
  //     }
  //   } else if (human === 'dog') {
  //     if (computer === 'monkey' || computer === 'cat') {
  //       this.human.score++;
  //       this.winner = 'human';
  //     } else if (computer === 'elephant' || computer === 'mouse') {
  //       this.computer.score++;
  //       this.winner = 'computer';
  //     }
  //   } else if (human === 'monkey') {
  //     if (computer === 'elephant' || computer === 'mouse') {
  //       this.human.score++;
  //       this.winner = 'human';
  //     } else if (computer === 'cat' || computer === 'dog') {
  //       this.computer.score++;
  //       this.winner = 'computer';
  //     }
  //   } else if (human === 'elephant') {
  //     if (computer === 'cat' || computer === 'dog') {
  //       this.human.score++;
  //       this.winner = 'human';
  //     } else if (computer === 'mouse' || computer === 'monkey') {
  //       this.computer.score++;
  //       this.winner = 'computer';
  //     }
  //   }
  // }
}