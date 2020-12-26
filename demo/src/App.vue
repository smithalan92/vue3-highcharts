<template>
  <div class="header">
    <h1>Vue3 Highcharts</h1>
    <h3>
      <a
        href="https://github.com/smithalan92/vue3-highcharts"
        target="_blank">
        github.com/smithalan92/vue3-highcharts
      </a>
    </h3>
  </div>
  <div class="container">
    <div class="container__item">
      <SimpleChart/>
    </div>
    <div class="container__item">
      <ReactiveChart/>
    </div>
    <div class="container__item">
      <StockChart/>
    </div>
    <div class="container__item">
      <PolarChart/>
    </div>
    <div class="container__item">
      <MapChart/>
    </div>
  </div>
</template>

<script>
import SimpleChart from '@/components/SimpleChart.vue';
import ReactiveChart from '@/components/ReactiveChart.vue';
import StockChart from '@/components/StockChart.vue';
import MapChart from '@/components/MapChart.vue';
import PolarChart from '@/components/PolarChart.vue';

export default {
  name: 'App',
  components: {
    SimpleChart,
    ReactiveChart,
    StockChart,
    MapChart,
    PolarChart,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 12px;
}

.container {
  display: flex;
  flex-direction: column;
  padding: 0 24px;
}

.container__item {
  padding: 12px;
  width: 100%;
  margin-top: 24px;
}

.chart-demo {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 400px;
}

.chart-demo__title {
  margin: 8px 0;
  font-size: 24px;
  font-weight: 600;
}

.chart-demo__content {
  display: flex;
  width: 100%;
  overflow: hidden;
}

.chart-demo .vue-highcharts {
  margin-right: 20px;
  width: 100%;
}
</style>
