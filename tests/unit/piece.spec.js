import { shallowMount } from '@vue/test-utils';
import Piece from '@/components/Piece.vue';
import { WHITE, BLACK } from '@/store/commons';

describe('Piece.vue', () => {
  it('renders piece with white color', () => {
    const wrapper = shallowMount(Piece, {
      propsData: {
        color: WHITE,
      },
    });
    expect(wrapper.contains('.white')).toBeTruthy();
  });
  it('renders piece with black color', () => {
    const wrapper = shallowMount(Piece, {
      propsData: {
        color: BLACK,
      },
    });
    expect(wrapper.contains('.black')).toBeTruthy();
  });
});
