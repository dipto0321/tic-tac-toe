import React from 'react';
import Board from './Board';
import ResetButton from './ResetButton';
import LevelSelect from './LevelSelect';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.props.game.board.grid.map(el => typeof el === 'number' ? null : el),
      level: this.props.game.level,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const game = this.props.game;
    const humanChoice = Number(e.target.id);
    const computerChoice = game.turn(humanChoice);
    this.setState(()=>({
      board: game.board.grid.map((el) => typeof el === 'number' ? null : el )
    }));
  }
  handleResetBtn(){
    console.log("Reset");
  }
  handleLevelChange(e){
    console.log(e.target.value);
  }
  render() {
    return (
      <div>
        <div id="game-controls">
          <ResetButton handleResetBtn={this.handleResetBtn} />
          <LevelSelect handleLevelChange={this.handleLevelChange} />
        </div>
        <Board handleClick={this.handleClick} board={this.state.board} />
      </div>
    );
  }
}
