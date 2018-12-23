import {
  WHITE,
  BLACK,
  WIDTH,
  HEIGHT,
} from '@/store/commons';
import { createStore } from '@/store';

describe('store::mutations', () => {
  let store;

  beforeEach(() => {
    store = createStore();
  });

  describe('changePlayer', () => {
    it('should change to WHITE player when current player is BLACK', () => {
      store.commit('changePlayer');
      expect(store.state.currentPlayer).toEqual(WHITE);
    });
    it('should change to BLACK player when current player is WHITE', () => {
      store.state.currentPlayer = WHITE;
      store.commit('changePlayer');
      expect(store.state.currentPlayer).toEqual(BLACK);
    });
  });

  describe('changePiece', () => {
    it('should add a piece into the board at the passed-in position with color', () => {
      store.commit('changePiece', { position: 20, color: BLACK });
      expect(store.state.board[20]).toEqual(BLACK);
      expect(store.state.board.length).toEqual(WIDTH * HEIGHT);
    });

    it('should change a piece on the board at the passed-in position with color', () => {
      store.commit('changePiece', { position: 28, color: BLACK });
      expect(store.state.board[20]).toEqual(BLACK);
      expect(store.state.board.length).toEqual(WIDTH * HEIGHT);
    });

    it('should raise an error if position is not valide', () => {
      expect(() => {
        store.commit('changePiece', { position: 68, color: BLACK });
      }).toThrow();
      expect(() => {
        store.commit('changePiece', { position: -2, color: BLACK });
      }).toThrow();
    });
  });
});
