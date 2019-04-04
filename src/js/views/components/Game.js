import React from 'react';
import Board from './Board';
import ResetButton from './ResetButton';
import LevelSelect from './LevelSelect';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick(e) {
    e.target.innerText = e.target.id;
  }
  render() {
    return (
      <div>
        <div id="game-controls">
          <ResetButton />
          <LevelSelect />
        </div>
        <Board handleClick={this.handleClick} />
      </div>
    );
  }
}
