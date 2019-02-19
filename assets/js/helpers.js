const domControls = (() => {
  return {

    // Reset game 
    resetGame() {
      // Clear all cells
      cells.forEach(cell => (cell.innerText = ""));
      // Initialize a new game
      game = new Game();
      // Reassign human and computer to new instances created by new game
      human = game.human;
      computer = game.computer;
      // Add back all listeners to cells (should reset happen after an endgame)
      this.addListenerToCells(cells);
      // Remove endgame display
      let endGameDiv = document.getElementById("endgame");
      endGameDiv.setAttribute("class", "d-none");
      endGameDiv.innerText = "";
    },

    // Whenever the user selects a new level the game resets
    changeLevel() {
      this.resetGame();
    },

    endGameMessages(p1, p2) {
      let endGameDiv = document.getElementById("endgame");
      endGameDiv.removeAttribute("class");
      endGameDiv.innerText = game.checkDraw() ? "It's a tie" : game.checkWin(p1) ? `${p1.name} Wins!` : `${p2.name} Wins!`;
    },

    disableAllCells() {
      cells.forEach(cell => cell.removeEventListener("click", this.cellFunctionality));
    },

    // Add click functionality for human player
    addListenerToCells(cells) {
      cells.forEach(cell => cell.addEventListener("click", this.cellFunctionality));
    },

    cellFunctionality(e) {
      e.stopPropagation();
      game.gameCycle(e.target, game.winningCombo);
    }
  }
})();

// One cycle in a game means human and computer each makes a turn