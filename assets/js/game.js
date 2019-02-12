class Game {
  constructor() {
    this.human = new Human("Human", "X");
    this.computer = new Computer("Computer", "O");
    this.cycle(this.human, this.computer);
  }

  cycle(human, computer) {
    for (let i = 0; i < 9; i++) {
      // 1. human first clicks a square
      // human.turn();
      //a) program checks if human has won
      //b) program checks if it's a tie 
      // 2. Right after, computer makes a move
      // computer.turn();
      //a) program checks if computer has won
      //b) program checks if it's a tie
    }
    // if it reaches this then it's a draw
  }
}