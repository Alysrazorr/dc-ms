import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router/router'
import store from './store/store'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
