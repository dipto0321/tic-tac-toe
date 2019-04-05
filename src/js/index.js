// Game objects
import GameBoard from "./factories/gameBoard";
import Player from "./factories/player";
import mixin from "./utils/mixins";
import GameObj from "./factories/game";
import minimax from "./lib/minimax";
import newGame from "./utils/gameModule";

// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import Game from './views/components/Game';
import '../css/style.scss';

const game = newGame({
  name,
  level: 'hard',
  mixin,
  boardFactory: GameBoard,
  playerFactory: Player,
  gameFactory: GameObj,
  aiFn: minimax
});

ReactDOM.render(<Game game={game} />, document.getElementById('app'));
