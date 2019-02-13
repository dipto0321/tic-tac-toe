class Player {
  constructor(name, sign, game) {
    this.name = name;
    this.sign = sign;
    this.moves = [];
    this.game = game;
  }
  turn(winArr, squareID) {
    // Player choosing a square
    // Whatever square the player chooses will be pushed into his moves array
    this.moves.push(Number(squareID));
    this.game.board[Number(squareID)] = this.sign;
  }
}

class Human extends Player {}

class Computer extends Player {
  makeChoice() {
    // program will check all vacant squares and choose the first one vacant
    let numcells = this.game.board.filter(el => typeof el === "number");
    // debugger;
    return numcells[0];
  }
}