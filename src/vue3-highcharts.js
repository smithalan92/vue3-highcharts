/* eslint-disable func-names */
/* eslint-disable prefer-rest-params */
import { defineComponent, h, ref, onMounted, onUnmounted, watch, toRefs } from 'vue';
import Highcharts from 'highcharts';

const vueHighcharts = defineComponent({
  name: 'VueHighchart',
  props: {
    type: {
      type: String,
      default: 'chart',
    },

    options: {
      type: Object,
      required: true,
    },

    redrawOnUpdate: {
      type: Boolean,
      default: true,
    },

    oneToOneUpdate: {
      type: Boolean,
      default: false,
    },

    animateOnUpdate: {
      type: Boolean,
      default: true,
    },
  },

  setup(props, { emit }) {
    const chartRef = ref(null);
    const chart = ref(null);

    const { options } = toRefs(props);

    if (options.value && Highcharts[props.type]) {
      watch(options, (newValue) => {
        if (chart.value) {
          chart.value.update(newValue, props.redrawOnUpdate, props.oneToOneOnUpdate, props.animateOnUpdate);
          emit('updated');
        }
      }, { deep: true });

      onMounted(() => {
        chart.value = Highcharts[props.type](chartRef.value, options.value, () => {
          emit('rendered');
        });
      });

      onUnmounted(() => {
        if (chart.value) chart.value.destroy();
        emit('destroyed');
      });
    } else if (!props.options) {
      console.warn('The "options" parameter is required.');
    } else {
      console.warn(`${props.type} is not a valid highcharts type or has not been imported`);
    }

    // Rather than returning a render function here. We'll return the chart ref and highcharts
    // instance so there exposed.
    return {
      chartRef,
      chart,
    };
  },

  render() {
    return h('div', {
      class: 'vue-highcharts',
      ref: 'chartRef',
    });
  },
});

export default vueHighcharts;
