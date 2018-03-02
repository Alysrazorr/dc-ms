<template>
  <div class="ripple none-select" @click="ripple()">
    <span class="ripple" :class="[{active: isActive}]"></span>
    <slot name="body" />
  </div>
</template>

<script>
export default {
  name: 'af-ripple',
  data: function() {
    return {
      isActive: false
    }
  },
  methods: {
    ripple: function() {
      this.isActive = true
    }
  }
}
</script>

<style lang="scss" scoped>
div.ripple {
  position: relative;
  &>span.ripple {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    border-radius: 9999px;
    transition: all $transition-speed;
    background-color: rgba($color-f, 0.8);
    display: inline-block;
    &.active {
      width: 9999px;
      height: 9999px;
    }
  }
}
</style>
