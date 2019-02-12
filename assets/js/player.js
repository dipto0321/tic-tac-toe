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

    this.game.board[squareID] = this.sign;
    // Checking if player's moves array will have any winning combination -> win
    winArr.forEach(combo => {
      combo.every(num => this.moves.includes(num)) === true ? console.log(this.name + " wins!") : undefined;
    });
    // If none then checking if no more empty space in the board -> draw
    if (this.game.board.every(el => typeof el === "string")) {
      console.log("It's a draw!");
    }
  }
}

class Human extends Player {

}

class Computer extends Player {

}