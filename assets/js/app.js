// Collect all cells
[...document.getElementsByClassName("cell")].forEach(cell => cell.addEventListener("click", squareInnerText));

// Change the inner text of box

function squareInnerText(e) {
  e.stopPropagation();
  e.target.innerText = e.target.id;
}