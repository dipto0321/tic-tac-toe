class Player {
  constructor(name, sign) {
    this.name = name;
    this.sign = sign;
    this.moves = [];
  }
  turn(squareID, winArr) {
    // Player choosing a square
    // Whatever square the player chooses will be pushed into his moves array
    this.moves.push(Number(squareID));
    // Checking if player's moves array will have any winning combination -> win
    winArr.forEach(combo => {
      combo.every(val => this.moves.includes(val)) ? console.log("You won") : console.log("Keep playing");
    })
    // If none then checking if no more empty space in the board -> draw
  }
}

class Human extends Player {
  constructor(name, sign) {
    super(name, sign)
  }
  turn() {
    super.turn;
  }
}

class Computer extends Player {
  constructor(name, sign) {
    super(name, sign)
  }
  turn() {
    super.turn;
  }
}