const Game = (gameBoardFactory, playerFactory, mixin, aiFn) => {
  const name = prompt(`What's your name? `);
  const board = gameBoardFactory();
  const human = playerFactory({
    name,
    board,
    sign: 'X',
  });
  const computer = Object.assign(playerFactory({
    board,
    name: 'Computer',
    sign: 'O',
  }), {
    makeChoice: mixin.makeChoice,
  });

  function turn(humanChoice, level) {
    this.human.turn(humanChoice);
    const computerChoice = this.computer.makeChoice(this, level, aiFn).index;
    this.computer.turn(computerChoice);
    return computerChoice;
  }

  function checkWin(player) {
    return board.winningCombo.some(combo => combo.every(num => player.moves.includes(num)));
  }

  return {
    human,
    computer,
    board,
    turn,
    checkWin,
  };
};
export default Game;
// (
//   () => {
//     let mainGameBoard = document.getElementById("mainBoard");
//     for (let i = 0, j = 0; i < 3; i += 1, j += 3) {
//       let tr = document.createElement("tr");
//       for (let i = 0; i < 3; i += 1) {
//         let td = document.createElement("td");
//         td.setAttribute("class", "cell");
//         td.setAttribute("id", j + i);
//         tr.appendChild(td);
//       }
//       mainGameBoard.appendChild(tr);
//     }
//   }
// )();

// domControls.addListenerToCells(cells);

// document.getElementById("reset").addEventListener("click", e => domControls.resetGame());

// document.getElementById("level").addEventListener("change", e => domControls.changeLevel());