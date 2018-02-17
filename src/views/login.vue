<template>
  <table>
    <tbody>
      <tr>
        <td id="logo">
          <strong>数据中心</strong>
          <br />
          <small>DataCenter</small>
        </td>
        <td id="form">
          <div id="login-form-container">
            <span class="section title">系统登录</span>
            <br />
            <span class="section input">
              <textbox ref="ac" :label="'账号'" :onPressEnter="login"/>
            </span>
            <br />
            <span class="section input">
              <textbox ref="pw" :label="'密码'" :onPressEnter="login"/>
            </span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  methods: {
    login: function() {
      var _vm = this
      _vm.$http.get(_vm.$api.auth.login, {
        params: {
          ac: _vm.$refs.ac.getValue(),
          pw: _vm.$refs.pw.getValue()
        }
      }).then(resp => {
        _vm.$store.commit('auth/setToken', resp.data.data)
        _vm.$router.push('/dashboard')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$section-size: 50px;

table {
  width: 100%;
  height: 100%;
}
td#logo {
  width: 55%;
  text-align: right;
  padding-right: 50px;
  font-size: 70px;
  text-shadow: 2px 2px 4px $color-0;
  &>* {
    color: $color-orange !important;
  }
}
td#form {
  text-align: left;
}
div#login-form-container {
  width: 400px;
  border-left: solid 2px lighten($color-steel, 10%);
  padding: 60px 20px;
  padding-bottom: 100px;

  &>span.section {
    position: relative;
    display: block;
    font: {
      size: 40px;
      family: 'simhei';
    }
    &.title {
      text-shadow: 2px 2px $color-0;
    }
  }
}
</style>
