import React from 'react';

export default (props) => {
  const gameOverClass = props.gameOver ? '' : 'd-none';
  return (
    <div id="endgame" className={gameOverClass}>Game Over!</div>
  )
}