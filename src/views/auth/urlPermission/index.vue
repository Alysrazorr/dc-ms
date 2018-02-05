<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-3">
          <div class="aface panel" style="height: 900px;">
            <div class="body">
              <tree v-if="treeData" :model="treeData"/>
            </div>
          </div>
        </div>
        <div class="col-9">
          <div class="aface panel" style="height: 900px;">
            <div class="body">
              <tree v-if="treeData" :model="treeData"/>
            </div>
          </div>
        </div>
      </div>
    </div>
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

</style>
