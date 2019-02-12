class Game {
  constructor() {
    this.human = new Human("Human", "X", this);
    this.computer = new Computer("Computer", "O", this);
    this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  }
}