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
];

// Collect all cells
let cells = [...document.getElementsByClassName("cell")];

let game = new Game();
let human = game.human;
let computer = game.computer;

for (let i = 0; i < cells.length; i++) {
  if (typeof game.board[i] == "string") cells[i].innerText = game.board[i];
}


addListenerToCells(cells);

document.getElementById("reset").addEventListener("click", resetGame);

document.getElementById("level").addEventListener("change", changeLevel);