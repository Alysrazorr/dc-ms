import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  token: null
}

// const actions = {
//   login: ({commit}, token) => {
//   }
// }

const mutations = {
  login: (state, token) => {
    window.sessionStorage.token = token
    state.token = token
  },
  logout: (state) => {
    window.sessionStorage.removeItem('token')
    state.token = null
  }
}

export default new Vuex.Store({
  state, mutations
})
