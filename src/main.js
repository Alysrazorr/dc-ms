import Vue from 'vue'
import App from './App'
import axios from './axios'
import router from './router'
import tree from '@/components/tree/root'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$a2t = function(array, idKey, pIdKey, nameKey) {
  array.sort(function(a, b) {
    return a[idKey] - b[idKey]
  })
  var children = {}
  var obj
  for (var l = array.length - 1; l > -1; l--) {
    obj = array[l]
    obj.name = obj[nameKey]
    if (children[obj[idKey]]) {
      obj.children = children[obj[idKey]]
    }
    if (obj[pIdKey]) {
      if (!children[obj[pIdKey]]) {
        children[obj[pIdKey]] = []
      }
      children[obj[pIdKey]].push(JSON.parse(JSON.stringify(obj)))
      array.splice(l, 1)
    }
  }
  return array
}
Vue.component('tree', tree)

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
