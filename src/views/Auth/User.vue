<template>
  <div>
    <a href="javascript:;" @click="search">查询</a>
  </div>
</template>

<script>
export default {
  name: 'user',
  methods: {
    search: function() {
      var _vm = this
      _vm.$http.get(_vm.$api.user.getMenus, {
        param: {
          id: '123'
        }
      }).then(function(resp) {
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
