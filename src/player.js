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
      var fighterIndex = Math.floor(Math.random() * game.rules.fighters.length);
      this.fighter = game.rules.fighters[fighterIndex];
    }
  }
}