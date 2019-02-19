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
      endGameDiv.innerText = gameControls.checkDraw()
        ? "It's a tie"
        : gameControls.checkWin(p1)
        ? `${p1.name} Wins!`
        : `${p2.name} Wins!`;
    },

    disableAllCells() {
      cells.forEach(cell =>
        cell.removeEventListener("click", this.cellFunctionality)
      );
    },

    // Add click functionality for human player
    addListenerToCells(cells) {
      cells.forEach(cell =>
        cell.addEventListener("click", this.cellFunctionality)
      );
    },

    cellFunctionality(e) {
      e.stopPropagation();
      game.gameCycle(e.target, game.winningCombo);
    }
  };
})();

// Game related controls

const gameControls = (
  () => {
    return {
      playerTurn(target, player) {
    // playerChoice will differ depending on type of player
    let playerChoice = player === game.human ? target : document.getElementById(String(player.makeChoice()));
    // Player makes a turn
    player.turn(playerChoice.id);
    // Change inner text of the chosen square into the player's sign
    playerChoice.innerText = player.sign;
    // After the square is chosen remove click functionality from it
    playerChoice.removeEventListener("click", domControls.cellFunctionality);
  },

  endGame(p1, p2) {
    if (this.checkWin(p1) || this.checkWin(p2) || this.checkDraw()) {
      // Display endgame message
      domControls.endGameMessages(p1, p2);
      // Remove al click functionality from remaining cells
      domControls.disableAllCells();
      return true;
    }
    return false;
  },

  checkWin(player) {
    // Check each subarray of winArr if included in player's moves array
    return game.winningCombo.some(combo => combo.every(num => player.moves.includes(num)));
  },

  checkDraw() {
    // First check if there are any winners then check if all elements in the board array are strings
    if (!this.checkWin(game.human) && !this.checkWin(game.computer)) {
      return game.board.every(el => typeof el === "string") ? true : false;
    } else {
      return false;
    }
  }
    };
  }
)();