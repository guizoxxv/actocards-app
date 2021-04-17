import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import store from './store';
import App from './App.vue';

library.add(faPlay);
library.add(faTimes);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(ElementUI);

axios.defaults.headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
