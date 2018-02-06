<template>
  <div class="dropbox-container"
    @click="focus = !focus">
    <label class="dropbox-label">{{options.placeholder}}</label>
    <div class="dropbox-underline" :class="[[{active: focus}]]"></div>
  </div>
</template>

<script>
export default {
  name: 'dropbox',
  props: {
    options: {
      type: Object,
      default: function() {
        return {
          placeholder: '请选择',
          data: []
        }
      }
    }
  },
  data: function() {
    return {
      active: false,
      focus: false,
      text: null,
      value: null
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
div.dropbox-container {
  position: relative;
  height: 40px;

  label.dropbox-label {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    line-height: 40px;
    z-index: 100;
    color: $color-5;
    display: block;
    padding: 0 5px;
    cursor: pointer;
    border-bottom: solid 1px $color-c;

    font: {
      size: 14px;
      weight: 100;
      family: $font-family;
    }
  }

  div.dropbox-underline {
    position: absolute;
    left: 50%;
    width: 0;
    bottom: 0;
    height: 2px;
    background-color: $color-c;
    z-index: 200;
    @include transition($transition-speed);

    &.active {
      left: 0;
      width: 100%;
      background-color: $color-sky;
    }
  }
}
</style>
