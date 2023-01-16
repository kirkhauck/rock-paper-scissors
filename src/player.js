class Player {
  constructor(player) {
    this.name = player.name;
    this.token = player.token;
    this.fighter = undefined;
    this.score = 0;
  }

  takeTurn(event) {
    if (this.name === 'Human') {
      this.fighter = event.target.id;
    } else {
      var fighterIndex = Math.floor(Math.random() * board.rules.fighters.length);
      this.fighter = board.rules.fighters[fighterIndex];
    }
  }
}