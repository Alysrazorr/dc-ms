import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  treeData: {
    name: '系统权限管理',
    children: []
  }
}

const mutations = {
  setTreeData: function(state, data) {
    state.treeData = data
  },
  clearTreeData: function(state) {
    state.treeData = null
  }
}

export default new Vuex.Store({
  state, mutations
})
