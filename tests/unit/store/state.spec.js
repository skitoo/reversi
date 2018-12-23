import { state } from '@/store';
import { BLACK } from '@/store/commons';

describe('store::state', () => {
  it('should contain board with initial data', () => {
    const expected = [
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 1, 2, 0, 0, 0,
      0, 0, 0, 2, 1, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
    ];
    expect(state.board).toEqual(expected);
  });

  it('should contain current player with black as first player', () => {
    expect(state.currentPlayer).toEqual(BLACK);
  });
});
