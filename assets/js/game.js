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
    if (this.endGame(this.human, this.computer) === false) {
      this.playerTurn(target, this.computer);
    }
    this.endGame(this.human, this.computer);
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

endGame(p1, p2) {
  if (this.checkWin(p1) || this.checkWin(p2) || this.checkDraw()) {
    // Display endgame message
    endGameMessages(p1, p2);
    // Remove al click functionality from remaining cells
    disableAllCells();
    return true;
  }
  return false;
}

checkWin(player) {
  // Check each subarray of winArr if included in player's moves array
  return this.winningCombo.some(combo => combo.every(num => player.moves.includes(num)));
}

checkDraw() {
  // First check if there are any winners then check if all elements in the board array are strings
  if (!this.checkWin(this.human) && !this.checkWin(this.computer)) {
    return this.board.every(el => typeof el === "string") ? true : false;
  } else {
    return false;
  }
}
}