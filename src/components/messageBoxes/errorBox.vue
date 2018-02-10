<template>
  <modal
    @close="$emit('close')"
    :containerWidth="containerWidth">
    <div slot="header" class="swal2-icon swal2-error swal2-animate-error-icon" style="display: flex;">
      <span class="swal2-x-mark swal2-animate-x-mark">
        <span class="swal2-x-mark-line-left"></span>
        <span class="swal2-x-mark-line-right"></span>
      </span>
    </div>
    <div slot="body" class="body">{{message}}</div>
  </modal>
</template>

<script>
export default {
  name: 'errorBox',
  props: {
    message: {
      type: String,
      default: '你错了'
    },
    containerWidth: {
      type: String,
      default: '400'
    }
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
