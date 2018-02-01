<template>
  <div>
    <button class="aface button sea" @click="logout">登出</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout: function() {
      this.$store.commit('auth/clearToken')
      this.$router.push('/123')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
