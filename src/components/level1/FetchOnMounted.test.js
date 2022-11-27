import { expect, it, describe, vi, afterEach, beforeEach } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import FetchOnMounted from './FetchOnMounted.vue';

const noop = () => {};

// TODO: TDD Exercise: complete the implementation of the component FetchOnMounted
// so all tests pass
describe('FetchOnMounted.vue', () => {
  const fetchSpy = vi.fn(); // vite function that will spy and mock // not function that will run testing
  vi.stubGlobal('fetch', fetchSpy); // engine stub a global by fetchSpy
  // vi.spyON(window, 'setInterval')

  beforeEach(() => {
    vi.resetAllMocks();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  // make sure it's rendered
  it('renders correctly', () => {
    fetchSpy.mockImplementation(noop);
    const wrapper = mount(FetchOnMounted);
    expect(wrapper.exists()).toBe(true);
  });

  it('calls yesno API on mounted', () => {
    fetchSpy.mockImplementation(noop);
    mount(FetchOnMounted);
    expect(fetchSpy).toBeCalledTimes(1);
    expect(fetchSpy).toBeCalledWith('https://yesno.wtf/api');
  });

  it('shows loading message', async () => {
    fetchSpy.mockImplementation(noop);
    const wrapper = mount(FetchOnMounted);
    expect(wrapper.text()).toContain('loading');
  });

  it('shows image once fetch is completed', async () => {
    fetchSpy.mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve({ image: 'test' });
        },
      })
    );
    const wrapper = mount(FetchOnMounted);

    // Wait until the DOM updates.
    await flushPromises();
    const img = wrapper.find('img');
    expect(img.attributes('src')).toBe('test');
    expect(wrapper.text()).not.toContain('loading');
  });

  it('shows error on fetch not ok', async () => {
    fetchSpy.mockResolvedValue({ ok: false });
    const wrapper = mount(FetchOnMounted);

    // Wait until the DOM updates.
    await flushPromises();
    expect(wrapper.text()).toContain('error'); // DONE, GOOD?
  });

  it('shows error on fetch error', async () => {
    fetchSpy.mockRejectedValue(new Error('reasons'));
    const wrapper = mount(FetchOnMounted);

    // Wait until the DOM updates.
    await flushPromises();
    expect(wrapper.text()).toContain('error');  // DONE, GOOD?
  });
});
