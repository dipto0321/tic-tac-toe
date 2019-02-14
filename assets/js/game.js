class Game {
  constructor() {
    this.human = new Player("Human", "O", this);
    this.computer = new Computer("Computer", "X", this);
    this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  }
}