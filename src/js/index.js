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
  removeListenerFromBoxes,
} from './utils/callbacks';

// const name = prompt(`What's your name? `);
const name = "Ryan";

const board = GameBoard();

const human = Player({
  name,
  board,
  sign: 'X',
});

const computer = Object.assign(Player({
  board,
  name: 'Computer',
  sign: 'O',
}), {
  makeChoice: mixin.makeChoice,
});

const level = 'hard';

const game = Game({
  board,
  human,
  computer,
  aiFn: minimax,
});

document.body.appendChild(gameBoardDisplay());

game.handler = clickHandler().bind(window, {
  game,
  level,
});

addListenerToBoxes('click', 'cell', game.handler);
// removeListenerFromBoxes('click', 'cell', game.handler);