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
      var fighters = Object.keys(game.rules);
      var randomFighter = Math.floor(Math.random() * fighters.length);
      this.fighter = fighters[randomFighter];
    }
  }

  resetFighter() {
    this.fighter = undefined;
  }
}