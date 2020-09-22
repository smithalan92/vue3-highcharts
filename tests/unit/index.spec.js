import { mount } from '@vue/test-utils';
import VueHighchart from '@/index';
import { wrap } from 'highcharts';

const defaultOptions = {
  series: [{
    name: 'Test Series',
    data: [1, 2, 3],
  }],
};

describe('VueHighchart', () => {
  describe('Plugin', () => {
    it('should install when used as a plugin', () => {
      const componentStub = jest.fn();

      const appMock = {
        component: componentStub,
      };

      expect(VueHighchart).toHaveProperty('install');

      VueHighchart.install(appMock);

      expect(componentStub).toHaveBeenCalledWith(VueHighchart.name, VueHighchart);
    });
  });

  describe('Component', () => {
    let wrapper = null;

    afterEach(() => {
      if (wrapper) {
        wrapper.unmount();
        wrapper = null;
      }
    });

    it('should have the correct props', () => {
      wrapper = mount(VueHighchart, {
        props: {
          options: { ...defaultOptions },
        },
      });

      expect(wrapper.props()).toEqual({
        type: 'chart',
        options: { ...defaultOptions },
        redrawOnUpdate: true,
        oneToOneUpdate: false,
        animateOnUpdate: true,
      });
    });

    it('should expose the rendered highcharts instance', () => {
      wrapper = mount(VueHighchart, {
        props: {
          options: { ...defaultOptions },
        },
      });

      expect(wrapper.vm.chart).toBeDefined();
    });

    it('should render a highchart chart with the expected data', () => {
      wrapper = mount(VueHighchart, {
        props: {
          options: { ...defaultOptions },
        },
      });

      const { vm } = wrapper;

      expect(wrapper.get('.vue-highcharts')).toBeTruthy();
      expect(wrapper.get('.highcharts-container')).toBeTruthy();

      expect(vm.chart.series[0].yData).toEqual(wrapper.props().options.series[0].data);
      expect(vm.chart.series[0].name).toEqual(wrapper.props().options.series[0].name);
    });

    it('should emit a rendered event when the chart is rendered', () => {
      wrapper = mount(VueHighchart, {
        props: {
          options: { ...defaultOptions },
        },
      });

      expect(wrapper.emitted()).toHaveProperty('rendered');
    });

    it('should emit an updated event when the chart is updated due to options changes', async () => {
      const options = { ...defaultOptions };

      wrapper = mount(VueHighchart, {
        props: {
          options,
        },
      });

      expect(wrapper.get('.highcharts-container')).toBeTruthy();

      await wrapper.setProps({
        options: {
          series: [{
            name: 'Test Series 2',
            data: [1, 2, 3, 4],
          }],
        },
      });

      expect(wrapper.emitted()).toHaveProperty('updated');
    });

    it('should emit a destroyed event when the highcharts instance is destroyed', async () => {
      const options = { ...defaultOptions };

      wrapper = mount(VueHighchart, {
        props: {
          options,
        },
      });

      expect(wrapper.get('.highcharts-container')).toBeTruthy();

      wrapper.unmount();

      expect(wrapper.emitted()).toHaveProperty('destroyed');
    });
  });
});
