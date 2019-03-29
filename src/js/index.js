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
} from './utils/callbacks';
import newGame from './utils/gameModule';

// const name = prompt(`What's your name? `);
const name = "Ryan";

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

console.log(game);

document.body.appendChild(gameBoardDisplay());

game.handler = clickHandler().bind(window, game);

addListenerToBoxes('click', 'cell', game.handler);