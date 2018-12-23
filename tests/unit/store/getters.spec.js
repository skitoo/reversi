import { state } from '@/store';
import getters from '@/store/getters';

describe('store::getters', () => {
  describe('playableCells', () => {
    it('should returns playable cells with black player', () => {
      const result = getters.playableCells(state);
      expect(result).toEqual([20, 29, 34, 43]);
    });
  });

  describe('reversibleCells', () => {
    it('should returns reversible cells with passed-in position and current player', () => {
      const result = getters.reversibleCells(state)(20);
      result.sort();
      expect(result).toEqual([20, 28]);
    });

    it('should returns reversibles cells with passed-in position in a special case', () => {
      const board = [
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 2, 0, 0, 0,
        0, 0, 0, 1, 2, 0, 0, 0,
        0, 0, 0, 1, 2, 0, 0, 0,
        0, 0, 0, 0, 2, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
      ];
      state.board = board;
      const result = getters.reversibleCells(state)(61);
      result.sort();
      expect(result).toEqual([52, 61]);
    });
  });
});
