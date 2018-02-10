<template>
  <modal
    @close="$emit('close')"
    :containerWidth="containerWidth">
    <div slot="header" class="swal2-icon swal2-success swal2-animate-success-icon" style="display: flex;">
      <div class="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div>
      <span class="swal2-success-line-tip swal2-animate-success-line-tip"></span>
      <span class="swal2-success-line-long swal2-animate-success-line-long"></span>
      <div class="swal2-success-ring"></div>
      <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div>
      <div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div>
    </div>
    <div slot="body" class="body">{{message}}</div>
  </modal>
</template>

<script>
export default {
  name: 'successBox',
  props: {
    message: {
      type: String,
      default: '操作成功'
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

