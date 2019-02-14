// Add click functionality for human player
function addListenerToCells(cells) {
  cells.forEach(cell => cell.addEventListener("click", cellFunctionality));
}

function cellFunctionality(e) {
  e.stopPropagation();
  gameCycle(e.target, winningCombo);
}

// One cycle in a game means human and computer each makes a turn
function gameCycle(target, winArr) {
  // First human chooses a square
  playerTurn(winArr, target, human);

  // If game isn't a draw then the computer will choose a square
  if (endGame(winArr, human, computer) === false) {
    playerTurn(winArr, target, computer);
  }
  endGame(winArr, human, computer);
}

function playerTurn(winArr, target, player) {
  // playerChoice will differ depending on type of player
  let playerChoice = player === human ? target : document.getElementById(String(player.makeChoice()));
  // Player makes a turn
  player.turn(winArr, playerChoice.id);
  // Change inner text of the chosen square into the player's sign
  playerChoice.innerText = player.sign;
  // After the square is chosen remove click functionality from it
  playerChoice.removeEventListener("click", cellFunctionality);
}

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
  endGame.innerText = "";
}

// Whenever the user selects a new level the game resets
function changeLevel() {
  resetGame();
}

// End game
function endGame(winArr, p1, p2) {
  if (checkWin(winArr, p1) || checkWin(winArr, p2) || checkDraw()) {
    // Display endgame message
    endGameMessages(winArr, p1, p2)
    // Remove al click functionality from remaining cells
    disableAllCells();
    return true;
  }
  return false;
}

function endGameMessages(winArr, p1, p2) {
  let endGameDiv = document.getElementById("endgame");
  endGameDiv.removeAttribute("class");
  endGameDiv.innerText = checkDraw() ? "It's a tie" : checkWin(winArr, p1) ? `${p1.name} Wins!` : `${p2.name} Wins!`;
}

function disableAllCells() {
  cells.forEach(cell => cell.removeEventListener("click", cellFunctionality));
}

// win checking function
function checkWin(winArr, player) {
  // Check each subarray of winArr if included in player's moves array
  return winArr.some(combo => combo.every(num => player.moves.includes(num)));
}

function checkDraw() {
  // First check if there are any winners then check if all elements in the board array are strings
  if (!checkWin(winningCombo, human) && !checkWin(winningCombo, computer)) {
    return game.board.every(el => typeof el === "string") ? true : false;
  } else {
    return false;
  }
}