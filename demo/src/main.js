import { createApp } from 'vue';
import hljs from 'highlight.js/lib/core';
import hljsDefineVue from 'highlightjs-vue';

import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import App from './App.vue';

import 'highlight.js/styles/paraiso-dark.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);

hljsDefineVue(hljs);

createApp(App).mount('#app');
