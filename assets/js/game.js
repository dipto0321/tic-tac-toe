class Game {
  constructor() {
    this.player1 = new Player("Player 1", "X");
    this.player2 = new Player("Player 2", "O");
    this.cycle(this.player1, this.player2);
  }

  cycle(player1, player2) {
    for (let i = 0; i < 9; i++) {
      // 1. player1 turn
      player1.turn();
      // 2. player2 turn
      // 
    }
  }
}