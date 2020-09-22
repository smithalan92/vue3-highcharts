import Vue3Highcharts from './vue3-highcharts';

const install = (app) => {
  app.component(Vue3Highcharts.name, Vue3Highcharts);
};

Vue3Highcharts.install = install;

export default Vue3Highcharts;
