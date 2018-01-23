<template>
  <div id="dashboard">
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
div#dashboard {
  
}
</style>
