import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import collectionUtils from '@/utils/collection'
import api from '@/api/auth/urlPermission'

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
    axios.get(api.getTreeByParentCode).then((resp) => {
      commit('setTreeData', collectionUtils.a2t(resp.data.data))
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
