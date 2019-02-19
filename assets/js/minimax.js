function emptySquares(board) {
  return board.filter(cell => typeof cell == "number");
}

function minimax(player) {
  // 1. Declare available spots
  let board = game.board;
  let availableSpots = emptySquares(board);
  let human = game.human;
  let computer = game.computer;
  // 2. Termninal states
  if (checkWin(human)) return {
    score: -10
  };
  if (checkWin(computer)) return {
    score: 10
  };
  if (availableSpots.length == 0) return {
    score: 0
  };

  // Collect all possible moves
  let moves = [];
  // iterate through available spots and run recursively between opponent and player to build up scores

  availableSpots.forEach(spot => {
    let move = {};
    move.index = board[spot];
    player.moves.push(board[spot]);
    board[spot] = player.sign;
    // run recursively minimax to opponent
    let result;
    if (player === computer) result = minimax(human);
    if (player === human) result = minimax(computer);
    move.score = result.score;
    // reset board to original state before this move
    board[spot] = move.index;
    player.moves.pop();
    moves.push(move);
  });
  // Find index of the best score from among the moves;
  let best;
  if (player === computer) best = moves.sort((a, b) => b.score - a.score)[0];
  if (player === human) best = moves.sort((a, b) => a.score - b.score)[0];
  return best;
}