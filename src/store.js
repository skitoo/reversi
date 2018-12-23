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


export const createStore = (options = { actions: {}, mutations: {}, state: {} }) => (
  new Vuex.Store({
    state: {
      ...state,
      ...options.state,
    },
    mutations: {
      ...mutations,
      ...options.mutations,
    },
    actions: {
      ...actions,
      ...options.actions,
    },
  })
);
