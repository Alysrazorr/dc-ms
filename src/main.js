import Vue from 'vue'
import App from './App'
import axios from './axios'
import store from './store'
import router from './router'
import collectionUtils from './utils/collection'
import objectUtils from './utils/object'
import api from './api'

import tree from '@/components/tree'
import datagrid from '@/components/datagrid'
import iconPanel from '@/components/panel/icon'
import textbox from '@/components/form/textbox'
import dropbox from '@/components/form/dropbox'
import checkbox from '@/components/form/checkbox'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$a2t = collectionUtils.a2t
Vue.prototype.$extendObj = objectUtils.extend
Vue.prototype.$isPlainObj = objectUtils.isPlainObject
Vue.prototype.$isEmptyObj = objectUtils.isEmptyObject
Vue.prototype.$api = api

Vue.component('tree', tree)
Vue.component('datagrid', datagrid)
Vue.component('iconPanel', iconPanel)
Vue.component('textbox', textbox)
Vue.component('dropbox', dropbox)
Vue.component('checkbox', checkbox)

/* eslint-disable */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
