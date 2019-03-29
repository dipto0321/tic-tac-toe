const minimaxProcessor = (game, player) => {
  const {
    board,
    human,
    computer,
  } = game;
  const availableSpots = board.emptySquares();
  if (game.checkWin(human)) {
    return {
      score: -10,
    };
  }
  if (game.checkWin(computer)) {
    return {
      score: 10,
    };
  }
  if (availableSpots.length === 0) {
    return {
      score: 0,
    };
  }

  const moves = [];

  availableSpots.forEach((spot) => {
    const move = {};
    move.index = board.grid[spot];
    player.moves.push(board.grid[spot]);
    board.grid[spot] = player.sign;
    let result;
    if (player === computer) {
      result = minimaxProcessor(game, human);
    } else if (player === human) {
      result = minimaxProcessor(game, computer);
    }

    move.score = result.score;

    board.grid[spot] = move.index;
    player.moves.pop();
    moves.push(move);
  });
  let best;
  if (player === computer) {
    // eslint-disable-next-line prefer-destructuring
    best = moves.sort((a, b) => b.score - a.score)[0];
    // eslint-disable-next-line prefer-destructuring
  } else if (player === human) {
    // eslint-disable-next-line prefer-destructuring
    best = moves.sort((a, b) => a.score - b.score)[0];
  }
  return best;
};

const minimax = (game, player) => minimaxProcessor(game, player).index;

export default minimax;