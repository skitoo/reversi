import {
  state,
  getters,
  coordinates,
  cellIndex,
  playableCell,
  BLACK,
  WHITE,
} from '@/store';

describe('store', () => {
  describe('state', () => {
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

  describe('tools', () => {
    describe('coordinates', () => {
      it('should returns coordinates in function of passed-in index', () => {
        expect(coordinates(0)).toEqual([0, 0]);
        expect(coordinates(20)).toEqual([4, 2]);
        expect(coordinates(15)).toEqual([7, 1]);
      });
    });

    describe('cellIndex', () => {
      it('should returns index of the cell in function of passed-in coordinates', () => {
        expect(cellIndex(0, 0)).toEqual(0);
        expect(cellIndex(4, 2)).toEqual(20);
        expect(cellIndex(7, 1)).toEqual(15);
      });
    });

    describe('playableCell', () => {
      it('should return playable cell for a given direction', () => {
        const board = [
          0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 1, 2, 0, 0, 0,
          0, 0, 2, 2, 1, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0,
        ];
        expect(playableCell(board, [1, 4], [1, 0], WHITE, BLACK)).toBeTruthy();
        expect(playableCell(board, [0, 0], [1, 0], WHITE, BLACK)).toBeFalsy();
        expect(playableCell(board, [5, 3], [-1, 0], WHITE, BLACK)).toBeTruthy();
        expect(playableCell(board, [5, 4], [-1, 0], WHITE, BLACK)).toBeFalsy();
      });
    });
  });

  describe('getters', () => {
    it('should return playable cells with black player', () => {
      const result = getters.playableCells(state);
      expect(result).toEqual([20, 29, 34, 43]);
    });
  });
});
