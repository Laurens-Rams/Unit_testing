import { expect, it, describe, vi, afterEach, beforeEach } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils';
import SuspenseDummyWrapper from './SuspenseDummyWrapper.vue';
import FetchSuspense from './FetchSuspense.vue';

const noop = () => {};
// TODO: complete the test suite for this component!
describe('FetchSuspense.vue', async () => {
  const fetchSpy = vi.fn(); // vite function that will spy and mock // not function that will run testing
  vi.stubGlobal('fetch', fetchSpy); // engine stub a global by fetchSpy
  // vi.spyON(window, 'setInterval')

  beforeEach(() => {
    vi.resetAllMocks();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('renders correctly', () => {
    const fetchSpy = vi.fn(); // vite function that will spy and mock
    vi.stubGlobal('fetch', fetchSpy);
    fetchSpy.mockImplementation();
    const wrapper = mount(FetchSuspense);
    expect(wrapper.exists()).toBe(true);
  });

  it('calls fetch API', () => {
  });

  it('throws error on fetch not ok', () => {});

  it('throws error on fetch error', () => {});

  it('shows image once fetch is completed', () => {});
  fetchSpy.mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => {
        return Promise.resolve({ image: 'test' });
      },
    })
  );
  const wrapper = mount(SuspenseDummyWrapper);
  // Wait until the DOM updates.
  await flushPromises();
  const img = wrapper.find('img');
  expect(img.attributes('src')).toBe('test');
});
