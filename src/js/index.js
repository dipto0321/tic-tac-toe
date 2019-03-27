import '../css/style.css';
import GameBoard from './gameBoard';
import Player from './player';
import mixin from './mixins';
import Game from './app';
import minimax from './minimax';

const game = Game(GameBoard, Player, mixin, minimax);