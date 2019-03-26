(
  () => {
    let mainGameBoard = document.getElementById("mainBoard");
    for (let i = 0, j = 0; i < 3; i += 1, j += 3) {
      let tr = document.createElement("tr");
      for (let i = 0; i < 3; i += 1) {
        let td = document.createElement("td");
        td.setAttribute("class", "cell");
        td.setAttribute("id", j + i);
        tr.appendChild(td);
      }
      mainGameBoard.appendChild(tr);
    }
  }
)();

domControls.addListenerToCells(cells);

document.getElementById("reset").addEventListener("click", e => domControls.resetGame());

document.getElementById("level").addEventListener("change", e => domControls.changeLevel());