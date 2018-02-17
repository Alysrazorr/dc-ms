const state = {
  token: null,
  menus: null
}

const mutations = {
  setToken: (state, token) => {
    window.sessionStorage.setItem('token', token)
    state.token = token
  },
  clearToken: (state) => {
    window.sessionStorage.removeItem('token')
    state.token = null
  },
  setMenus: (state, menus) => {
    window.sessionStorage.setItem('menus', menus)
    state.menus = menus
  },
  clearMenus: () => {
    window.sessionStorage.removeItem('menus')
    state.menus = null
  }
}

const actions = {}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
