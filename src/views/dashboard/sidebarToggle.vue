<template>
  <div id="sidebarToggle" @click="toggle">
    <div :class="[{ toggled: toggled() }]">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
import dashboardStore from '@/store/dashboard/dashboard'

export default {
  name: 'sidebarToggle',
  methods: {
    toggle: function() {
      dashboardStore.commit('toggle')
    },
    toggled: function() {
      return dashboardStore.state.toggled
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/global.scss';

$toggle-size: 25px;

div#sidebarToggle {
  position: relative;

  & > div {
    position: relative;
    overflow: hidden;
    width: $toggle-size;
    height: $toggle-size;
    float: left;
    cursor: pointer;
    overflow: hidden;
    
    & > span {
      height: $toggle-size / 5;
      display: inline-block;
      position: absolute;
      background: $color-f;
      box-shadow: 0 1px 3px $color-0;
      @include transition(200ms);

      &:nth-child(1) {
        width: $toggle-size;
        top: $toggle-size / 5 * 0;
      }

      &:nth-child(2) {
        width: $toggle-size * 2;
        top: $toggle-size / 5 * 2;
      }

      &:nth-child(3) {
        width: $toggle-size;
        top: $toggle-size / 5 * 4;
      }
      
      &:nth-child(4) {
        width: $toggle-size * 2;
        top: $toggle-size / 5 * 2;
        left: $toggle-size * -1;
      }
    }

    &.toggled {
      & > span {
        &:nth-child(1) {
          margin-left: $toggle-size / 2 - $toggle-size / 10;
          width: $toggle-size / 5;
          height: 100px;
        }

        &:nth-child(2) {
          @include rotate(-45deg);
        }

        &:nth-child(3) {
          top: $toggle-size;
        }

        &:nth-child(4) {
          @include rotate(45deg);
        }
      }
    }
  }
}
</style>
