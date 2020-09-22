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

  const remainingMonths = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept'];

  export default {
    name: 'ReactiveChart',

    components: {
      VueHighcharts,
    },

    setup() {
      const seriesData = ref([25, 39, 30, 15]);
      const categories = ref(['Jun', 'Jul', 'Aug', 'Sept']);

      const chartOptions = computed(() => ({
        chart: {
          type: 'line',
        },
        title: {
          text: 'Number of project stars',
        },
        xAxis: {
          categories: categories.value,
        },
        yAxis: {
          title: {
            text: 'Number of stars',
          },
        },
        series: [{
          name: 'New project stars',
          data: seriesData.value,
        }],
      }));

      const onUpdate = () => {
        console.log('Chart updated');
      };

      let startingNumber = 20;
      let currentMonth = 0;

      const addCategoryAndSeries = () => {
        categories.value.push(remainingMonths[currentMonth]);
        seriesData.value.push(startingNumber);
        startingNumber += 5;
        currentMonth += 1;

        if (currentMonth === remainingMonths.length) {
          currentMonth = 0;
        }
      };

      return {
        chartOptions,
        onUpdate,
        addCategoryAndSeries,
      };
    },
  };
</script>
`;
