import { mount } from '@vue/test-utils';
import Board from '@/components/Board.vue';
import Piece from '@/components/Piece.vue';
import { createStore } from '@/store';

describe('Board.vue', () => {
  let store;
  let wrapper;
  let playAction;

  beforeEach(() => {
    playAction = jest.fn();
    store = createStore({
      actions: {
        play: playAction,
      },
    });
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

  it('should render playable cells', () => {
    expect(wrapper.findAll('.playable').length).toEqual(4);
  });

  it('should dispatch play action when player click on playable cell', () => {
    const playableCell = wrapper.find('.playable');
    playableCell.trigger('click');
    expect(playAction).toBeCalled();
  });

  it('should not dispatch play action when player click on  not playable cell', () => {
    const notPlayableCell = wrapper.find('.cell');
    expect(notPlayableCell.classes()).not.toContain('.playable');
    notPlayableCell.trigger('click');
    expect(playAction).not.toBeCalled();
  });
});
