import Vue from 'vue'
import App from './app'

import http from './utils/http';
import router from './router';
// import store from './store/index';

Vue.prototype.http = http;
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(z, 'Z')

new Vue({
  el: '#app',
  http,
  router,
  render: h => h(App)
})