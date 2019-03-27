const Game = (gameArgs) => {
  const {
    gameBoardFactory,
    playerFactory,
    mixin,
    aiFn,
  } = gameArgs;
  const name = prompt(`What's your name? `);
  const board = gameBoardFactory();
  const human = playerFactory({
    name,
    board,
    sign: 'X',
  });
  const computer = Object.assign(playerFactory({
    board,
    name: 'Computer',
    sign: 'O',
  }), {
    makeChoice: mixin.makeChoice,
  });

  function turn(humanChoice, level) {
    this.human.turn(humanChoice);
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