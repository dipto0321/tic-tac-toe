const GameBoard = () => ({
  grid: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  winningCombo: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ],
  receiveChoice(target, player) {
    this.grid[target] = player.sign;
  },
  emptySquares() {
    return this.grid.filter(box => (typeof box) === 'number');
  },
});

export default GameBoard;