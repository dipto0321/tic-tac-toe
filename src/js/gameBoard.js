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

// class Game {
//   constructor(name, player1, player2) {
//     this.human = ;
//     this.computer = ;
//     this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//     this.winningCombo = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [6, 4, 2]
//     ];
//   }

//   turn(squareID, player) {
//     this.board[Number(squareID)] = player.sign;
//   }

//   gameCycle(target) {
//     // First human chooses a square
//     gameControls.playerTurn(target, this.human);

//     // If game isn't a draw then the computer will choose a square
//     if (gameControls.endGame(this.human, this.computer) === false) {
//       gameControls.playerTurn(target, this.computer);
//     }
//     gameControls.endGame(this.human, this.computer);
//   }

// };

export default GameBoard;