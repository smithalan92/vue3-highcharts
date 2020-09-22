<template>
  <div class="chart-demo">
    <div class="chart-demo__title">
      Reactive Chart Example
    </div>
    <div class="chart-demo__content">
      <vue-highcharts
        type="chart"
        :options="chartOptions"
        :redrawOnUpdate="true"
        :oneToOneUpdate="false"
        :animateOnUpdate="true"
        @update="onUpdate"/>
      <code-block :code="codeSample"/>
    </div>
    <button
      class="add-buton"
      @click="addCategoryAndSeries">
      Add data
    </button>
  </div>
</template>
<script>
import useChartData from '@/useChartData';
import codeSample from '@/code/ReactiveChartCodeSample';
import CodeBlock from './CodeBlock.vue';
import VueHighcharts from '../../../src/index';

const remainingMonths = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept'];

export default {
  name: 'ReactiveChart',

  components: {
    VueHighcharts,
    CodeBlock,
  },

  setup() {
    const {
      chartOptions,
      seriesData,
      onUpdate,
      categories,
    } = useChartData();

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
      codeSample,
    };
  },
};
</script>
<style scoped>
.add-buton {
  width: 100px
}
</style>
