import Ship from './ship';

export default class Player {
  constructor(name) {
    this.name = name;
    this.fleet = [
      new Ship('Carrier', 5),
      new Ship('Battleship', 4),
      new Ship('Submarine', 3),
      new Ship('Destroyer', 3),
      new Ship('Patrol ship', 2),
    ];
  }
}
