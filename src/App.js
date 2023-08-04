/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
import Player from './factories/player';
import Gameboard from './factories/gameboard';
import createBoard from './dom_utils/displayBoard';
import { clckHandler } from './utils/util';
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
    addClickEvent();
    gameLoop(player, board, cpu, cpuBoard);
  } else {
    createBoard(player, board);
    clckHandler(app);
  }
}

function addClickEvent() {
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
        cell.style.background = 'purple';
        const x = cpuBoard.receveAttack(Number(row), Number(col));
        if (x) {
          cell.style.background = 'green';
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
  // Implement your CPU attack logic here
  // For example, randomly select a cell to attack
  const randomRow = Math.floor(Math.random() * 10);
  const randomCol = Math.floor(Math.random() * 10);

  // Perform CPU player's attack
  const result = board.receveAttack(randomRow, randomCol);

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
    console.log(`Game Over! ${winner.name} wins!`);
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
