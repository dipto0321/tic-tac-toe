import React from 'react';

export default (props) => {
  const gameOverClass = props.gameOver ? '' : 'd-none';
  const message = props.winner ? `${props.winner} wins!` : `It's a tie!`;
  return (
    <div id="endgame" className={gameOverClass}>{message}</div>
  )
}