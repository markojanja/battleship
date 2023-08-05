export default function updateStyles(cell, board, player, row, col) {
  if (board.gameboard[row][col] !== 0 && player.name === 'player') {
    cell.classList.add('taken');
  }
  if (board.hits.has(`${row},${col}`) && board.gameboard[row][col] !== 0) {
    cell.classList.add('hit');
  }
  if (board.hits.has(`${row},${col}`) && board.gameboard[row][col] === 0) {
    cell.classList.add('cpu-miss');
  }
}
