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
    // Checking if player's moves array will have any winning combination -> win
    if (checkWin(winArr, this)) console.log(this.name + "Win!");
    // If none then checking if no more empty space in the board -> draw
    if (checkDraw(this)) console.log("It's a tie!");
  }
}

// win checking function

function checkWin(winArr, player) {
  return winArr.some(combo => combo.every(num => player.moves.includes(num)));
}

function checkDraw(player) {
  return player.game.board.every(el => typeof el === "string") ? true : false;
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
