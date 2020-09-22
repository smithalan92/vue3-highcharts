module.exports = {
  configureWebpack: {
    externals: {
      highcharts: {
        root: 'Highcharts',
        commonjs: 'highcharts',
        commonjs2: 'highcharts',
      },
    },
  },
};
