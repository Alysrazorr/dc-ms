<template>
  <div class="aface icon-panel">
    <i class="material-icons icon none-select">{{getIconfont}}</i>
    <span class="title none-select">{{getTitle}}</span>
    <div class="aface panel body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'iconPanel',
  props: {
    title: String,
    iconfont: String
  },
  data: function() {
    return {
      defaults: {
        title: 'icon-panel',
        iconfont: 'assignment'
      }
    }
  },
  computed: {
    getTitle: function() {
      return this.title ? this.title : this.defaults.title
    },
    getIconfont: function() {
      return this.iconfont ? this.iconfont : this.defaults.iconfont
    }
  }
}
</script>

<style lang="scss" scoped>
$shadow-sky: 0 4px 20px 0px rgba(0,0,0, 0.14), 0 7px 10px -5px rgba($color-sky, 0.4);
div.icon-panel {
  position: relative;
  padding-bottom: 25px;
  &>i.icon {
    position: absolute;
    left: 25px;
    width: 70px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    border-radius: 3px;
    background-color: $color-sky;
    color: $color-f;
    box-shadow: $shadow-sky;
    z-index: 200;
  }
  &>span.title {
    position: absolute;
    top: 35px;
    left: 110px;
    z-index: 200;
    font: {
      size: 16px;
      weight: 100;
    }
  } 
  &>div.body {
    position: relative;
    top: 25px;
    z-index: 100;
    padding: {
      top: 60px;
      left: 15px;
      right: 15px;
      bottom: 15px;
    }
  }
}
</style>
