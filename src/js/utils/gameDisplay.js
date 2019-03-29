const gameBoardDisplay = () => {
  const mainGameBoard = document.getElementById('mainBoard');

  for (let i = 0, j = 0; i < 3; i += 1, j += 3) {
    const tr = document.createElement('tr');
    for (let k = 0; k < 3; k += 1) {
      const td = document.createElement('td');
      td.setAttribute('class', 'cell');
      td.setAttribute('id', j + k);
      tr.appendChild(td);
    }
    mainGameBoard.appendChild(tr);
  };
  return mainGameBoard;
}

export {
  gameBoardDisplay,
}