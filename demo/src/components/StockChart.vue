<template>
  <div class="chart-demo">
    <div class="chart-demo__title">
      Stock Chart Example
    </div>
    <div class="chart-demo__content">
      <vue-highcharts
        type="stockChart"
        :options="chartOptions"
        :redrawOnUpdate="true"
        :oneToOneUpdate="false"
        :animateOnUpdate="true"/>
      <code-block :code="codeSample"/>
    </div>
  </div>
</template>
<script>
import codeSample from '@/code/StockChartCodeSample';
import HighCharts from 'highcharts';
import StockCharts from 'highcharts/modules/stock';
import CodeBlock from './CodeBlock.vue';
import VueHighcharts from '../../../src/index';

StockCharts(HighCharts);

export default {
  name: 'SimpleChart',

  components: {
    VueHighcharts,
    CodeBlock,
  },

  setup() {
    const chartOptions = {
      rangeSelector: {
        selected: 1,
      },

      title: {
        text: 'Stock Prices',
      },
      series: [
        {
          name: 'MyStock',
          data: [
            [1537795800000, 55.2],
            [1537882200000, 55.55],
            [1537968600000, 55.1],
            [1538055000000, 56.24],
            [1538141400000, 56.44],
            [1538400600000, 56.81],
            [1538487000000, 57.32],
            [1538573400000, 58.02],
            [1538659800000, 57]],
        },
      ],
    };

    return {
      chartOptions,
      codeSample,
    };
  },
};
</script>
