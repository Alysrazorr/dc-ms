<template>
  <ul class="aface">
    <item class="tree" :model="treeData"/>
  </ul>
</template>

<script>
import Vue from 'vue'
import item from './item'
Vue.component('item', item)

export default {
  name: 'tree',
  props: {
    model: Object
  },
  data: function() {
    return {
      treeData: this.model
    }
  }
}
</script>
