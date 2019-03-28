function clickHandler(e) {
  return function innerFunction(game, e) {
    const humanChoice = Number(e.target.id);
    const computerChoice = game.turn(humanChoice, game.level);
    e.target.innerText = game.board.grid[humanChoice];
    document.getElementById(computerChoice).innerText = game.board.grid[computerChoice];
    document.getElementById(computerChoice).removeEventListener('click', game.handler);
  };
};

function addListenerToBoxes(e, collection, callBack) {
  const boxes = [...document.getElementsByClassName(collection)];
  boxes.forEach(box => box.addEventListener(e, callBack, {
    once: true,
  }));
};

function removeListenerFromBoxes(e, collection, callBack) {
  const boxes = [...document.getElementsByClassName(collection)];
  boxes.forEach(box => box.removeEventListener(e, callBack));
};

export {
  clickHandler,
  addListenerToBoxes,
  removeListenerFromBoxes,
};