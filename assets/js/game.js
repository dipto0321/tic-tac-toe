class Game {
  constructor() {
    this.human = new Player("Human", "O", this);
    this.computer = new Computer("Computer", "X", this);
    this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.winningCombo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ];
  }
  gameCycle(target) {
    // First human chooses a square
    playerTurn(target, this.human);

    // If game isn't a draw then the computer will choose a square
    if (endGame(this.human, this.computer) === false) {
      playerTurn(target, this.computer);
    }
    endGame(game.human, this.computer);
  }
}