<template>
  <div>    
    <tree id="leftTree" v-if="getTreeData" :model="getTreeData"/>
    <button class="aface button grass" @click="refresh">加载</button>
  </div>
</template>

<script>
import api from '@/api/auth/urlPermission'
import store from '@/store/auth/urlPermission'

export default {
  data: function() {
    return {
      treeData: store.state.treeData
    }
  },
  computed: {
    getTreeData: function() {
      return store.state.treeData
    }
  },
  methods: {
    refresh: function() {
      this.$http.get(api.getTreeByParentCode).then((resp) => {
        store.commit('setTreeData', {
          name: '系统权限管理',
          children: this.$a2t(resp.data.data, 'p_code', 'p_parentCode', 'p_name')
        })
      })
    }
  },
  mounted: function() {
    this.$nextTick(() => {
      this.$http.get(api.getTreeByParentCode).then((resp) => {
        store.commit('setTreeData', {
          name: '系统权限管理',
          children: this.$a2t(resp.data.data, 'p_code', 'p_parentCode', 'p_name')
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
#leftTree {
  float: left;
  margin-top: 20px;
  margin-left: 40px !important;
}
</style>
