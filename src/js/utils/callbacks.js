const clickHandler = (e) => {
  return function innerFunction(args, e) {
    const {
      game,
      level,
    } = args;
    const humanChoice = Number(e.target.id);
    const computerChoice = game.turn(humanChoice, level);
    e.target.innerText = game.board.grid[humanChoice];
    document.getElementById(computerChoice).innerText = game.board.grid[computerChoice];
    document.getElementById(computerChoice).removeEventListener('click', game.handler);
  };
};

const addListenerToBoxes = (e, collection, callBack) => {
  const boxes = [...document.getElementsByClassName(collection)];
  boxes.forEach(box => box.addEventListener(e, callBack, {
    once: true,
  }));
};

const removeListenerFromBoxes = (e, collection, callBack) => {
  const boxes = [...document.getElementsByClassName(collection)];
  boxes.forEach(box => box.removeEventListener(e, callBack));
};

export {
  clickHandler,
  addListenerToBoxes,
  removeListenerFromBoxes,
};