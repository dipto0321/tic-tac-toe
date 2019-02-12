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
cells.forEach(cell => cell.addEventListener("click", cellFunctionality));

function cellFunctionality(e) {
  e.stopPropagation();
  squareInnerText(e.target, winningCombo);
}

// Change the inner text of box

function squareInnerText(target, winArr) {
  // debugger;

  let humanChoice = target;
  humanChoice.innerText = human.sign;
  human.turn(winArr, humanChoice.id)
  let computerChoice = document.getElementById(String(computer.makeChoice()));
  computer.turn(winArr, computerChoice.id);
  computerChoice.innerText = computer.sign;
  humanChoice.removeEventListener("click", cellFunctionality);
  computerChoice.removeEventListener("click", cellFunctionality);

}

document.getElementById("reset").addEventListener("click", resetGame);

// Reset 

function resetGame() {
  cells.forEach(cell => cell.innerText = "");
  game = new Game();
  human = game.human;
  computer = game.computer;
  cells.forEach(cell => cell.addEventListener("click", cellFunctionality));
}