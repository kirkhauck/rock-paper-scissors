class Board {
  constructor() {
    this.human = new Player('Human', 'token');
    this.computer = new Player('Computer', 'token');
    this.difficulty = undefined;
    this.result = undefined;
  }

  changeBoard(gameMode) {
    this.difficulty = gameMode
  }

  resetGame() {

  }
}