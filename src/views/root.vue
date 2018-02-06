<template>
  <div @click="showMenu = false">
    <div id="sidebar-shadow" :class="[[{active: isSidebarActive}]]"></div>
    <nav id="sidebar" :class="[[{active: !isSidebarActive}]]">
      <div id="user-info">
        <div id="user-avatar">
        </div>
        <div id="user-nickname">Administrator</div>
      </div>
      <div class="divider"></div>
      <ul id="menu">
        <li class="menu" v-for="menu of menus" :key="menu.id"
          :class="[[{active: activeMenuId === menu.id}]]"
          :style="{ height: getMenuHeight(activeMenuId === menu.id, menu.children.length)}"
          @click="activeMenuId = menu.id">
          <div class="title-container">
            <i class="material-icons">{{menu.icon}}</i>
            <span class="title">{{menu.name}}</span>
            <i class="material-icons arrow">chevron_right</i>
          </div>
          <ul>
            <li class="item" v-for="item of menu.children" :key="item.id"
              :class="[[{active: activeMenuItemId === item.id}]]"
              @click="activeMenuItemId = item.id, title = item.name">
              <div class="title-container" @click="goTo(item.url)">
                <i class="material-icons">{{item.icon}}</i>
                <span class="title">{{item.name}}</span>
                <i class="material-icons arrow">more_horiz</i>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <header id="navi" :class="[[{active: isSidebarActive}]]">
      <i class="material-icons none-select" id="sidebar-toggle"
        @click="isSidebarActive = !isSidebarActive">{{!isSidebarActive ? 'more_vert' : 'list'}}</i>
      <span id="location" class="none-select">{{title}}</span>
    </header>
    <router-view id="main-panel" class="scrollbar" :class="[[{active: isSidebarActive}]]"/>
    <footer id="copyright" :class="[[{active: isSidebarActive}]]">
      &copy; {{thisYear}} 广州中国科学院软件应用技术研究所
    </footer>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      menus: this.$store.state.dashboard.menus,
      keyword: null,
      showMenu: false,
      activeMenuId: null,
      activeMenuItemId: null,
      isSidebarActive: true,
      title: '数据中心'
    }
  },
  computed: {
    thisYear: function() {
      return new Date().getFullYear()
    }
  },
  methods: {
    goTo: function(url) {
      this.$router.push(url)
    },
    getMenuHeight: function(isActive, size) {
      return isActive ? ((size + 1) * 60 - 10) + 'px' : 50 + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
$menu-item-height: 50px;
$sidebar-bg: #fafafa;
$sidebar-menu-hover: darken($sidebar-bg, 5%);
$sidebar-width: 260px;
$sidebar-width-collapsed: 80px;

div#sidebar-shadow {
  position: fixed;
  top: 10px;
  left: 250px;
  width: 10px;
  bottom: 10px;
  box-shadow: 0 0 20px rgba(178,178,178, 0.7);
  transition: left 300ms;

  &.active {
    left: $sidebar-width-collapsed - 10px;
  }
}

nav#sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: $sidebar-width-collapsed;
  bottom: 0;
  overflow: auto;
  padding: 20px;
  background-color: $sidebar-bg;
  transition: width 300ms;
  overflow: hidden;
  z-index: 110;

  &.active {
    width: $sidebar-width;
    li {
      i {
        opacity: 1 !important;
      }
      .title {
        opacity: 1 !important;
        padding-left: 40px !important;
      }
      &.menu>div.title-container {
        width: $sidebar-width - 30px !important;
      }
      &.item>div.title-container {
        width: $sidebar-width - 40px !important;
      }
    }
    &>ul#menu {
      li.item>div.title-container {
        margin-left: 10px;
      }
    }
  }

  &>ul#menu {
    @include zero;
    position: absolute;
    width: $sidebar-width - 30px;
    top: 140px;
    left: 15px;
    bottom: 15px;
    overflow: hidden;
    ul, li {
      @include zero;
      list-style-type: none;
      margin: 10px 0;
    }
    li {
      overflow: hidden;
      @include transition(300ms);

      &>div.title-container {
        width: $menu-item-height;
        transition: width 300ms;
      }

      &.menu {
        &>div.title-container {
          font-size: 15px;
          &>i { font-size: 28px; }
        }

        &.active {
          &>div.title-container {
            background-color: $color-sea;
            &>* { color: $color-f !important; }
            &>i.arrow { transform: rotate(90deg); }
            &>.title { box-shadow: 0 5px 15px rgba($color-sea, 0.5); }
          }
        }
      }

      &.item {
        &>div.title-container {
          &>i { font-size: 26px; }
          font-size: 13px;
          transition: margin-left 300ms, width 300ms;
        }
        
        &.active {
          &>div.title-container {
            background-color: $color-sky;
            &>* { color: $color-f !important; }
            &>.title { box-shadow: 0 5px 15px rgba($color-sky, 0.5); }
          }
        }
      }
    }
    div.title-container {
      position: relative;
      height: $menu-item-height;
      line-height: $menu-item-height;
      border-radius: 2px;
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
          @include transition(300ms);
        }
      }

      &>.title {
        position: absolute;
        left: 10px;
        right: 10px;
        height: $menu-item-height;
        z-index: 100;
        opacity: 0;
        transition: opacity 300ms, padding-left 300ms;
      }

      &:hover {
        background-color: $sidebar-menu-hover;
      }
    }
  }

  &>div {
    &#user-info {
      height: 100px;
      &>div#user-avatar {
        @include clearfix;
        &>img {
          float: left;
          width: 34px;
          height: 34px;
          border-radius: 9999px;
        }
      }
      &>div#user-nickname {
        margin-top: 6px;
        font: {
          size: 13px;
          family: 'Consolas', 'Microsoft Yahei';
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

header#navi {
  position: relative;
  padding-left: $sidebar-width + 30px;
  height: 80px;
  line-height: 80px;
  transition: padding-left 300ms;

  &.active {
    padding-left: $sidebar-width-collapsed + 30px;

    &>span#location {
      left: $sidebar-width-collapsed + 100px;
    }
  }

  &>i#sidebar-toggle {
    position: absolute;
    top: 15px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    background-color: $color-f;
    border-radius: 9999px;
    text-align: center;
    cursor: pointer;
    font-size: 30px;

    box-shadow: 0 5px 15px rgba($color-0, 0.2);
    transition: box-shadow 300ms;

    &:hover {
      box-shadow: 0 10px 25px rgba($color-0, 0.2);
    }
  }

  &>span#location {
    position: absolute;
    left: $sidebar-width-collapsed + 275px;
    transition: left 300ms;
    font: {
      size: 32px;
      weight: 100;
    }
  }
}

div#main-panel {
  position: relative;
  padding-left: $sidebar-width + 15px;
  transition: padding-left 300ms;
  z-index: 100;

  &.active {
    padding-left: $sidebar-width-collapsed + 15px;
  }
}

footer#copyright {
  position: relative;
  height: 80px;
  line-height: 80px;
  transition: padding-left 300ms;
  padding-left: $sidebar-width + 30px;
  color: $color-5;

  font: {
    size: 14px;
    weight: 100;
  }

  &.active {
    padding-left: $sidebar-width-collapsed + 35px;
  }
}
</style>
