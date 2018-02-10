<template>
  <modal
    @close="$emit('close')"
    :containerWidth="containerWidth">
    <div slot="header" class="swal2-icon swal2-info" style="display: flex;">
      <span class="swal2-animate-y-mark">i</span>
    </div>
    <div slot="body" class="body">{{message}}</div>
  </modal>
</template>

<script>
export default {
  name: 'infoBox',
  props: {
    message: {
      type: String,
      default: '消息提示'
    },
    containerWidth: String
  }
}
</script>

<style lang="scss" scoped>
div.body {
  text-align: center;
  font: {
    size: 32px;
    weight: 400;
  }
}
</style>
