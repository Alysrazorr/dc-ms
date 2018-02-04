const state = {
  token: null,
  menus: null
}

const mutations = {
  setToken: (state, token) => {
    window.sessionStorage.token = token
    state.token = token
  },
  clearToken: (state) => {
    window.sessionStorage.removeItem('token')
    state.token = null
  },
  setMenus: (state, menus) => {
    window.sessionStorage.menus = menus
    state.menus = menus
  },
  clearMenus: () => {
    window.sessionStorage.removeItem('menus')
    state.menus = null
  }
}

const actions = {}

const getters = {}

const modules = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
  modules
}
