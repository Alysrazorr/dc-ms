import Vue from 'vue'
import App from './App'
import axios from './axios'
import router from './router/router'
import store from './store/store'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
