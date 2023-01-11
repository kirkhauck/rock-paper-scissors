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
  }

  playEasyGame() {
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
    
  }

  resetGame() {
    this.difficulty = undefined;
  }
}