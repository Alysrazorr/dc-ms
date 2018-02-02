<template>
  <div>
    <tree id="leftTree" v-if="treeData" :model="treeData"/>
    <button class="aface button grass" @click="refresh">加载</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: function() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      treeData: 'auth/organization/getTreeData'
    })
  },
  methods: {
    refresh: function() {
      this.$store.dispatch('auth/organization/getTreeByParentCode')
    }
  },
  created: function() {
    this.refresh()
  }
}
</script>

<style lang="scss" scoped>
#leftTree {
  float: left;
  margin-top: 20px;
  margin-left: 40px;
  margin-right: 40px;
}
</style>
