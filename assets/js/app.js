// Collect all cells
let cells = [...document.getElementsByClassName("cell")];

// Add click functionality
cells.forEach(cell => cell.addEventListener("click", squareInnerText));

// Change the inner text of box

function squareInnerText(e) {
  e.stopPropagation();
  e.target.innerText = e.target.id;
}

document.getElementById("reset").addEventListener("click", clearTable);

// Reset table

function clearTable() {
  cells.forEach(cell => cell.innerText = "");
}