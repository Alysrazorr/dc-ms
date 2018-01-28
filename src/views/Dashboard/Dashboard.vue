<template>
  <div id="dashboard">
    <header id="header">
      <router-link class="brand" to="/"><img class="brand" src="../../assets/logo.png" @click="toggleMenu"/></router-link>
      <div class="title">
        <div class="main">智慧南沙公共信息资源服务平台</div>
        <div class="sub">Nansha Public Information Resources Service Platform</div>
      </div>
      <nav id="helps">
        <div class="search"></div>
        <div class="docs"></div>
        <div class="user"></div>
      </nav>
    </header>
    <nav id="navs" :class="[{toggled: toggled()}]">
      <div class="menu-tabs">
        <div class="menu-tab" :class="[{active: isMenuTabActive(menu.id)}]" v-for="menu of menus" :key="menu.id" @click="activeMenuTab(menu.id)">
          {{menu.name}}
        </div>
      </div>
      <div class="menu-contents">
        <div class="menu-content" :class="[{active: isMenuTabActive(menu.id)}]" v-for="menu of menus" :key="menu.id">
          <div class="menu-item" v-for="item of menu.children" :key="item.id">
            <div class="menu-item-name">{{item.name}}</div>
            <div class="menu-item-desc">{{item.desc}}</div>
            <i :class="item.icon"></i>
          </div>
        </div>
      </div>
      <img src="../../assets/logo.png">
    </nav>
    <router-view id="content"/>
  </div>
</template>

<script>
import dashboardStore from '../../store/dashboard/dashboard'

export default {
  name: 'dashboard',
  data: function() {
    return {
      menus: dashboardStore.state.menus
    }
  },
  methods: {
    toggled: function() {
      return dashboardStore.state.toggled
    },
    toggleMenu: function() {
      dashboardStore.commit('toggleMenu')
    },
    activeMenuTab: function(id) {
      dashboardStore.commit('activeMenuTab', id)
    },
    isMenuTabActive: function(id) {
      return dashboardStore.state.activeMenuTabId === id
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/global.scss";

$header-height: 60px;
$sidebar-width: 250px;
$sidebar-toggle-width: 25px;
$sidebar-menu-item-height: 40px;

header#header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $header-height;
  box-shadow: 0 1px 20px rgba($color-0, 0.5);
  z-index: 200;
  min-width: 1280px;
  background-color: $color-steel;

  &>a.brand {
    float: left;
    margin: 5px;
  }

  &>div.title {
    float: left;
    cursor: default;

    &>div.main {
      color: lighten($color-steel, 60%);
      text-shadow: 3px 0 3px $color-0;
      font: {
        size: 25px;
        family: 'simhei';
      }
      height: $header-height * 0.4;
      line-height: $header-height * 0.8;
    }
    &>div.sub {
      font: {
        style: italic;
        size: 14px;
        family: 'Verdana';
      }
      color: orange;
      transition: color 200ms;
      text-shadow: 1px 2px 3px darken($color-steel, 10%);
      height: $header-height * 0.4;
      line-height: $header-height * 0.7;

      &:hover {
        color: orangered;
      }
    }
  }
}
nav#navs {
  position: fixed;
  top: $header-height;
  left: 0;
  right: 0;
  padding: 10px 50px;
  background-color: darken($color-steel, 5%);
  border-bottom: solid 1px lighten($color-steel, 5%);
  display: none;
  z-index: 150;
  min-width: 1280px;
  overflow: hidden;

  &.toggled {
    display: block;
  }

  &>img {    
    filter: grayscale(60%);
    position: absolute;
    right: 0;
    top: calc(50% - 250px);
    width: 400px;
    height: 500px;
    opacity: 0.05;
  }

  &>div.menu-tabs {
    font-size: 14px;
    float: left;
    padding-right: 20px;

    &>div.menu-tab {
      cursor: pointer;
      margin: 20px 0;
      padding: 10px 30px;
      color: $color-steel-font;
      background-color: lighten($color-steel, 5%);
      box-shadow: 4px 4px 10px rgba($color-0, 0.5);
      transition: color 200ms, background-color 200ms;

      &:hover, &.active {
        color: $color-f;
        background-color: $color-grass;
      }
    }
  }

  &>div.menu-contents {
    float: left;
    padding-left: 10px;
    font-size: 13px;
    border-left: solid 1px lighten($color-steel, 5%);
    width: 800px;

    &>div.menu-content {
      display: none;

      &.active {
        display: block;
      }
      &>div.menu-item {
        position: relative;
        float: left;
        cursor: pointer;
        margin: 10px;
        padding: 5px 20px;
        color: $color-steel-font;
        background-color: lighten($color-steel, 5%);
        box-shadow: 4px 4px 10px rgba($color-0, 0.5);
        transition: color 200ms, background-color 200ms;
        width: 300px;
        height: 60px;
        
        &:hover, &.active {
          color: $color-f;
          background-color: $color-sea;
        }

        &>div.menu-item-name {
          height: 40px;
          line-height: 35px;
          font-size: 20px;
        }
        &>div.menu-item-desc {
          height: 20px;
          line-height: 15px;
          font-size: 13px;
        }
        &>i {
          position: absolute;
          top: 0;
          right: 20px;
          display: block;
          height: 70px;
          line-height: 70px;
          font-size: 50px;
        }
      }
    }
  }

  @include clearfix;
}
div#content {
  position: fixed;
  top: $header-height;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
