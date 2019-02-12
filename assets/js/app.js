// Winning combination:
const winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

// Collect all cells
let cells = [...document.getElementsByClassName("cell")];

let game = new Game();
let human = game.human;
let computer = game.computer;

// Add click functionality for human player
cells.forEach(cell => cell.addEventListener("click", e => {
  e.stopPropagation();
  squareInnerText(e.target, winningCombo);
}));

// Change the inner text of box

function squareInnerText(target, winArr) {
  let humanChoice = target;
  let computerChoice = computer.makeChoice();
  humanChoice.innerText = human.sign;
  human.turn(winArr, humanChoice.id)
  computer.turn(winArr, computerChoice);
  document.getElementById(String(computerChoice)).innerText = computer.sign;
}

document.getElementById("reset").addEventListener("click", clearTable);

// Reset table

function clearTable() {
  cells.forEach(cell => cell.innerText = "");
}