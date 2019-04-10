import React from 'react';
import Board from './Board';
import ResetButton from './ResetButton';
import LevelSelect from './LevelSelect';
import EndGame from './EndGame';
export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {},
      board: Array(9).fill(null),
      gameOver: false,
      winner: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleResetBtn = this.handleResetBtn.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.initializeGame = this.initializeGame.bind(this);
  }
  componentDidMount(){
    const game = this.initializeGame();
    this.setState(()=>{
      return {
        game
      }
    });
  }
  initializeGame(){
    const {
      boardFactory,
      playerFactory,
      gameFactory,
      newGame,
      mixin,
      aiFn,
      name
    } = this.props;
    const game = newGame({
      name,
      mixin,
      boardFactory,
      playerFactory,
      gameFactory,
      aiFn,
      level: document.getElementById('level').value
    });
    return game;
  }
  handleClick(e) {
    const game = this.state.game;
    const humanChoice = Number(e.target.id);
    const grid = game.board.grid;
    if(typeof grid[humanChoice] === 'number'){
      game.turn(humanChoice);
      this.setState(()=>({
        board: grid.map(el => typeof el === 'number' ? null : el)
      }));
    }
    if(game.endGame()){
      const winner = game.board.emptySquares().length === 0 ? null : (game.checkWin(game.human) ? game.human.name : game.computer.name);
      this.setState(()=>({
        winner,
        gameOver: true,
      }));
    }
  }
  handleResetBtn(){
    const game = this.initializeGame();
    this.setState(()=>({
      game,
      board: Array(9).fill(null),
      gameOver: false
    }));
  }
  handleLevelChange(e){
    const game = this.initializeGame();
    this.setState(()=>({
      game,
      board: Array(9).fill(null),
      gameOver: false
    }));
  }
  render() {
    return (
      <div>
        <EndGame gameOver={this.state.gameOver} winner={this.state.winner} />
        <div id="game-controls">
          <ResetButton handleResetBtn={this.handleResetBtn} />
          <LevelSelect handleLevelChange={this.handleLevelChange} />
        </div>
        <Board handleClick={this.handleClick} board={this.state.board} />
      </div>
    );
  }
}
