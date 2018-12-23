import Vue from 'vue';
import App from './App.vue';
import { createStore } from './store';

Vue.config.productionTip = false;

new Vue({
  store: createStore(),
  render: h => h(App),
}).$mount('#app');
