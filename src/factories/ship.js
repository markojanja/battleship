export default class Ship {
  constructor(name, len) {
    this.name = name;
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
