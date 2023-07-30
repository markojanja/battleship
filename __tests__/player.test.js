import Player from '../src/player';

describe('player tests', () => {
  test('test player name', () => {
    const player = new Player('player');
    expect(player.name).toBe('player');
    const computer = new Player('computer');
    expect(computer.name).toBe('computer');
  });
});
