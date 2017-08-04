// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
//
///*css and js import*/
//require('./dist/css/GE.css');
//require('./dist/css/index.css')
//import MoblieUtil from './dist/js/moblieUtil.js'

Vue.prototype.$ajax = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
