import Vue from 'vue';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInfoCircle,
  faPlay,
  faTimes,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import store from './store';
import App from './App.vue';

declare global {
  interface Window {
    Pusher: Pusher;
    Echo: Echo;
  }
}

window.Pusher = require('pusher-js');

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: process.env.VUE_APP_PUSHER_APP_KEY,
  cluster: process.env.VUE_APP_PUSHER_APP_CLUSTER,
  wsHost: process.env.VUE_APP_PUSHER_WSHOST,
  wsPort: process.env.VUE_APP_PUSHER_WSPORT,
  forceTLS: false,
  enabledTransports: ['ws'],
});

library.add(faPlay);
library.add(faTimes);
library.add(faTrophy);
library.add(faInfoCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(ElementUI, { locale });

axios.defaults.headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
