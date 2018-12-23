import { mount } from '@vue/test-utils';
import { createStore } from '@/store';
import Dashboard from '@/components/Dashboard.vue';

describe('components::Dashboard', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = createStore();
    wrapper = mount(Dashboard, {
      store,
    });
  });
  describe('render scores', () => {
    it('should render player scores', () => {
      expect(wrapper.findAll('.score').length).toEqual(1);
    });
  });
  describe('isBlackPlayerTurn', () => {
    it('should returns true if current player is BLACK', () => {
      expect(wrapper.vm.isBlackPlayerTurn).toBeTruthy();
      store.commit('changePlayer');
      expect(wrapper.vm.isBlackPlayerTurn).toBeFalsy();
    });
  });
  describe('isWhitePlayerTurn', () => {
    it('should returns true if current player is WHITE', () => {
      expect(wrapper.vm.isWhitePlayerTurn).toBeFalsy();
      store.commit('changePlayer');
      expect(wrapper.vm.isWhitePlayerTurn).toBeTruthy();
    });
  });
  describe('hightlight current player', () => {
    it('should hightlight current player on dashboard', () => {
      const h3s = wrapper.findAll('h3');
      expect(h3s.at(0).classes()).toContain('currentPlayer');
      expect(h3s.at(1).classes()).not.toContain('currentPlayer');
      store.commit('changePlayer');
      expect(h3s.at(0).classes()).not.toContain('currentPlayer');
      expect(h3s.at(1).classes()).toContain('currentPlayer');
    });
  });
});
