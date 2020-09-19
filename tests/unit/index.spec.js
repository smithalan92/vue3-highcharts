import { shallowMount } from '@vue/test-utils';
import Chart from '@/index';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Chart, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
