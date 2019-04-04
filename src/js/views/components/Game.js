import React from 'react';
import Board from './Board';
import ResetButton from './ResetButton';
import LevelSelect from './LevelSelect';

export default class Game extends React.Component {
  render() {
    return (
      <div>
        <div id="game-controls">
          <ResetButton />
          <LevelSelect />
        </div>
        <Board />
      </div>
    );
  }
}
