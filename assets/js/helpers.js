// Add click functionality for human player
function addListenerToCells(cells) {
  cells.forEach(cell => cell.addEventListener("click", cellFunctionality));
}

function cellFunctionality(e) {
  e.stopPropagation();
  gameCycle(e.target, winningCombo);
}

// Change the inner text of box

function gameCycle(target, winArr) {
  let humanChoice = target;
  humanChoice.innerText = human.sign;
  human.turn(winArr, humanChoice.id);
  humanChoice.removeEventListener("click", cellFunctionality);
  if (!checkDraw(computer)) {
    let computerChoice = document.getElementById(String(computer.makeChoice()));
    computer.turn(winArr, computerChoice.id);
    computerChoice.innerText = computer.sign;
    computerChoice.removeEventListener("click", cellFunctionality);
  }
  if (checkWin(winArr, computer) || checkWin(winArr, human)) {
    cells.forEach(cell => cell.removeEventListener("click", cellFunctionality));
  }
}

// Reset

function resetGame() {
  cells.forEach(cell => (cell.innerText = ""));
  game = new Game();
  human = game.human;
  computer = game.computer;
  addListenerToCells(cells);
}