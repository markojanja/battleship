import { clearHtml, createHtml } from '../utils/createHtml';

export default function createPlayerBoard(player, board) {
  const playerBoard = document.querySelector(`.${player.name}`);
  clearHtml(playerBoard);
  for (let row = 0; row < board.size; row++) {
    for (let col = 0; col < board.size; col++) {
      const cell = createHtml('div', 'cell', `cell-${player.name}`);
      cell.className = 'cell';
      cell.dataset.row = row;
      cell.dataset.col = col;
      if (board.gameboard[row][col] !== 0 && player.name === 'player') {
        cell.style.background = 'red';
      }
      if (board.hits.has(`${row},${col}`) && board.gameboard[row][col] !== 0) {
        cell.classList.add('hit');
      }
      if (board.hits.has(`${row},${col}`)) {
        cell.classList.add('cpu-miss');
      }
      playerBoard.appendChild(cell);
    }
  }
}
