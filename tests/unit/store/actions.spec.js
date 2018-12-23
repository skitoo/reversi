import { createStore } from '@/store';
import { WHITE, BLACK } from '@/store/commons';

describe('store::actions', () => {
  let store;

  beforeEach(() => {
    store = createStore();
  });

  describe('play', () => {
    it('should change current player to opponent', () => {
      store.dispatch('play', 20);
      expect(store.state.currentPlayer).toEqual(WHITE);
    });

    it('should add a new piece of color of current player ', () => {
      store.dispatch('play', 20);
      expect(store.state.board[20]).toEqual(BLACK);
    });

    it('should reverse all pieces of opponent between position and all other player pieces', () => {
      store.dispatch('play', 20);
      expect(store.state.board).toEqual([
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 1, 0, 0, 0,
        0, 0, 0, 2, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
      ]);
    });
  });
});
