/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
import './app.scss';
import Player from './factories/player';
import Gameboard from './factories/gameboard';
import createBoard from './dom_utils/displayBoard';
import getRandomPosition, { clckHandler, displayMessage } from './utils/util';
import createGamePage from './dom_utils/createGamePage';
import createPlayerBoard from './dom_utils/displayBoards';

const player = new Player('player');
const board = new Gameboard(player.name, 10);
const cpu = new Player('computer');
const cpuBoard = new Gameboard(player.name, 10);
cpuBoard.ships = cpu.fleet;
cpuBoard.placeRandom(cpu.fleet);
cpu.fleet = [];
let playerTurn = true;
let gameOver = false;
console.log(cpu.fleet, cpuBoard);

export default function app() {
  if (!player.fleet.length) {
    createGamePage();
    createPlayerBoard(player, board);
    createPlayerBoard(cpu, cpuBoard);
    playerAttack();
    gameLoop(player, board, cpu, cpuBoard);
  } else {
    createBoard(player, board);
    // re-render setup screen after each cell cli
    clckHandler(app);
  }
}

function playerAttack() {
  const cells = document.querySelectorAll('#cell-computer');

  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      if (playerTurn && !gameOver) {
        const row = cell.getAttribute('data-row');
        const col = cell.getAttribute('data-col');

        if (cpuBoard.hits.has(`${row},${col}`)) {
          console.log('invalid move');
          playerTurn = true;
          return;
        }
        cell.classList.add('player-miss');
        console.log('missed ');
        const result = cpuBoard.receveAttack(Number(row), Number(col));
        if (result) {
          cell.classList.add('hit');
          console.log('enemy is hit');
          console.log(cpuBoard.ships);
        }
        if (cpuBoard.allShipsSunk() || board.allShipsSunk()) {
          gameOver = true;
        }
        playerTurn = false;
      }
    });
  });
}

function cpuAttack(board) {
  const position = getRandomPosition(board.size);
  const result = board.receveAttack(position.row, position.col);

  if (result) {
    console.log('CPU Player: Hit!');
  } else {
    console.log('CPU Player: Miss!');
  }

  if (board.allShipsSunk()) {
    gameOver = true;
  }
}

function gameLoop(player, playerBoard, cpu, cpuBoard) {
  if (gameOver) {
    const winner = playerBoard.allShipsSunk() ? cpu : player;
    const message = `Game Over! ${winner.name} wins!`;
    displayMessage(message);
    return;
  }
  if (cpuBoard.allShipsSunk() || playerBoard.allShipsSunk()) {
    gameOver = true;
  }

  if (!playerTurn) {
    cpuAttack(playerBoard);
    createPlayerBoard(player, playerBoard);
    playerTurn = true;
  }

  requestAnimationFrame(() => gameLoop(player, playerBoard, cpu, cpuBoard));
}
