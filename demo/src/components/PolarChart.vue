<template>
  <div class="chart-demo">
    <div class="chart-demo__title">
      Polar Chart Example
    </div>
    <div class="chart-demo__content">
      <vue-highcharts
        type="chart"
        :options="chartOptions"
        :redrawOnUpdate="true"
        :oneToOneUpdate="false"
        :animateOnUpdate="true"/>
      <code-block :code="codeSample"/>
    </div>
  </div>
</template>
<script>
import codeSample from '@/code/PolarChartCodeSample';
import HighCharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import CodeBlock from './CodeBlock.vue';

import VueHighcharts from '../../../src/index';

HighchartsMore(HighCharts);

export default {
  name: 'SimpleChart',

  components: {
    VueHighcharts,
    CodeBlock,
  },

  setup() {
    const chartOptions = {
      chart: {
        polar: true,
      },
      title: {
        text: 'Highcharts Polar Chart',
      },
      pane: {
        startAngle: 0,
        endAngle: 360,
      },
      xAxis: {
        tickInterval: 45,
        min: 0,
        max: 360,
        labels: {
          format: '{value}°',
        },
      },
      yAxis: {
        min: 0,
      },
      plotOptions: {
        series: {
          pointStart: 0,
          pointInterval: 45,
        },
        column: {
          pointPadding: 0,
          groupPadding: 0,
        },
      },
      series: [{
        type: 'column',
        name: 'Column',
        data: [8, 7, 6, 5, 4, 3, 2, 1],
        pointPlacement: 'between',
      }, {
        type: 'line',
        name: 'Line',
        data: [1, 2, 3, 4, 5, 6, 7, 8],
      }, {
        type: 'area',
        name: 'Area',
        data: [1, 8, 2, 7, 3, 6, 4, 5],
      }],
    };

    return {
      chartOptions,
      codeSample,
    };
  },
};
</script>
