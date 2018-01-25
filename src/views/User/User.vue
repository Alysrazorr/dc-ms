<template>
  <div>
    <a href="javascript:;" @click="search">查询</a>
    <a href="javascript:;" @click="search2">查询</a>
  </div>
</template>

<script>
import menu from '../../store/menu'
import userApi from '../../apis/user'
export default {
  name: 'User',
  methods: {
    search: function() {
      this.$http.get(userApi.getMenus, {
        param: {
          id: '123'
        }
      }).then(function(resp) {
        console.log(resp.data)
        menu.commit('init', resp.data.data)
      })
    },
    search2: function() {
      this.$http.post(userApi.getMenus).then(function(resp) {
        console.log(resp.data)
        menu.commit('init', resp.data.data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
