import { expect, it, describe } from 'vitest';
import { mount } from '@vue/test-utils';
import Ratings from '../Rating.vue';

describe('Ratings.vue', () => {
  const wrapper = mount(Ratings, {
    props: {
      score: 0,
    },
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('prop score correctly', () => {
    expect(wrapper.props().score).toBe(0);
    expect(wrapper.text()).toContain(0);
  });
});
