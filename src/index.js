import Player from './factories/player';
import Gameboard from './factories/gameboard';

const player = new Player('player');
const playerBoard = new Gameboard(player.name, 10);

console.log(playerBoard.size);

// const cpu = new Player('computer');
// const cpuBoard = new Gameboard(cpu.name, 10);

function displayBoard() {
  const container = document.querySelector('.main');

  for (let row = 0; row < playerBoard.size; row++) {
    for (let col = 0; col < playerBoard.size; col++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.row = row;
      cell.dataset.col = col;
      container.appendChild(cell);
    }
  }
}

displayBoard();
