import { clearHtml, createHtml } from '../utils/createHtml';
import updateStyles from '../utils/updateStyles';

export default function createPlayerBoard(player, board) {
  const playerBoard = document.querySelector(`.${player.name}`);
  clearHtml(playerBoard);
  for (let row = 0; row < board.size; row++) {
    for (let col = 0; col < board.size; col++) {
      const cell = createHtml('div', 'cell', `cell-${player.name}`);
      cell.className = 'cell';
      cell.dataset.row = row;
      cell.dataset.col = col;
      updateStyles(cell, board, player, row, col);
      playerBoard.appendChild(cell);
    }
  }
}
