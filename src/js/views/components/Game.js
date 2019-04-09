import React from 'react';
import Board from './Board';
import ResetButton from './ResetButton';
import LevelSelect from './LevelSelect';
import EndGame from './EndGame';
export default class Game extends React.Component {
  constructor(props) {
    super(props);
    const game = Object.assign({}, this.props.game);
    this.state = {
      board: this.props.game.board.grid.map(el => typeof el === 'number' ? null : el),
      gameOver: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log(e.target.id);
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
        <EndGame gameOver={this.state.gameOver}/>
        <div id="game-controls">
          <ResetButton handleResetBtn={this.handleResetBtn} />
          <LevelSelect handleLevelChange={this.handleLevelChange} />
        </div>
        <Board handleClick={this.handleClick} board={this.state.board} />
      </div>
    );
  }
}
