<template>
  <div id="dashboard">
    <header id="header">
      <img class="brand none-select" src="@/assets/logo.png" @click="activeMenu"/>
      <div class="title none-select">
        <div class="main" @click="goTo('/'), isMenuActive() ? activeMenu() : false">智慧南沙公共信息资源服务平台</div>
        <div class="sub">Nansha Public Information Resources Service Platform</div>
      </div>
      <nav id="help">
        <div id="search">
          <img src="/static/icon/search.png">
        </div>
        <div id="message">
          <img src="/static/icon/tones.png">
        </div>
        <div id="config">
          <img src="/static/icon/user.png">
        </div>
      </nav>
    </header>
    <transition name="slide-fade">
      <nav id="navs" v-if="isMenuActive()">
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
import dashboardStore from '@/store/dashboard/dashboard'
import hCard from '@/components/hCard'
import router from '@/router'

export default {
  name: 'dashboard',
  data: function() {
    return {
      menus: dashboardStore.state.menus
    }
  },
  methods: {
    activeMenu: function() {
      dashboardStore.commit('activeMenu')
    },
    activeMenuTab: function(id) {
      dashboardStore.commit('activeMenuTab', id)
    },
    activeMenuItem: function(id) {
      this.activeMenu()
      dashboardStore.commit('activeMenuItem', id)
    },
    isMenuActive: function() {
      return dashboardStore.state.isMenuActive
    },
    isMenuTabActive: function(id) {
      return dashboardStore.state.activeMenuTabId === id
    },
    isMenuItemActive: function(id) {
      return dashboardStore.state.activeMenuItemId === id
    },
    goTo: function(url) {
      router.push(url)
    }
  },
  components: {
    hCard
  }
}
</script>

<style lang="scss" scoped>
$header-height: 60px;
$sidebar-width: 250px;
$sidebar-toggle-width: 25px;
$sidebar-menu-item-height: 40px;

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
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

  &>nav#help {
    height: $header-height;
    float: right;
    font-size: 0;

    &>div {
      border-left: solid 1px darken($color-steel, 5%);
      position: relative;
      overflow: hidden;
      width: $header-height;
      height: $header-height;
      display: inline-block;
      &>img {
        filter: drop-shadow($color-steel-font 100px 0);
        position: absolute;
        top: 14px;
        left: -86px;
        width: 32px;
        height: 32px;
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
