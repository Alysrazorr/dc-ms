<template>
  <div>
    <div id="drawer-shadow"
      :class="[{active: !isDrawerActive}]"/>
    <nav id="drawer"
      :class="[[{active: isDrawerActive}]]">
      <div id="user-info">
        <div id="user-avatar" class="none-select">
          <i class="material-icons"
            @click="logout">account_circle</i>
        </div>
      </div>
      <div class="divider"></div>
      <div id="menu-container">
        <ul id="menu">
          <li class="menu"
            v-for="menu of menus" :key="menu.id"
            :class="[[{active: activeMenuId === menu.id}]]"
            :style="{height: getMenuHeight(activeMenuId === menu.id, menu.children.length)}"
            @click="activeMenu(menu.id)">
            <div class="title-container">
              <i class="material-icons">{{menu.icon}}</i>
              <span class="title">{{menu.name}}</span>
              <i class="material-icons arrow">chevron_right</i>
            </div>
            <ul>
              <li class="item"
                v-for="item of menu.children" :key="item.id"
                :class="[[{active: activeItemId === item.id}]]"
                @click="activeItem({id: item.id, title: item.name})">
                <div class="title-container"
                  @click="goTo(item.url)">
                  <i class="material-icons">{{item.icon}}</i>
                  <span class="title">{{item.name}}</span>
                  <i class="material-icons arrow">more_horiz</i>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <div id="content"
      :class="[{active: !isDrawerActive}]">
      <header id="header">
        <i class="material-icons none-select" id="drawer-toggle"
          @click="toggleDrawer"
        >{{isDrawerActive ? 'more_vert' : 'list'}}</i>
        <span id="location" class="none-select">{{activeItemTitle}}</span>
      </header>
      <router-view id="body"/>
      <footer id="copyright">&copy;&nbsp;{{thisYear}}&nbsp;广州中国科学院软件应用技术研究所</footer>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      menus: this.$store.state.dashboard.menus
    }
  },
  computed: {
    ...mapGetters('dashboard', ['isDrawerActive', 'activeMenuId', 'activeItemId', 'activeItemTitle']),
    thisYear() {
      return new Date().getFullYear()
    }
  },
  methods: {
    ...mapMutations('dashboard', ['toggleDrawer', 'activeMenu', 'activeItem']),
    goTo(url) {
      this.$router.push(url)
    },
    getMenuHeight(isActive, size) {
      return isActive ? ((size + 1) * 60 - 10) + 'px' : 50 + 'px'
    },
    logout() {
      var _vm = this
      _vm.$http.get(_vm.$api.auth.logout)
    }
  }
}
</script>

<style lang="scss" scoped>
$menu-item-height: 50px;
$drawer-bg: #fafafa;
$drawer-menu-hover: darken($drawer-bg, 5%);
$drawer-width: 260px;
$drawer-width-collapsed: 80px;

div#drawer-shadow {
  position: fixed;
  top: 10px;
  left: 250px;
  width: 10px;
  bottom: 10px;
  box-shadow: 0 0 20px rgba(178,178,178, 0.7);
  transition: left $transition-speed;

  &.active {
    left: $drawer-width-collapsed - 10px;
  }
}

nav#drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: $drawer-width-collapsed;
  bottom: 0;
  overflow: auto;
  padding: 15px;
  background-color: $drawer-bg;
  transition: width $transition-speed;
  overflow: hidden;
  z-index: 110;

  &.active {
    width: $drawer-width;
    li {
      i {
        opacity: 1 !important;
      }
      .title {
        opacity: 1 !important;
      }
      &.menu>div.title-container {
        width: $drawer-width - 30px !important;
      }
      &.item>div.title-container {
        width: $drawer-width - 30px !important;
      }
    }
  }

  &>div {
    &#user-info {
      height: 50px;
      margin-bottom: 15px;
      &>div#user-avatar {
        @include clearfix;
        &>i {
          float: left;
          width: 50px;
          height: 50px;
          font-size: 50px;
        }
      }
    }
    &#menu-container {
      position: absolute;
      top: 80px;
      left: 15px;
      right: 15px;
      bottom: 5px;
      overflow: hidden;
      &>ul#menu {
        @include zero;
        width: 200%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        &>li {
          width: 230px;
        }

        ul, li {
          @include zero;
          list-style-type: none;
          margin: 10px 0;
        }
        li {
          overflow: hidden;
          @include transition($transition-speed);

          &>div.title-container {
            width: $menu-item-height;
            transition: width $transition-speed;
          }

          &.menu {
            &>div.title-container {
              font-size: 15px;
              &>i { font-size: 28px; }
            }

            &.active {
              &>div.title-container {
                @include higher-shadow($color-sea);
                background-color: $color-sea;
                &>* { color: $color-f !important; }
                &>i.arrow { transform: rotate(90deg); }
              }
            }
          }

          &.item {
            &>div.title-container {
              &>i { font-size: 26px; }
              font-size: 13px;
              transition: width $transition-speed;
            }
            
            &.active {
              &>div.title-container {
                background-color: $color-sky;
                &>* { color: $color-f !important; }
              }
            }
          }
        }

        div.title-container {
          position: relative;
          height: $menu-item-height;
          line-height: $menu-item-height;
          border-radius: 3px;
          padding-left: $menu-item-height;
          cursor: pointer;

          &>i {
            position: absolute;
            top: 0;
            left: 0;
            width: $menu-item-height;
            height: $menu-item-height;
            line-height: $menu-item-height;
            text-align: center;
            border-radius: 9999px;
            z-index: 200;

            &.arrow {
              left: auto;
              right: 0;
              opacity: 0;
              font-size: 20px !important;
              border-radius: 9999px;
              transition: transform $transition-speed;
            }
          }

          &>.title {
            position: absolute;
            height: $menu-item-height;
            z-index: 100;
            opacity: 0;
            transition: opacity $transition-speed, padding-left $transition-speed;
          }

          &:hover {
            background-color: $drawer-menu-hover;
          }
        }
      }
    }
    &.divider {
      height: 1px;
      background-color: $color-d;
      transform: scaleY(0.5);
    }
  }
}

div#content {
  padding-left: $drawer-width + 10px;
  transition: padding-left $transition-speed;
  &.active {
    padding-left: $drawer-width-collapsed + 10px;
  }
  header#header {
    position: relative;
    height: 80px;
    line-height: 80px;

    &>i#drawer-toggle {
      position: absolute;
      top: 15px;
      left: 15px;
      width: 50px;
      height: 50px;
      line-height: 50px;
      background-color: $color-f;
      border-radius: 9999px;
      text-align: center;
      cursor: pointer;
      font-size: 30px;

      box-shadow: 0 5px 15px rgba($color-0, 0.2);
      transition: box-shadow $transition-speed;

      &:hover {
        box-shadow: 0 10px 25px rgba($color-0, 0.2);
      }
    }

    &>span#location {
      position: absolute;
      left: 90px;
      font: {
        size: 32px;
        weight: 100;
      }
    }
  }

  div#body {
    position: relative;
    z-index: 100;
  }

  footer#copyright {
    position: relative;
    height: 80px;
    line-height: 80px;
    padding-left: 15px;
    color: $color-5;

    font: {
      size: 14px;
      weight: 100;
    }
  }
}
</style>
