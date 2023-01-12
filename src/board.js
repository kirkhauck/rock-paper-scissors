class Board {
  constructor() {
    // Replace token with image asset
    this.human = new Player('Human', 'token');
    this.computer = new Player('Computer', 'token');
    this.difficulty = undefined;
    this.winner = undefined;
  }

  changeBoard(gameMode) {
    this.difficulty = gameMode;
    this.winner = undefined;
  }

  playEasyGame() {
    this.human.takeTurn(event);
    this.computer.takeTurn(event);
    var human = this.human.fighter;
    var computer = this.computer.fighter;
    if (human === computer) {
      this.winner = 'draw'
    } else if (human === 'rock' && computer === 'scissors') {
      this.human.score++;
      this.winner = 'human'
    } else if (human === 'rock' && computer === 'paper') {
      this.computer.score++;
      this.winner = 'computer'
    } else if (human === 'paper' && computer === 'rock') {
      this.human.score++;
      this.winner = 'human'
    } else if (human === 'paper' && computer === 'scissors') {
      this.computer.score++;
      this.winner = 'computer'
    } else if (human === 'scissors' && computer === 'paper') {
      this.human.score++;
      this.winner = 'human'
    } else if (human === 'scissors' && computer === 'rock') {
      this.computer.score++;
      this.winner = 'computer'
    }
  }

  playHardGame() {
    this.human.takeTurn(event);
    this.computer.takeTurn(event);
    var human = this.human.fighter;
    var computer = this.computer.fighter;
    
    if (human === computer) {
      this.winner = 'draw';
    } else if (human === 'cat') {
      if (computer === 'mouse' || computer === 'monkey') {
        this.human.score++;
        this.winner = 'human';
      } else if (computer === 'dog' || computer === 'elephant') {
        this.computer.score++;
        this.winner = 'computer';
      }
    } else if (human === 'mouse') {
      if (computer === 'dog' || computer === 'elephant') {
        this.human.score++;
        this.winner = 'human';
      } else if (computer === 'monkey' || computer === 'cat') {
        this.computer.score++;
        this.winner = 'computer';
      }
    } else if (human === 'dog') {
      if (computer === 'monkey' || computer === 'cat') {
        this.human.score++;
        this.winner = 'human';
      } else if (computer === 'elephant' || computer === 'mouse') {
        this.computer.score++;
        this.winner = 'computer';
      }
    } else if (human === 'monkey') {
      if (computer === 'elephant' || computer === 'mouse') {
        this.human.score++;
        this.winner = 'human';
      } else if (computer === 'cat' || computer === 'dog') {
        this.computer.score++;
        this.winner = 'computer';
      }
    } else if (human === 'elephant') {
      if (computer === 'cat' || computer === 'dog') {
        this.human.score++;
        this.winner = 'human';
      } else if (computer === 'mouse' || computer === 'monkey') {
        this.computer.score++;
        this.winner = 'computer';
      }
    }
  }
  
  // resetGame() {
  //   this.difficulty = undefined;
  // }
}