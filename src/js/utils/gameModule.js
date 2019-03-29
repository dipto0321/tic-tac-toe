const newGame = (gameArgs) => {
  const {
    boardFactory,
    playerFactory,
    gameFactory,
    name,
    level,
    mixin,
    aiFn,
  } = gameArgs;

  const board = boardFactory();
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
  const game = gameFactory({
    board,
    human,
    computer,
    level,
    aiFn,
  });
  return game;
};

export default newGame;