import { mount, shallowMount } from '@vue/test-utils';
import { expect, it, describe } from 'vitest';
import MovieCard from '../MovieCard.vue';

describe('MovieCard.vue', () => {
  const wrapper = mount(MovieCard, {
    props: {
      movie: {
        picture: 'image',
        title: 'movie_title',
        score: 100,
        id: 1,
      },
    },
  });

  // DONE
  // TODO: test prop movie's values are rendered correctly
  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // TODO: test computed from prop favoriteMovie is rendering the 😍 emoji when the prop movie's id is matching
  it('test computed emoji', () => {
    const wrapper = mount(MovieCard, {
      props: {
        movie: {
          picture: 'image',
          title: 'movie_title',
          score: 100,
          id: 1,
        },
        favoriteMovie: 1,
      },
    });
    expect(wrapper.vm.isFavorite).toBe('😍');
  });

  // DONE
  it('emits event when clicked', () => {
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('favorite-selected');
  });
});
