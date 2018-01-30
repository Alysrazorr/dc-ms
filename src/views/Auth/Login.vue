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
            <span class="section">系统登录</span>
            <br />
            <span class="section input">
              <img src="@/assets/images/user.png">
              <input id="ac" v-model="ac" @keydown.enter="login" placeholder="账号"/>
            </span>
            <br />
            <span class="section input">
              <img src="@/assets/images/lock.png">
              <input id="pw" v-model="pw" @keydown.enter="login" placeholder="密码"/>
            </span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import router from '../../router'
import authApi from '../../api/auth/auth'
import authStore from '../../store/auth/auth'

export default {
  name: 'login',
  data: function() {
    return {
      ac: null,
      pw: null
    }
  },
  methods: {
    login: function() {
      this.$http.get(authApi.login, {
        params: {
          ac: this.$data.ac,
          pw: this.$data.pw
        }
      }).then(function(resp) {
        authStore.commit('setToken', resp.data.data)
        router.push('/')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/aface.scss";

$section-size: 50px;

table {
  width: 100%;
  height: 100%;
  background-color: $color-steel;
}
td#logo {
  width: 55%;
  text-align: right;
  padding-right: 50px;
  color: $color-orange;
  font-size: 70px;
  text-shadow: 2px 2px 4px $color-0;
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
    height: $section-size;
    line-height: $section-size;
    font: {
      size: 40px;
      family: 'simhei';
    }
    color: lighten($color-steel, 60%);
    text-shadow: 2px 2px $color-0;

    &.input {
      background-color: darken($color-steel, 3%);
      &>img {
        display: block;
        position: absolute;
        left: 0;

        width: 32px;
        height: 32px;
        margin-top: 8px;
        margin-left: 9px;
      }
      &>input {
        box-sizing: border-box;
        position: absolute;
        left: 0;
        border: 0;
        background-color: transparent;
        padding-left: $section-size;
        width: 100%;
        height: $section-size;
        line-height: $section-size;
        font-size: $section-size / 3;
        color: $color-f;
        outline: none;
      }
    }
  }
}
</style>
