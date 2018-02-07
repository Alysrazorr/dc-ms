<template>
  <div class="checkbox-container none-select" :class="[{active: isChecked}]" @click="isChecked = !isChecked">
    <i class="material-icons">{{isChecked ? 'done' : ''}}</i>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  props: {
    defaultChecked: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: null
    }
  },
  data: function() {
    return {
      isChecked: null
    }
  },
  watch: {
    defaultChecked: function(v) {
      this.isChecked = v
    }
  }
}
</script>

<style lang="scss" scoped>
div.checkbox-container {
  position: relative;
  width: 16px !important;
  height: 16px !important;
  line-height: 16px !important;
  border-radius: 3px;
  border: solid 1px $color-a;
  cursor: pointer;
  display: inline-block;
  font-size: 0;

  &>i {
    font-size: 14px;
  }

  &.active {
    &>i {
      color: $color-sky;
    }
  }
}
</style>
