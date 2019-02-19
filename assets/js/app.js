// Collect all cells
let cells = [...document.getElementsByClassName("cell")];

let game = new Game();

// for (let i = 0; i < cells.length; i++) {
//   if (typeof game.board[i] == "string") cells[i].innerText = game.board[i];
// }

cells.forEach((element, index)=>{
  if(typeof game.board[index] === "string") {
    element.innerText = game.board[index];
  }
});

addListenerToCells(cells);

document.getElementById("reset").addEventListener("click", resetGame);

document.getElementById("level").addEventListener("change", changeLevel);