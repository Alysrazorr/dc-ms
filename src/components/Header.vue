<template>
<div id="header" v-bind:class="[{ active: isActive}]">
</div>
</template>

<script>
export default {
  name: 'Header',
  data: function() {
    return {
      isActive: true
    }
  }
}
</script>

<style lang="scss" scoped>
#header {
  position: fixed;
  top: 0;
  left: 200px;
  right: 0;
  height: 70px;
  background-color: #333;

  &.active {
    left: 50px;
  }
}
</style>
