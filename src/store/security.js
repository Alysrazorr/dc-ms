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
    localStorage.token = token
    state.token = token
  },
  logout: (state) => {
    localStorage.removeItem('token')
    state.token = null
  }
}

export default new Vuex.Store({
  state, mutations
})
