import { createStore } from '@/store';

describe('store::getters', () => {
  let store;
  const board = [
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 2, 0, 0,
    0, 0, 0, 1, 2, 0, 0, 0,
    0, 0, 0, 1, 2, 0, 0, 0,
    0, 0, 0, 1, 2, 0, 0, 0,
    0, 0, 0, 0, 2, 1, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
  ];

  beforeEach(() => {
    store = createStore();
  });

  describe('playableCells', () => {
    it('should returns playable cells with black player', () => {
      const result = store.getters.playableCells;
      expect(result).toEqual([20, 29, 34, 43]);
    });
  });

  describe('reversibleCells', () => {
    it('should returns reversible cells with passed-in position and current player', () => {
      const result = store.getters.reversibleCells(20);
      result.sort();
      expect(result).toEqual([20, 28]);
    });

    it('should returns reversibles cells with passed-in position in a special case', () => {
      store.state.board = board;
      const result = store.getters.reversibleCells(61);
      result.sort();
      expect(result).toEqual([52, 61]);
    });
  });
});
