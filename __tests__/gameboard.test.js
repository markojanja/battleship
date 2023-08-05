import Gameboard from '../src/factories/gameboard';
import Ship from '../src/factories/ship';

describe('Board class properties and methods tests', () => {
  const board = new Gameboard('player', 5);
  test('should return name,col , and row of the board', () => {
    expect(board.name).toBe('player');
    expect(board.size).toBe(5);
  });

  describe('check to see if moves are valid valid', () => {
    test('check to see if horizontal move is valid', () => {
      const board = new Gameboard('player', 5);
      expect(board.moveIsValid(0, 2, new Ship('submarine', 3))).toBeTruthy();
      expect(board.moveIsValid(0, 3, new Ship('submarine', 3))).toBeFalsy();
    });

    test('check to see if vertical move is valid', () => {
      const board = new Gameboard('player', 5);
      const ship = new Ship('destroyer', 5);
      ship.isVertical = true;
      expect(board.moveIsValid(0, 2, ship)).toBeTruthy();
      expect(board.moveIsValid(1, 0, ship)).toBeFalsy();
    });
  });
  describe('check if ship is added', () => {
    test('check is ship added horizontaly', () => {
      const board = new Gameboard('player', 5);
      const ship = new Ship('destroyer', 4);
      expect(board.placeShip(0, 0, ship)).toEqual('ship placed');
    });
    test('check is ship added verticaly', () => {
      const board = new Gameboard('player', 5);
      const ship = new Ship('submarine', 4);
      ship.isVertical = true;
      expect(board.placeShip(0, 0, ship)).toEqual('ship placed');
    });
  });

  describe('ships are added randomly', () => {
    test('check is ship added randomly', () => {
      const board = new Gameboard('player', 5);
      board.ships = [
        new Ship('Carrier', 5),
        new Ship('Battleship', 4),
        new Ship('Submarine', 3),
        new Ship('Destroyer', 3),
        new Ship('Patrol ship', 2),
      ];
      expect(board.placeRandom(board.ships)).toBeTruthy();
    });
  });
  describe('receve attacks', () => {
    test('receve attack', () => {
      const board = new Gameboard('player', 5);
      board.ships = [
        new Ship('Carrier', 5),
        new Ship('Battleship', 4),
        new Ship('Submarine', 3),
        new Ship('Destroyer', 3),
        new Ship('Patrol ship', 2),
      ];
      board.placeShip(0, 0, board.ships[1]);
      expect(board.receveAttack(0, 0)).toBeTruthy();
      expect(board.receveAttack(0, 1)).toBeTruthy();
      expect(board.receveAttack(0, 2)).toBeTruthy();
      expect(board.receveAttack(0, 3)).toBeTruthy();
      expect(board.receveAttack(0, 4)).toBeFalsy();
      expect(board.receveAttack(1, 1)).toBeFalsy();
    });
    test('receve attack and update ship len', () => {
      const board = new Gameboard('player', 5);
      board.ships = [
        new Ship('Carrier', 5),
        new Ship('Battleship', 4),
        new Ship('Submarine', 3),
        new Ship('Destroyer', 3),
        new Ship('Patrol ship', 2),
      ];
      board.placeShip(0, 0, board.ships[1]);
      board.receveAttack(0, 0);
      expect(board.ships[1].len).toBe(3);
      expect(board.ships[1].isSunk).toBeFalsy();
      board.receveAttack(0, 1);
      expect(board.ships[1].len).toBe(2);
      expect(board.ships[1].isSunk).toBeFalsy();
      board.receveAttack(0, 2);
      expect(board.ships[1].len).toBe(1);
      expect(board.ships[1].isSunk).toBeFalsy();
      board.receveAttack(0, 3);
      expect(board.ships[1].len).toBe(0);
      expect(board.ships[1].isSunk).toBeTruthy();
    });
  });
});
