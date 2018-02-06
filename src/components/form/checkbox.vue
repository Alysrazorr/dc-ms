<template>
  <div class="checkbox-container none-select" :class="[{active: checked}]" @click="checked = !checked">
    <i class="material-icons">{{checked ? 'done' : ''}}</i>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      checked: null
    }
  },
  watch: {
    isChecked: function(v) {
      this.checked = v
    }
  },
  computed: {
    id: function() {
      return this.id
    }
  },
  methods: {
    getIsChecked: function() {
      return this.checked
    },
    setIsChecked: function(checked) {
      this.checked = checked
    }
  },
  mounted: function() {
    this.checked = this.$props.isChecked
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
