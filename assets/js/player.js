class Player {
  constructor(name, sign, game) {
    this.name = name;
    this.sign = sign;
    this.moves = [];
    this.game = game;
  }
  turn(squareID) {
    // Push square id into the player's moves array
    this.moves.push(Number(squareID));
    // change the board's text in that particular index into the player's sign
    this.game.board[Number(squareID)] = this.sign;
  }
}

class Computer extends Player {
  makeChoice() {
    let level = document.getElementById("level").value;
    // program will check all vacant squares and choose the first one vacant
    let numcells = this.game.board.filter(el => typeof el === "number");
    // return numcells[0];

    // Minimax version
    let choice = level == "easy" ? numcells[0] : minimax(this).index;
    return choice;
  }
}