import Vue from 'vue'
import App from './App'
import axios from './axios'
import store from './store'
import router from './router'
import collection from './utils/collection'
import api from './api'
import tree from '@/components/tree/root'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$a2t = collection.a2t
Vue.prototype.$api = api
Vue.component('tree', tree)

/* eslint-disable */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
