import getRandomPosition from '../utils/util';

export default class Gameboard {
  constructor(name, size) {
    this.size = size;
    this.name = name;
    this.gameboard = this.createBoard();
    this.occupied = new Set();
    this.hits = new Set();
    this.misses = new Set();
    this.ships = [];
  }

  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk);
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
        (!ship.isVertical && this.occupied.has(`${row},${col + i}`))
      ) {
        return false;
      }
      if (
        (ship.isVertical && row + i >= this.size) ||
        (ship.isVertical && this.occupied.has(`${row + i},${col}`))
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

  randomHit() {
    let position = getRandomPosition(this.size);

    while (this.hits.has(`${position.row},${position.col}`)) {
      position = getRandomPosition(this.size);
    }
    this.hits.add(`${position.row},${position.col}`);
    return this.receveAttack(position.row, position.col);
  }

  receveAttack(row, col) {
    if (this.gameboard[row][col] !== 0) {
      const shipId = this.gameboard[row][col];
      const res = this.ships.find((ship) => ship.id === shipId);
      res.hit(res, true);
      res.destroyed(res);
      this.hits.add(`${row},${col}`);
      return true;
    }
    this.hits.add(`${row},${col}`);

    return false;
  }
}
