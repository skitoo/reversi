import { createStore } from '@/store';
import { WHITE } from '@/store/commons';

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

  const board2 = [
    0, 0, 2, 1, 0, 0, 0, 0,
    0, 0, 1, 2, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
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
    it('should returns playable cell with black player with other case', () => {
      store.state.board = board2;
      expect(store.getters.playableCells).toEqual([1, 12, 19]);
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

  describe('score', () => {
    describe('blackPlayerScore', () => {
      it('should returns the number of points of black player', () => {
        store.state.board = board;
        expect(store.getters.blackPlayerScore).toEqual(4);
      });
    });

    describe('whitePlayerScore', () => {
      it('should returns the number of points of white player', () => {
        store.state.board = board;
        expect(store.getters.whitePlayerScore).toEqual(5);
        store.commit('changePiece', { position: 0, color: WHITE });
        expect(store.getters.whitePlayerScore).toEqual(6);
      });
    });
  });
});
