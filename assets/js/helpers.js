
// Reset game 
function resetGame() {
  // Clear all cells
  cells.forEach(cell => (cell.innerText = ""));
  // Initialize a new game
  game = new Game();
  // Reassign human and computer to new instances created by new game
  human = game.human;
  computer = game.computer;
  // Add back all listeners to cells (should reset happen after an endgame)
  addListenerToCells(cells);
  // Remove endgame display
  let endGameDiv = document.getElementById("endgame");
  endGameDiv.setAttribute("class", "d-none");
  endGameDiv.innerText = "";
}

// Whenever the user selects a new level the game resets
function changeLevel() {
  resetGame();
}


function endGameMessages(p1, p2) {
  let endGameDiv = document.getElementById("endgame");
  endGameDiv.removeAttribute("class");
  endGameDiv.innerText = game.checkDraw() ? "It's a tie" : game.checkWin(p1) ? `${p1.name} Wins!` : `${p2.name} Wins!`;
}

function disableAllCells() {
  cells.forEach(cell => cell.removeEventListener("click", cellFunctionality));
}

// // win checking function
// function checkWin(player) {
//   // Check each subarray of winArr if included in player's moves array
//   return game.winningCombo.some(combo => combo.every(num => player.moves.includes(num)));
// }

// function checkDraw() {
//   // First check if there are any winners then check if all elements in the board array are strings
//   if (!checkWin(game.human) && !checkWin(game.computer)) {
//     return game.board.every(el => typeof el === "string") ? true : false;
//   } else {
//     return false;
//   }
// }

// DOM manipulation related functions

// Add click functionality for human player
function addListenerToCells(cells) {
  cells.forEach(cell => cell.addEventListener("click", cellFunctionality));
}

function cellFunctionality(e) {
  e.stopPropagation();
  game.gameCycle(e.target, game.winningCombo);
}

// One cycle in a game means human and computer each makes a turn