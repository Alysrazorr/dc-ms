import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  toggled: false
}

const mutations = {
  toggle: function(state) {
    state.toggled = !state.toggled
  }
}

export default new Vuex.Store({
  state, mutations
})
