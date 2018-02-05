<template>
  <div class="textbox-container"
    @click="focus = !foucs">
    <label for="" class="aface textbox-label" :class="[[{active: focus}]]">{{label}}</label>
    <input type="text" class="aface textbox-value">
    <div class="textbox-underline"></div>
  </div>
</template>

<script>
export default {
  name: 'textbox',
  props: {
    label: String
  },
  data: function() {
    return {
      focus: false
    }
  }
}
</script>

<style lang="scss" scoped>
div.textbox-container {
  position: relative;
  height: 60px;
  label.textbox-label {
    position: absolute;
    top: 30px;
    left: 15px;
    z-index: 100;
    font: {
      size: 14px;
      weight: 100;
      family: $font-family;
    }
    &.active {
      top: 0;
      left: 0;
    }
  }
  input.textbox-value {
    position: absolute;
    top: 20px;
    left: 0;
    width: 100%;
    bottom: 0;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    z-index: 150;
    background: transparent;
  }
  div.textbox-underline {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: $color-d;
    z-index: 100;
  }
}
</style>
