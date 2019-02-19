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
    this.playerTurn(target, this.human);

    // If game isn't a draw then the computer will choose a square
    if (endGame(this.human, this.computer) === false) {
      this.playerTurn(target, this.computer);
    }
    endGame(this.human, this.computer);
  }

  playerTurn(target, player) {
  // playerChoice will differ depending on type of player
  let playerChoice = player === this.human ? target : document.getElementById(String(player.makeChoice()));
  // Player makes a turn
  player.turn(playerChoice.id);
  // Change inner text of the chosen square into the player's sign
  playerChoice.innerText = player.sign;
  // After the square is chosen remove click functionality from it
  playerChoice.removeEventListener("click", cellFunctionality);
}
}