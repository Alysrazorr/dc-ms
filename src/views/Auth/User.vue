<template>
  <div>
    <a href="javascript:;" @click="search">查询</a>
    <a href="javascript:;" @click="search2">查询</a>
  </div>
</template>

<script>
import userApi from '../../api/auth/user'

export default {
  name: 'user',
  methods: {
    search: function() {
      this.$http.get(userApi.getMenus, {
        param: {
          id: '123'
        }
      }).then(function(resp) {
      })
    },
    search2: function() {
      this.$http.post(userApi.getMenus).then(function(resp) {
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
