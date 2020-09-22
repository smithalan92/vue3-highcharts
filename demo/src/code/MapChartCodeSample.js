export default `
<template>
  <vue-highcharts
    type="chart"
    :options="chartOptions"
    :redrawOnUpdate="true"
    :oneToOneUpdate="false"
    :animateOnUpdate="true"
    @updated="onUpdated"/>
</template>
<script>
  import VueHighcharts from 'vue3-highcharts';
  import HighCharts from 'highcharts';
  import MapCharts from 'highcharts/modules/map';
  import euMap from '@highcharts/map-collection/custom/european-union.geo.json';

  MapCharts(HighCharts);

  export default {
    name: 'MapChart',

    components: {
      VueHighcharts,
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
`;
