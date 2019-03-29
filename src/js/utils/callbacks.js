function clickHandler() {
  return function innerFunction(game, e) {
    const humanChoice = Number(e.target.id);
    const computerChoice = game.turn(humanChoice, game.level);
    e.target.innerText = game.board.grid[humanChoice];
    if (game.endGame()) removeListenerFromBoxes('click', 'cell', game.handler);
    if (computerChoice !== undefined) {
      document.getElementById(computerChoice).innerText = game.board.grid[computerChoice];
      document.getElementById(computerChoice).removeEventListener('click', game.handler);
    }
    if (game.endGame()) {
      removeListenerFromBoxes('click', 'cell', game.handler);
      showEndGameDiv(game);
    }
  };
};

function showEndGameDiv(game) {
  const winner = game.checkWin(game.human) ? game.human.name : 'Computer';
  const endGameDiv = document.getElementById('endgame');
  endGameDiv.classList.remove('d-none');
  if (game.checkWin(game.human) || game.checkWin(game.computer)) {
    endGameDiv.innerText = `${winner} wins!`
  } else if (game.board.emptySquares()) {
    endGameDiv.innerText = `It's a draw!`;
  }
}

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