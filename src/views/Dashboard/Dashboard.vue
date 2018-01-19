<template>
  <div id="app">
    <Header />
    <Sidebar />
    <router-link to="/user">用户管理</router-link>
    <router-view id="root" class="active"/>
  </div>
</template>

<script>
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
export default {
  name: 'Dashboard',
  components: {
    Header,
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#root {
  position: fixed;
  top: 70px;
  left: 200px;
  right: 0;
  bottom: 0;

  &.active {
    right: 50px;
  }
}
</style>
