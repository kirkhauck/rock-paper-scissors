class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.fighter = undefined;
    this.score = 0;
  }

  takeTurn(event) {
    if (this.name === 'Human' && event.target.classList.contains('fighter')) {
      this.fighter = event.target.id;
    } else if (board.difficulty === 'easy') {
      var fighterIndex = Math.floor(Math.random() * easyFighters.length);
      this.fighter = easyFighters[fighterIndex];
    } else {
      var fighterIndex = Math.floor(Math.random() * hardFighters.length);
      this.fighter = hardFighters[fighterIndex];
    }
  } 
}