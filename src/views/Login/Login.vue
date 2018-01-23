<template>
<div>
  <div id="login-form-container">
    <span class="section">系统登录</span>
    <span class="section">
      <i class="fa fa-user"></i>
    </span>
    <input v-model="ac"/>
    <input v-model="pw"/>
  </div>
  <a href="javascript:;" @click="login">Login</a>
  <a href="javascript:;" @click="logout">Logout</a>
</div>
</template>

<script>
import security from '../../store/security'
export default {
  name: 'Login',
  data: function() {
    return {
      ac: null,
      pw: null
    }
  },
  methods: {
    login: function() {
      this.$http.get('/security/login', {
        params: {
          ac: this.$data.ac,
          pw: this.$data.pw
        }
      }).then(function(resp) {
        security.commit('login', resp.data.data)
      })
    },
    logout: function() {
      this.$http.get('/security/logout').then()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/global.scss";
div#login-form-container {
  height: 400px;
  width: 600px;
  margin: 0 auto;
  margin-top: 100px;
  background-color: $color-3;
  box-shadow: 0 0 0 4px rgba($color-0, 0.2);
  padding: 20px;

  &>span.section {
    display: block;
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    color: $color-a;
    text-shadow: 2px 2px $color-0;
  }
}
</style>
