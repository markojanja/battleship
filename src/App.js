/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
import './app.scss';
import Player from './factories/player';
import Gameboard from './factories/gameboard';
import createBoard from './modules/displayBoard';
import { clckHandler } from './utils/util';
import createGamePage from './modules/createGamePage';
import createPlayerBoard from './modules/displayBoards';
import {
  displayMessage,
  displayModal,
  removeMessage,
} from './components/components';

let player = new Player('player');
let board = new Gameboard(player.name, 10);
let cpu = new Player('computer');
let cpuBoard = new Gameboard(player.name, 10);
cpuBoard.ships = cpu.fleet;
cpuBoard.placeRandom(cpu.fleet);
cpu.fleet = [];
let playerTurn = true;
let gameOver = false;

export default function app() {
  if (!player.fleet.length) {
    createGamePage();
    createPlayerBoard(player, board);
    createPlayerBoard(cpu, cpuBoard);
    playerAttack();
    gameLoop(player, board, cpu, cpuBoard);
  } else {
    createBoard(player, board);
    // re-render setup screen after each cell click
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
          playerTurn = true;
          return;
        }
        if (!result) {
          cell.classList.add('player-miss');
          displayMessage('we missed them');
        }
        const result = cpuBoard.receveAttack(Number(row), Number(col));
        if (result) {
          const shipsLeft = cpuBoard.ships.filter(
            (ship) => ship.isSunk === false,
          );
          cell.classList.add('hit');
          displayMessage(
            `we hit them, they have  ${shipsLeft.length} more ships`,
          );
        }
        if (cpuBoard.allShipsSunk() || board.allShipsSunk()) {
          gameOver = true;
          removeMessage();
        }

        playerTurn = false;
      }
    });
  });
}

function cpuAttack(board) {
  const result = board.randomHit();
  let message;
  result ? (message = 'CPU Player: Hit!') : (message = 'CPU Player: Miss!');
  setTimeout(() => {
    displayMessage(message);
  }, 500);
  board.allShipsSunk() ? (gameOver = true) : (gameOver = false);
}

function gameLoop(player, playerBoard, cpu, cpuBoard) {
  if (gameOver) {
    const winner = playerBoard.allShipsSunk() ? cpu : player;
    const message = `Game Over! ${winner.name} wins!`;
    displayModal(resetGame, message);
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

  setTimeout(() => gameLoop(player, playerBoard, cpu, cpuBoard), 0);
}

function resetGame() {
  // Reset the game state variables
  player = new Player('player');
  board = new Gameboard(player.name, 10);
  cpu = new Player('computer');
  cpuBoard = new Gameboard(player.name, 10);
  cpuBoard.ships = cpu.fleet;
  cpuBoard.placeRandom(cpu.fleet);
  cpu.fleet = [];
  playerTurn = true;
  gameOver = false;
  removeMessage();
  app();
}
