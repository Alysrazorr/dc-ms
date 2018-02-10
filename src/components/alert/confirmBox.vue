<template>
  <modal
    :containerWidth="containerWidth">
    <div slot="header" class="swal2-icon swal2-confirm" style="display: flex;">
      <span class="swal2-animate-y-mark">?</span>
    </div>
    <div class="body" slot="body">{{message}}</div>
    <div class="footer" slot="footer">
      <button class="aface" @click="$emit('confirm')">确认</button>
      <button class="aface fire" @click="$emit('close')">取消</button>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'confirmBox',
  props: {
    message: {
      type: String,
      default: '默认消息'
    },
    containerWidth: String
  }
}
</script>

<style lang="scss" scoped>
div {
  text-align: center;
  &.body {
    font: {
      size: 32px;
      weight: 400;
    }
  }
}
</style>
