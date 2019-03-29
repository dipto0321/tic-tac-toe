import {
  gameBoardDisplay
} from "./domUtils";

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
}

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

function resetGame(newGameArgs) {
  const {
    newGame,
    gameBoardDisplayFn,
    listenerToBoxes,
    name,
    level,
    mixin,
    handler,
    boardFactory,
    playerFactory,
    gameFactory,
    aiFn,
  } = newGameArgs;
  const game = newGame({
    name,
    level,
    mixin,
    boardFactory,
    playerFactory,
    gameFactory,
    aiFn,
  });
  let mainBoard = document.getElementById('mainBoard');
  mainBoard.innerHTML = '';
  mainBoard = gameBoardDisplayFn();
  document.getElementById('endgame').innerText = '';
  document.getElementById('endgame').classList.add('d-none');
  document.body.appendChild(mainBoard);
  game.handler = handler().bind(window, game);
  listenerToBoxes('click', 'cell', game.handler);
}

function levelSelection(resetGameFn, newGameArgs) {
  resetGameFn(Object.assign(newGameArgs, {
    level: document.getElementById('level').value,
  }));
}

function addListenerToBoxes(e, collection, callBack) {
  const boxes = [...document.getElementsByClassName(collection)];
  boxes.forEach(box => box.addEventListener(e, callBack, {
    once: true,
  }));
}

function removeListenerFromBoxes(e, collection, callBack) {
  const boxes = [...document.getElementsByClassName(collection)];
  boxes.forEach(box => box.removeEventListener(e, callBack));
}

export {
  clickHandler,
  addListenerToBoxes,
  removeListenerFromBoxes,
  resetGame,
  levelSelection,
};