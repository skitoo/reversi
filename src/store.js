import Vue from 'vue';
import Vuex from 'vuex';
import {
  INITIAL_BOARD,
  BLACK,
} from '@/store/commons';
import getters from '@/store/getters';
import mutations from '@/store/mutations';
import actions from '@/store/actions';

Vue.use(Vuex);


export const state = {
  board: INITIAL_BOARD,
  currentPlayer: BLACK,
};

export const createStore = (options = {
  actions: {},
  mutations: {},
  getters: {},
  state: {},
}) => (
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
    getters: {
      ...getters,
      ...options.getters,
    },
  })
);
