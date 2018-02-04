<template>
  <div>
    <div id="leftTree" class="aface panel">
      <div class="body">
        <tree v-if="treeData" :model="treeData"/>
      </div>
    </div>
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
      treeData: 'urlPermission/getTreeData'
    })
  },
  methods: {
    refresh: function() {
      this.$store.dispatch('urlPermission/getTreeByParentCode')
    }
  },
  created: function() {
    this.refresh()
  }
}
</script>

<style lang="scss" scoped>
$box-shadow: 4px 4px 10px $color-0;

#leftTree {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 300px;
  bottom: 20px;
  box-shadow: $box-shadow;
}
</style>
