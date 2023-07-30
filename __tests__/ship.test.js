import Ship from '../src/factories/ship';

describe('Ship class properties and methods tests', () => {
  test('should reutrn name of the ship', () => {
    const ship = new Ship('submarine', 4);
    expect(ship.name).toBe('submarine');
    expect(ship.name !== 'submarine').toBeFalsy();
  });
  test('should return length of the ship', () => {
    const ship = new Ship('submarine', 4);
    expect(ship.len).toBe(4);
    expect(ship.len === 5).toBeFalsy();
  });
  test('hit method', () => {
    const ship = new Ship('submarine', 4);
    expect(ship.hit(ship, true)).toBe(3);
    expect(ship.len).toBe(3);
  });

  test('if ship is not hit method', () => {
    const ship = new Ship('submarine', 4);
    expect(ship.hit(ship)).toBe(4);
    expect(ship.len).toBe(4);
  });

  test('is ship destroyed', () => {
    const ship = new Ship('submarine', 0);
    expect(ship.destroyed(ship)).toBeTruthy();
    expect(ship.isSunk).toBe(true);
  });
  test('is ship not destroyed', () => {
    const ship = new Ship('submarine', 4);
    expect(ship.destroyed(ship)).toBeFalsy();
    expect(ship.isSunk).toBeFalsy();
  });
});
