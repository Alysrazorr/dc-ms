<template>
  <li>
    <div :class="{bold: isFolder}" @click="toggle">
      {{model.name}}
      <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
    </div>
    <ul class="tree" v-show="open" v-if="isFolder">
      <tree class="tree" :model="model" v-for="model in model.children" :key="model.id" />
    </ul>
  </li>
</template>

<script>
export default {
  name: 'tree',
  props: {
    model: Object
  },
  data: function() {
    return {
      open: true
    }
  },
  computed: {
    isFolder: function() {
      return this.model.children && this.model.children.length
    }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.open = !this.open
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tree {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul.tree {
    font-size: $font-size;
    padding-left: 1.5em;
    li {
        line-height: 1.5em;
        list-style-type: disc;
    }
}
</style>
