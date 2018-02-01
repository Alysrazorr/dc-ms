<template>
  <div id="dashboard" @click="isMenuActive() ? activeMenu() : true, activeUserMenu(), activeMessageMenu()">
    <header id="header">
      <img class="brand none-select" src="@/assets/logo.png" @click="activeMenu" @click.stop/>
      <div class="title none-select">
        <div class="main" @click="goTo('/'), isMenuActive() ? activeMenu() : false">智慧南沙公共信息资源服务平台</div>
        <div class="sub">Nansha Public Information Resources Service Platform</div>
      </div>
      <nav id="help">
        <div id="config" @click="showUserMenu = !showUserMenu" @click.stop>
          <i class="icon-user"></i>
          <transition name="slide-y">
            <ul class="aface" v-if="showUserMenu">
              <li class="aface">用户信息</li>
              <li class="aface">退出登录</li>
            </ul>
          </transition>
        </div>
        <div id="message" @click="showMessageMenu = !showMessageMenu" @click.stop>
          <i class="icon-bell"></i>
          <transition name="slide-y">
            <ul class="aface" v-if="showMessageMenu">
              <li class="aface">用户信息</li>
              <li class="aface">退出登录</li>
            </ul>
          </transition>
        </div>
      </nav>
      <input class="aface" :model="keyword" placeholder="搜索..."/>
    </header>
    <transition name="slide-fade">
      <nav id="navs" v-if="isMenuActive()" @click.stop>
        <div class="menu-tabs">
          <div class="menu-tab" :class="[{active: isMenuTabActive(menu.id)}]" v-for="menu of menus" :key="menu.id" @click="activeMenuTab(menu.id)">{{menu.name}}</div>
        </div>
        <div class="menu-contents">
          <transition-group name="slide-fade">
            <div class="menu-content" v-if="isMenuTabActive(menu.id)" v-for="menu of menus" :key="menu.id">
              <div class="menu-item" :class="[{active: isMenuItemActive(item.id)}]" v-for="item of menu.children" :key="item.id" @click="activeMenuItem(item.id), goTo(item.url)">
                <div class="menu-item-name">{{item.name}}</div>
                <div class="menu-item-desc">{{item.desc}}</div>
              </div>
            </div>
          </transition-group>
        </div>
        <img src="@/assets/logo.png">
      </nav>
    </transition>
    <transition name="slide-fade">
      <router-view id="content"/>
    </transition>
  </div>
</template>

<script>
import router from '@/router'

export default {
  name: 'dashboard',
  data: function() {
    return {
      menus: this.$store.state.dashboard.menus,
      keyword: null,
      showMessageMenu: false,
      showUserMenu: false
    }
  },
  methods: {
    activeMenu: function() {
      this.$store.commit('dashboard/activeMenu')
    },
    activeMenuTab: function(id) {
      this.$store.commit('dashboard/activeMenuTab', id)
    },
    activeMenuItem: function(id) {
      this.activeMenu()
      this.$store.commit('dashboard/activeMenuItem', id)
    },
    activeUserMenu: function() {
      this.showUserMenu = false
    },
    activeMessageMenu: function() {
      this.showMessageMenu = false
    },
    isMenuActive: function() {
      return this.$store.state.dashboard.isMenuActive
    },
    isMenuTabActive: function(id) {
      return this.$store.state.dashboard.activeMenuTabId === id
    },
    isMenuItemActive: function(id) {
      return this.$store.state.dashboard.activeMenuItemId === id
    },
    goTo: function(url) {
      router.push(url)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style.css';
$header-height: 60px;
$header-toggle-size: $header-height - 20px;

.slide-y-enter-active {
  transition: all .3s ease;
}
.slide-y-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-y-enter, .slide-y-leave-to {
  transform: translateY(5px);
  opacity: 0.6;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

header#header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $header-height;
  box-shadow: 0 0 20px rgba($color-0, 0.5);
  z-index: 200;
  min-width: 1440px;
  background: linear-gradient(to top right, $color-steel, lighten($color-steel, 5%));

  &>img.brand {
    cursor: pointer;
    float: left;
    margin: 5px;
  }

  &>div.title {
    float: left;
    cursor: default;

    &>div.main {
      cursor: pointer;
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

  &>input.aface {
    background-color: darken($color-steel, 10%);
    height: $header-height - 20px;
    margin-top: 10px;
    margin-right: 10px;
    border-radius: 3px;
    float: right;
    padding: 0 10px;
    width: 150px;
    transition: width 600ms, background-color 600ms;
    box-shadow: 0 2px 6px rgba($color-0, 0.8) inset;

    &:hover {
      width: 200px;
      background-color: darken($color-steel, 5%);
    }
  }
  &>nav#help {
    height: $header-height;
    float: right;
    font-size: 0;

    &>div {
      border-left: solid 1px darken($color-steel, 5%);
      position: relative;
      height: $header-height;
      float: right;
      transition: color 200ms, background-color 200ms;

      &>i {
        display: block;
        text: {
          align: center;
          shadow: 2px 2px 4px rgba($color-0, 0.8);
        }
        width: $header-toggle-size / 1.5 + 6px;
        height: $header-toggle-size / 1.5 + 6px;
        line-height: $header-toggle-size / 1.5 + 6px;
        margin: ($header-height - $header-toggle-size / 1.5 - 6) / 2;
        font-size: $header-toggle-size / 1.5 + 4px;
      }

      &:hover {
        cursor: pointer;
        background-color: darken($color-steel, 5%);
      }

      z-index: 300;
      &>ul {
        position: absolute;
        font-size: 14px;
        right: 0;
        height: 40px;
        &>li {
          width: 150px;
          color: $color-3;
          list-style-type: none;
          font-size: 14px;
          background-color: $color-f;
        }
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
  background: linear-gradient(to bottom right, darken($color-steel, 5%), darken($color-steel, 15%));
  border-bottom: solid 1px lighten($color-steel, 5%);
  z-index: 150;
  min-width: 1280px;
  overflow: hidden;

  &>img {
    filter: grayscale(80%);
    position: absolute;
    right: 0;
    top: calc(50% - 250px);
    width: 400px;
    height: 500px;
    opacity: 0.1;
  }

  &>div.menu-tabs {
    font-size: 14px;
    float: left;
    padding-right: 20px;
    border-right: solid 1px lighten($color-steel, 5%);

    &>div.menu-tab {
      cursor: pointer;
      margin: 20px 0;
      padding: 10px 50px;
      color: $color-steel-font;
      background-color: lighten($color-steel, 5%);
      box-shadow: 0 4px 12px rgba($color-0, 0.4);
      transition: color 200ms, background-color 200ms;

      &:hover, &.active {
        color: $color-f;
        background-color: $color-grass;
      }
    }
  }

  &>div.menu-contents {
    float: left;
    margin-left: -1px;
    font-size: 13px;
    border-left: solid 1px lighten($color-steel, 5%);
    width: 800px;
    position: relative;

    &>*>div.menu-content {
      position: absolute;
      top: 0;
      left: 10px;
      &>div.menu-item {
        position: relative;
        float: left;
        cursor: pointer;
        margin: 10px;
        padding: 5px 20px;
        color: $color-steel-font;
        background-color: lighten($color-steel, 5%);
        box-shadow: 0 4px 12px rgba($color-0, 0.4);
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
        &>div.menu-item-icon {
          position: absolute;
          top: 0;
          right: 0;
          height: 70px;
          width: 70px;
          overflow: hidden;
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
