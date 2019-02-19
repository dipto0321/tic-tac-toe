(
  ()=>{
    let mainGameBoard = document.getElementById("mainBoard");
    // let j = 0;
    for (let i = 0, j=0; i < 3; i+=1, j+=3) {
      let tr = document.createElement("tr");
      for (let i = 0; i < 3 ; i+=1) {
        let td = document.createElement("td");
        td.setAttribute("class", "cell");
        td.setAttribute("id",j+i);
        tr.appendChild(td);
      }
      mainGameBoard.appendChild(tr);
    }
  }
)();

// Collect all cells
let cells = [...document.getElementsByClassName("cell")];


let name = prompt("What's your name?");
let game = new Game(name);

cells.forEach((element, index) => {
  if (typeof game.board[index] === "string") {
    element.innerText = game.board[index];
  }
});


domControls.addListenerToCells(cells);

document.getElementById("reset").addEventListener("click", e => domControls.resetGame());

document.getElementById("level").addEventListener("change", e => domControls.changeLevel());