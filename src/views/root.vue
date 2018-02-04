<template>
  <div @click="showMenu = false">
    <div id="sidebar-shadow"></div>
    <nav id="sidebar">
      <div id="user-info">
        <div id="user-avatar">
        </div>
        <div id="user-nickname">Administrator</div>
      </div>
      <div class="divider"></div>
      <ul id="menu">
        <li class="menu" v-for="menu of menus" :key="menu.id"
            :class="[[{active: activeMenuId === menu.id}]]"
            @click="activeMenuId = menu.id" v-bind:style="{ height: getMenuHeight(activeMenuId === menu.id, menu.children.length)}">
          <div class="title-container">
            <i class="material-icons">{{menu.icon}}</i>
            <span class="title">{{menu.name}}</span>
            <i class="material-icons arrow">chevron_right</i>
          </div>
          <ul>
            <li class="item" v-for="menuItem of menu.children" :key="menuItem.id">
              <div class="title-container"
                :class="[[{active: activeMenuItemId === menuItem.id}]]"
                @click="activeMenuItemId = menuItem.id, goTo(menuItem.url)">
                <i class="material-icons">{{menuItem.icon}}</i>
                <span class="title">{{menuItem.name}}</span>
                <i class="material-icons arrow">more_horiz</i>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <transition name="slide-fade">
      <router-view id="main-panel" class="scrollbar"/>
    </transition>
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
      activeMenuItemId: null
    }
  },
  computed: {
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

nav#sidebar {
  position: absolute;
  top: 0;
  left: 0;
  width: 260px;
  bottom: 0;
  overflow: auto;
  padding: 20px;
  background-color: $sidebar-bg;

  &>ul#menu {
    @include zero;
    position: absolute;
    top: 140px;
    left: 15px;
    right: 5px;
    bottom: 15px;
    padding-right: 10px;
    overflow: auto;

    ul, li {
      @include zero;
      list-style-type: none;
      margin: 10px 0;
    }
    li.menu {
      overflow: hidden;
      @include transition(300ms);

      &>div.title-container {
        font-size: 14px;
        &>i { font-size: 28px; }
      }

      &.active {
        &>div.title-container {
          background-color: $color-sky;
          &>* { color: $color-f !important; }
          &>i.arrow { transform: rotate(90deg); }
          &>.title { box-shadow: 0 0 20px rgba($color-sky, 0.8); }
        }
      }
    }
    li.item>div.title-container {
      margin-left: $menu-item-height / 4;
      font-size: 13px;
      &>i { font-size: 26px; }
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
        z-index: 200;

        &.arrow {
          left: auto;
          right: 0;
          font-size: 20px !important;
          border-radius: 9999px;
          @include transition(300ms);
        }
      }

      &>.title {
        position: absolute;
        left: 10px;
        right: 10px;
        padding: 0 $menu-item-height - 10px;
        z-index: 100;
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

div#sidebar-shadow {
  position: fixed;
  top: 10px;
  left: 250px;
  width: 10px;
  bottom: 10px;
  box-shadow: 0 0 20px rgba(178,178,178, 0.7);
}

div#main-panel {
  position: fixed;
  top: 0;
  left: 260px;
  right: 0;
}

</style>
