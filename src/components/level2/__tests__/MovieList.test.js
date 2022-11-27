import { expect, it, describe, vi, afterAll, afterEach } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';
import MovieList from '../MovieList.vue';
import MovieCard from '../MovieCard.vue';
import dataService from '../utils/dataService';

describe('MovieList.vue', () => {
  const mockedMovieList = [{ id: '7' }, {}];
  const spy = vi
    .spyOn(dataService, 'getMovies')
    .mockReturnValue(mockedMovieList);

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly', () => {
    // shallow mount because MovieList is importing Component inside, we want to test 
    const wrapper = shallowMount(MovieList);
    expect(wrapper.exists()).toBe(true);
  });

  // TODO: Why is this a bad test? Reason your answer
  // DONE
  // Test is currently passing because we have 4 movies in the list, but it will break when more movies are added. 
  // It's deppending on the component inside. That's not good. 
  // It's not testing it in isolation, it's testing it with the DataService. 

  // TODO: Rework the test so it follows best practices
  // DONE
  it('should render movie list', async () => {
    // find all components that are moviecarc,
    const wrapper = shallowMount(MovieList);
    const movieCards = wrapper.findAllComponents(MovieCard);
    // we expect 4 because we have 4 movies in movie list(old)
    expect(spy).toBeCalledTimes(1);
    expect(movieCards.length).toBe(mockedMovieList.length);
  });

   // TODO
  // TODO: write this test!
  it('should have no favorite movie by default', async () => {
    const wrapper = shallowMount(MovieList);
    const options = wrapper.find('select').findAll('option');
    expect((options.at(0).element.selected = true));

    // ...? // check if MovieList has no selected options
    // find select element and assert it has no selected option
  
  });
 // TODO
  // TODO: TDD time!
  // Make this test pass by adding the missing functionality in the MovieList.vue component
  // TODO: After you made the test pass, rework the test so it follows best practices

  it('should update favorite movie on favorite-selected event received', async () => {
    const wrapper = mount(MovieList);
    const movieCard = wrapper.findAllComponents(MovieCard)[0];
    await movieCard.vm.$emit('favorite-selected', '7'); // this should be gone
    await wrapper.vm.$nextTick(); // vue made a tick and it was rerendered // flushPromies
    const select = wrapper.find('option:checked');
    expect(select.exists()).toBeTruthy();
  });
});
