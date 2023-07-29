/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-expressions */
class Ship {
  constructor(name, len) {
    this.name = name;
    // eslint-disable-next-line prefer-destructuring
    this.id = name[0];
    this.len = len;
    this.isSunk = false;
    this.isVertical = false;
  }

  hit(ship, isHit = false) {
    isHit ? (ship.len -= 1) : ship.len;

    return ship.len;
  }

  destroyed(ship) {
    ship.len === 0 ? (ship.isSunk = true) : (ship.isSunk = false);
    return ship.isSunk;
  }
}

export default Ship;
