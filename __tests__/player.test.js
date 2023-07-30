import Player from '../src/player';

describe('player tests', () => {
  test('test player name', () => {
    const player = new Player('player');
    expect(player.name).toBe('player');
  });
});
