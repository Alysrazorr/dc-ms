<template>
<div id="login">
  <a href="javascript:;" @click="login">Login</a>
  <a href="javascript:;" @click="logout">Logout</a>
</div>
</template>

<script>
export default {
  name: 'Login',
  data: function() {
    return {
      isLogined: this.$store.state.count
    }
  },
  methods: {
    login: function() {
      this.$axios.get('http://192.168.199.233:9080/dc-ms/security/login', {
        params: {
          ac: 'admin',
          pw: 'admin123'
        }
      }).then(function(resp) {
        console.log(resp)
      })
    },
    logout: function() {
      this.$axios.get('http://192.168.199.233:9080/dc-ms/security/logout').then()
    }
  }
}
</script>

<style lang="scss" scoped>
#login {
  position: absolute;
  font-size: 16px;
}
</style>
