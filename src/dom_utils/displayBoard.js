/* eslint-disable no-use-before-define */

import { createHtml, clearHtml } from '../utils/createHtml';

export default function createBoard(player, board) {
  const main = document.querySelector('.main');
  const container = createHtml('div', 'setup-board');
  const btn = createHtml('button', 'rotate-btn');
  const title = createHtml('h2', 'setup-title');
  title.textContent = 'Place your fleet';
  btn.textContent = 'rotate';
  btn.addEventListener('click', () => {
    player.fleet[0].isVertical = !player.fleet[0].isVertical;
  });
  clearHtml(main);
  main.appendChild(title);
  main.appendChild(container);
  main.appendChild(btn);

  for (let row = 0; row < board.size; row++) {
    for (let col = 0; col < board.size; col++) {
      const cell = document.createElement('div');
      if (board.gameboard[row][col] !== 0) {
        cell.style.background = 'red';
      }

      cell.className = 'cell';
      cell.dataset.row = row;
      cell.dataset.col = col;
      container.appendChild(cell);
      cell.addEventListener(
        'mouseenter',
        () => {
          showHoverEffect(row, col, player);
        },
        false,
      );
      cell.addEventListener('mouseleave', clearHoverEffect, false);
      cell.addEventListener(
        'click',
        (e) => handleClick(e, player, board),
        false,
      );
    }
  }
}

function handleClick(e, player, board) {
  const r = Number(e.target.getAttribute('data-row'));
  const c = Number(e.target.getAttribute('data-col'));
  if (player.fleet.length === 0) return;
  if (board.moveIsValid(r, c, player.fleet[0])) {
    board.placeShip(r, c, player.fleet[0]);
    board.ships.push(player.fleet[0]);
    player.fleet.shift();
    createBoard(player, board);
  }
  createBoard(player, board);
}

function showHoverEffect(row, col, player) {
  if (!player.fleet.length) return;
  const currentShipLength = player.fleet[0].len;
  const isVertical = player.fleet[0].isVertical;

  for (let i = 0; i < currentShipLength; i++) {
    const rowIndex = row + (isVertical ? i : 0);
    const colIndex = col + (isVertical ? 0 : i);

    const cell = document.querySelector(
      `[data-row="${rowIndex}"][data-col="${colIndex}"]`,
    );

    if (cell === null) return;

    cell.classList.add('ship-hover');
  }
}
function clearHoverEffect() {
  const cells = document.querySelectorAll('.ship-hover');
  cells.forEach((cell) => cell.classList.remove('ship-hover'));
}
