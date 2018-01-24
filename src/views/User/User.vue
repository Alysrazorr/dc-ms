<template>
  <div>
    <a href="javascript:;" @click="search">查询</a>
  </div>
</template>

<script>
import menu from '../../store/menu'
import userApi from '../../apis/user'
export default {
  name: 'User',
  methods: {
    search: function() {
      this.$http.get(userApi.getMenu).then(function(resp) {
        console.log(resp.data)
        menu.commit('init', resp.data.data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
