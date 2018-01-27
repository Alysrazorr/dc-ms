<template>
  <div id="dashboard">
    <header id="header">
      <SidebarToggle id="sidebarToggle"/>
    </header>
    <nav id="sidebar" :class="[{toggled: toggled()}]">
      <router-link to="/user">用户管理</router-link>
    </nav>
    <router-view id="content"/>
  </div>
</template>

<script>
import User from '../auth/user'
import SidebarToggle from './sidebarToggle'
import dashboardStore from '../../store/dashboard/dashboard'

export default {
  name: 'dashboard',
  methods: {
    toggled: function() {
      return dashboardStore.state.toggled
    }
  },
  components: {
    User, SidebarToggle
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/global.scss";

$header-height: 60px;
$sidebar-width: 300px;
$sidebar-toggle-width: 25px;

header#header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $header-height;
  box-shadow: 0 1px 20px rgba($color-0, 0.5);
  z-index: 200;

  &>#sidebarToggle {
    margin-left: ($header-height - $sidebar-toggle-width) / 2;
    margin-top: ($header-height - $sidebar-toggle-width) / 2;
  }
}
nav#sidebar {
  @include border-box;
  position: fixed;
  top: $header-height;
  left: 0;
  bottom: 0;
  width: $header-height;
  transition: width 200ms;
  background-color: rgb(37,37,37);
  z-index: 150;

  &.toggled {
    width: $sidebar-width;
  }
}
div#content {
  position: fixed;
  top: $header-height;
  left: $sidebar-width;
  right: 0;
  bottom: 0;
  background-color: rgb(30,30,30);
}
</style>
