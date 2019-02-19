// Collect all cells
let cells = [...document.getElementsByClassName("cell")];

let game = new Game();

cells.forEach((element, index) => {
  if (typeof game.board[index] === "string") {
    element.innerText = game.board[index];
  }
});

domControls.addListenerToCells(cells);

document.getElementById("reset").addEventListener("click", e => domControls.resetGame());

document.getElementById("level").addEventListener("change", e => domControls.changeLevel());