import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
// import collectionUtils from '@/utils/collection'

Vue.use(Vuex)

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
    var self = this
    self.$http.get(self.$api.getTreeByParentCode).then((resp) => {
      commit('setTreeData', self.$a2t(resp.data.data))
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
