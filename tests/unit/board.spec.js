import { mount } from '@vue/test-utils';
import Board from '@/components/Board.vue';
import Piece from '@/components/Piece.vue';
import { createStore } from '@/store';

describe('Board.vue', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = createStore();
    wrapper = mount(Board, {
      store,
    });
  });

  it('should render cells', () => {
    expect(wrapper.findAll('.cell').length).toEqual(64);
  });

  it('should render pieces with the right colors', () => {
    expect(wrapper.findAll(Piece).length).toEqual(4);
    expect(wrapper.findAll('.white').length).toEqual(2);
    expect(wrapper.findAll('.black').length).toEqual(2);
  });
});
