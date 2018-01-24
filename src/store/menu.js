import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  menu: null
}

const mutations = {
  init: function(state, menus) {
    Object.keys(menus).forEach(menu => {
      console.log(menu)
    })
  }
}

export default new Vuex.Store({
  state, mutations
})
