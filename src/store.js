import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const INITIAL_BOARD = [
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 2, 0, 0, 0,
  0, 0, 0, 2, 1, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
];

export const BLACK = 1;
export const WHITE = 2;


export const state = {
  board: INITIAL_BOARD,
  currentPlayer: BLACK,
};

export const mutations = {
};

export const actions = {
};


export default new Vuex.Store({
  state,
  mutations,
  actions,
});
