/* eslint-disable max-len */
/* eslint-disable operator-linebreak */
/* eslint-disable no-plusplus */
import getRandomPosition from '../util';
import Ship from './ship';

export default class Gameboard {
  constructor(name, size) {
    this.size = size;
    this.name = name;
    this.gameboard = this.createBoard();
    this.occupied = new Set();
    this.hits = new Set();
    this.ships = [
      new Ship('Carrier', 5),
      new Ship('Battleship', 4),
      new Ship('Submarine', 3),
      new Ship('Destroyer', 3),
      new Ship('Patrol ship', 2),
    ];
  }

  createBoard() {
    const arr = [];
    for (let i = 0; i < this.size; i++) {
      arr.push([]);
      for (let j = 0; j < this.size; j++) {
        arr[i].push(0);
      }
    }
    return arr;
  }

  moveIsValid(row, col, ship) {
    for (let i = 0; i < ship.len; i++) {
      if (
        (!ship.isVertical && col + i >= this.size) ||
        this.occupied.has(`${row},${col + i}`)
      ) {
        return false;
      }
      if (
        (ship.isVertical && row + i >= this.size) ||
        this.occupied.has(`${row + i},${col}`)
      ) {
        return false;
      }
    }

    return true;
  }

  placeShip(row, col, ship) {
    for (let i = 0; i < ship.len; i++) {
      if (!ship.isVertical) {
        this.gameboard[row][col + i] = `${ship.name[0]}`;
        this.occupied.add(`${row},${col + i}`);
      }
      if (ship.isVertical) {
        this.gameboard[row + i][col] = `${ship.name[0]}`;
        this.occupied.add(`${row + i},${col}`);
      }
    }
    return 'ship placed';
  }

  placeRandom(arr) {
    arr.forEach((ship) => {
      let placed = false;
      while (!placed) {
        const position = getRandomPosition(this.size);
        ship.isVertical = Math.random() < 0.5;
        if (this.moveIsValid(position.row, position.col, ship)) {
          this.placeShip(position.row, position.col, ship);
          placed = true;
        }
      }
    });
    return true;
  }

  receveAttack(row, col) {
    if (this.gameboard[row][col] !== 0) {
      const shipId = this.gameboard[row][col];
      const res = this.ships.filter((ship) => ship.id === shipId);
      res[0].hit(res[0], true);
      res[0].destroyed(res[0]);
      return true;
    }
    return false;
  }
}
