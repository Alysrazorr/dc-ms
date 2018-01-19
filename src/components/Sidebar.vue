<template>
<div id="sidebar" v-bind:class="[{ active: isActive }]">
</div>
</template>

<script>
export default {
  name: 'Sidebar',
  data: function() {
    return {
      isActive: true
    }
  }
}
</script>

<style lang="scss" scoped>
#sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  background-color: #09c;

  &.active {
    width: 50px;
  }
}
</style>
