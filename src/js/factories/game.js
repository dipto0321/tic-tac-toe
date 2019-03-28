const Game = (gameArgs) => {
  const {
    board,
    human,
    computer,
    aiFn,
  } = gameArgs;

  function turn(humanChoice, level) {
    if (!this.endGame()) this.human.turn(humanChoice);
    if (!this.endGame()) {
      const computerChoice = this.computer.makeChoice(this, level, aiFn);
      this.computer.turn(computerChoice);
      return computerChoice;
    }
  }

  function checkWin(player) {
    return board.winningCombo.some(combo => combo.every(num => player.moves.includes(num)));
  }

  function endGame() {
    return this.checkWin(this.human) ||
      this.checkWin(this.computer) ||
      this.board.emptySquares().length === 0;
  }

  return {
    human,
    computer,
    board,
    turn,
    checkWin,
    endGame,
  };
};
export default Game;