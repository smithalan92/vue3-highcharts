# Vue 3 - Highcharts JS

A simple, fast, Vue 3 component for rendering Highcharts.js Charts written using the composition API.

Demos [https://smithalan92.github.io/vue3-highcharts/](https://smithalan92.github.io/vue3-highcharts/)

## Minimum Requirements 

Vue@3.0.0
Highcharts@8.0.0 ( older versions may work but not tested )

Vue and Highcharts are not bundled with the module and need to be included in your projects dependencies.

## Usage
Install with npm

```
npm i --save vue3-highcharts
```

You can register the component in 2 ways. 

### Register as a global component.
```js
import { createApp } from 'vue';
import VueHighcharts from 'vue3-highcharts';

const app = createApp(..options);
app.use(VueHighcharts);
```

### Register as a local component
```js
import VueHighcharts from 'vue3-highcharts';

export default {
  name: 'MyChart',
  components: {
    VueHighcharts,
  },
};
```

### Props
The following props can be passed to the component. Options is the only required one.

| Name | Type | Required | Default | Notes |
|---------|-------|------| ------- | ----- |
| type | String | no | 'chart' | This should be the constructor type you'd use with highcharts. If you import the stock chat, you can pass 'stockChart' as this option for example.
options | Object | yes | - |This should be a [Highcharts chart options](https://api.highcharts.com/highcharts/) object
redrawOnUpdate | Boolean | no | true | If the chart should be redrawn when options update.
oneToOneUpdate | Boolean | no | false| If the certain collections should be updated one to one. See [here](https://api.highcharts.com/class-reference/Highcharts.Chart#update).
animateOnUpdate | Boolean | no | true | If the redraw should be animated.

---

### Events
The following events are emitted from the component. No data is provided with any event.
| Name | Notes |
| ---- | ----- |
| rendered | Emitted when the chart has been rendered on the dom |
| updated  | Emitted when the chart options have been updated and the chart has been updated |
| destroyed | Emitted when the Highcharts chart instance has been destroyed ( happens when the component unmounts )


---
---
The Highcharts chart object is also exposed on the component instance as `chart`

A wrapper div is also created with a `.vue-highcharts` class around the actual chart.

### Simple Example

```html
<template>
  <vue-highcharts
    type="chart"
    :options="chartOptions"
    :redrawOnUpdate="true"
    :oneToOneUpdate="false"
    :animateOnUpdate="true"
    @rendered="onRender"
    @update="onUpdate"
    @destroy="onDestroy"/>
<template>
```
```js
<script>
import { ref } from 'vue';

export default {
  name: 'chart'
  setup() {
    const data = ref([1, 2, 3])
    const chartData = computed(() =>{
      return {
        series: [{
          name: 'Test Series',
          data: data.value,
        }],
      }
    });

    const onRender = () => {
      console.log('Chart rendered');
    };

    const onUpdate = () => {
      console.log('Chart updated');
    };

    const onDestroy = () => {
      console.log('Chart destroyed');
    };

    return {
      chartData,
      onRender,
      onUpdate,
      onDestroy,
    };
  }
}
</script>
```
```css
<style>
.vue-highcharts {
  width: 100%;
}
</style>
```

### Using Stock/Map charts
To use the stock map charts, you need to import and register them. For example, to use the map chart

```js
import HighCharts from 'highcharts';
import useMapCharts from 'highcharts/modules/map';

useMapCharts(HighCharts);
```

```html
<template>
  <vue-highcharts type="mapChart" :options="chartOptions"/>
```

### Local Dev Issues.
Since Vue and Highcharts are not bundled with the module, you may need to add some webpack aliases.

For example, the following needs to be added when using vue-cli to vue.config.js

```js
const path = require('path');
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('vue$', path.join(__dirname, 'node_modules/vue'));
    config.resolve.alias.set('highcharts$', path.join(__dirname, 'node_modules/highcharts'));
  },
};
```

### License
See [License.md](./LICENSE.md)