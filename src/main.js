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
import modal from '@/components/modal'
import errorBox from '@/components/messageBoxes/errorBox'
import infoBox from '@/components/messageBoxes/infoBox'
import successBox from '@/components/messageBoxes/successBox'
import questionBox from '@/components/messageBoxes/questionBox'
import warningBox from '@/components/messageBoxes/warningBox'

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
Vue.component('modal', modal)
Vue.component('errorBox', errorBox)
Vue.component('infoBox', infoBox)
Vue.component('successBox', successBox)
Vue.component('questionBox', questionBox)
Vue.component('warningBox', warningBox)

/* eslint-disable */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
