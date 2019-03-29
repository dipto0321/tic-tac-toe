import '../css/style.css';

import GameBoard from './factories/gameBoard';

import Player from './factories/player';

import mixin from './utils/mixins';

import Game from './factories/game';

import minimax from './lib/minimax';

import {
  gameBoardDisplay,
} from './utils/domUtils';

import {
  clickHandler,
  addListenerToBoxes,
  resetGame,
  levelSelection,
} from './utils/callbacks';

import newGame from './utils/gameModule';

const name = prompt(`What's your name? `);

const level = document.getElementById('level').value;

const game = newGame({
  name,
  level,
  mixin,
  boardFactory: GameBoard,
  playerFactory: Player,
  gameFactory: Game,
  aiFn: minimax,
});

document.body.appendChild(gameBoardDisplay());

game.handler = clickHandler().bind(window, game);

addListenerToBoxes('click', 'cell', game.handler);

document.getElementById('reset').addEventListener('click', () => {
  resetGame({
    newGame,
    name,
    level,
    mixin,
    gameBoardDisplayFn: gameBoardDisplay,
    listenerToBoxes: addListenerToBoxes,
    handler: clickHandler,
    boardFactory: GameBoard,
    playerFactory: Player,
    gameFactory: Game,
    aiFn: minimax,
  })
});

document.getElementById('level').addEventListener('change', () => {
  levelSelection(resetGame, {
    newGame,
    name,
    level,
    mixin,
    gameBoardDisplayFn: gameBoardDisplay,
    listenerToBoxes: addListenerToBoxes,
    handler: clickHandler,
    boardFactory: GameBoard,
    playerFactory: Player,
    gameFactory: Game,
    aiFn: minimax,
  });
});