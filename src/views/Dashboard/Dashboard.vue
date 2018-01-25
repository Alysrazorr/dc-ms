<template>
  <div id="dashboard">
    <header id="header">
      <a id="brand"><img src=""/></a>
    </header>
    <nav id="sidebar">
      <router-link to="/">工作台</router-link>
      <router-link to="/user">用户管理</router-link>
    </nav>
    <router-view id="content"/>
  </div>
</template>

<script>
import User from '../Auth/User'

export default {
  name: 'Dashboard',
  component: {
    User
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/global.scss";

$header-height: 80px;
$sidebar-width: 300px;

header#header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $header-height;
}
nav#sidebar {
  position: fixed;
  top: $header-height;
  left: 0;
  bottom: 0;
  width: 300px;
  background-color: $color-f;
}
div#content {
  position: fixed;
  top: $header-height;
  left: $sidebar-width;
  right: 0;
  bottom: 0;
  background-color: $color-3;
}
</style>
