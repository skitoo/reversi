import { state } from '@/store';
import getters from '@/store/getters';

describe('store::getters', () => {
  it('should return playable cells with black player', () => {
    const result = getters.playableCells(state);
    expect(result).toEqual([20, 29, 34, 43]);
  });
});
