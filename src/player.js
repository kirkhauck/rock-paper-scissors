class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.score = 0;
  }

  takeTurn() {
    console.log('I took my turn!');
  }
}