import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import store from './store';
import App from './App.vue';

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
