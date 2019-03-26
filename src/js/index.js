import '../css/style.css';
import Game from './game';
import Player from './player',
import Computer from './player';

// Collect all cells
let cells = [...document.getElementsByClassName("cell")];

// Ask player for name
let name = prompt("What's your name?");

let player1 = new Player(name, "O", this);

let player2 = new Computer("Computer", "X", this)
// Instantiate a new game
let game = new Game(name);

// Reflect the contents of gameBoard array into the html (for testing)
cells.forEach((element, index) => {
  if (typeof game.board[index] === "string") {
    element.innerText = game.board[index];
  }
});