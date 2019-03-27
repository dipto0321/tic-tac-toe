const Player = playerArgs => ({
  name: playerArgs.name,
  sign: playerArgs.sign,
  board: playerArgs.board,
  moves: [],
  turn(index) {
    this.moves.push(index);
    this.board.receiveChoice(index, this);
  },
});

export default Player;