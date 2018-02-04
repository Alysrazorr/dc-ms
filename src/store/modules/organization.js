const state = {
  treeData: {
    name: '平台权限管理',
    children: []
  }
}

const mutations = {
  setTreeData: (state, data) => {
    state.treeData.children = data
  }
}

const actions = {
  getTreeByParentCode: function({ commit }) {
    var _vm = this._vm
    _vm.$http.get(_vm.$api.organization.getTreeByParentCode).then((resp) => {
      commit('setTreeData', _vm.$a2t(resp.data.data))
    })
  }
}

const getters = {
  getTreeData: state => state.treeData
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
