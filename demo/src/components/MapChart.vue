<template>
  <div class="chart-demo">
    <div class="chart-demo__title">
      Map Chart Example
    </div>
    <div class="chart-demo__content">
      <vue-highcharts
        type="mapChart"
        :options="chartOptions"
        :redrawOnUpdate="true"
        :oneToOneUpdate="false"
        :animateOnUpdate="true"/>
      <code-block :code="codeSample"/>
    </div>
  </div>
</template>
<script>
import codeSample from '@/code/MapChartCodeSample';
import HighCharts from 'highcharts';
import MapCharts from 'highcharts/modules/map';
import euMap from '@highcharts/map-collection/custom/european-union.geo.json';
import VueHighcharts from '../../../src/index';
import CodeBlock from './CodeBlock.vue';

MapCharts(HighCharts);

export default {
  name: 'SimpleChart',

  components: {
    VueHighcharts,
    CodeBlock,
  },

  setup() {
    const chartOptions = {
      chart: {
        map: euMap,
      },

      title: {
        text: 'Map of EU with Ireland',
      },

      legend: {
        enabled: false,
      },

      series: [{
        name: 'Country',
        data: [
          ['ie', 1],
        ],
        dataLabels: {
          enabled: true,
          color: '#FFFFFF',
          formatter() {
            if (this.point.value) {
              return this.point.name;
            }
            return '';
          },
        },
        tooltip: {
          headerFormat: '',
          pointFormat: '{point.name}',
        },
      }],
    };

    return {
      chartOptions,
      codeSample,
    };
  },
};
</script>
