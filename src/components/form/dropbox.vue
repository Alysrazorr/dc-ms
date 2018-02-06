<template>
  <div class="dropbox-container">
    <label class="aface textbox-label" :class="[[{active: active}]]">{{label}}</label>
    <input type="text" class="aface textbox-value" v-model="value"
      @blur="active = !isEmpty(), focus = false"
      @focus="active = true, focus = true">
    <div class="textbox-underline" :class="[[{active: focus}]]"></div>
  </div>
</template>

<script>
export default {
  name: 'dropbox',
  props: {
    label: String,
    data: Array
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
    isEmpty: function() {
      return this.value === null || this.value === ''
    }
  }
}
</script>

<style lang="scss" scoped>
div.dropbox-container {
  position: relative;
  height: 60px;

  label.textbox-label {
    position: absolute;
    top: 30px;
    z-index: 100;
    color: $color-5;
    @include transition(300ms);

    font: {
      size: 14px;
      weight: 100;
      family: $font-family;
    }

    &.active {
      top: 0;
      left: 0;
      font: {
        size: 13px;
      }
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
    z-index: 150;
    background: transparent;
    font-size: 15px;
    border-bottom: solid 1px $color-c;
  }

  div.textbox-underline {
    position: absolute;
    left: 50%;
    width: 0;
    bottom: 0;
    height: 2px;
    background-color: $color-c;
    z-index: 200;
    @include transition(300ms);

    &.active {
      left: 0;
      width: 100%;
      background-color: $color-sky;
    }
  }
}
</style>
