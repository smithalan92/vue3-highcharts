/* eslint-disable func-names */
/* eslint-disable prefer-rest-params */
import { h, ref, watch, onMounted, onUnmounted, defineComponent, toRefs } from 'vue';
import Highcharts from 'highcharts';

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'chart',
    },
    options: {
      type: Object,
      required: true,
    },
  },

  setup(props, { emit }) {
    const chartRef = ref(null);

    const { options } = toRefs(props);

    if (options.value && Highcharts[props.constructorType]) {
      const chart = ref(null);

      watch(options, (newValue) => {
        if (chart.value) {
          chart.value.update(newValue, ...props.updateArgs);
          emit('updated');
        }
      });

      onMounted(() => {
        chart.value = Highcharts[props.constructorType](chartRef.value, options.value, () => {
          emit('rendered');
        });
      });

      onUnmounted(() => {
        if (chart.value) chart.value.destroy();
        emit('destroyed');
      });

      return () => h('div', {
        class: 'vue3-highcharts',
        ref: chartRef,
      });
    }

    if (!props.options) {
      console.warn('The "options" parameter is required.');
    } else {
      console.warn(`${props.constructorType} is not a valid highcharts type`);
    }

    return () => h();
  },
});
