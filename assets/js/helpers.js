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
  if (!checkDraw(computer)) {
    playerTurn(winArr, target, computer);
  }
  // If either player wins, remove all click functionality from remaining cells
  if (checkWin(winArr, computer) || checkWin(winArr, human)) {
    cells.forEach(cell => cell.removeEventListener("click", cellFunctionality));
  }
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

// Reset
function resetGame() {
  cells.forEach(cell => (cell.innerText = ""));
  game = new Game();
  human = game.human;
  computer = game.computer;
  addListenerToCells(cells);
}