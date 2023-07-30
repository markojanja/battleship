import getRandomPosition from '../../util';

export default class Gameboard {
  constructor(name, size) {
    this.size = size;
    this.name = name;
    this.gameboard = this.createBoard();
    this.occupied = new Set();
    this.hits = new Set();
    this.ships = [];
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

  randomHit() {
    let hit = false;
    while (!hit) {
      const position = getRandomPosition(this.size);
      if (!this.hits.has(`${position.row},${position.col}`)) {
        this.receveAttack(position.row, position.col);
        this.hits.add(`${position.row},${position.col}`);
        hit = true;
      }
    }
    return true;
  }

  receveAttack(row, col) {
    if (this.hits.has(`${row},${col}`)) return false;
    if (this.gameboard[row][col] !== 0) {
      const shipId = this.gameboard[row][col];
      const res = this.ships.filter((ship) => ship.id === shipId);
      res[0].hit(res[0], true);
      res[0].destroyed(res[0]);
      this.hits.add(`${row},${col}`);
      return true;
    }
    return false;
  }
}
