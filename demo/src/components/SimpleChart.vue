<template>
  <div class="chart-demo">
    <div class="chart-demo__title">
      Basic Example
    </div>
    <div class="chart-demo__content">
      <vue-highcharts
        type="chart"
        :options="chartOptions"
        :redrawOnUpdate="true"
        :oneToOneUpdate="false"
        :animateOnUpdate="true"
        @rendered="onRender"/>
      <code-block :code="codeSample"/>
    </div>
  </div>
</template>
<script>
import useChartData from '@/useChartData';
import codeSample from '@/code/SimpleChartCodeSample';
import CodeBlock from './CodeBlock.vue';
import VueHighcharts from '../../../src/index';

export default {
  name: 'SimpleChart',

  components: {
    VueHighcharts,
    CodeBlock,
  },

  setup() {
    const {
      chartOptions,
      onRender,
    } = useChartData();

    return {
      chartOptions,
      onRender,
      codeSample,
    };
  },
};
</script>
