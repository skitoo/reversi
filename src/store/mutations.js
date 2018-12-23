/* eslint-disable no-param-reassign */
import Vue from 'vue';
import {
  WHITE,
  BLACK,
  WIDTH,
  HEIGHT,
} from '@/store/commons';

export default {
  changePlayer(state) {
    state.currentPlayer = state.currentPlayer === WHITE ? BLACK : WHITE;
  },
  changePiece(state, { position, color }) {
    if (position > WIDTH * HEIGHT || position < 0) {
      throw new Error(`${position} position is invalid`);
    }
    Vue.set(state.board, position, color);
  },
};
