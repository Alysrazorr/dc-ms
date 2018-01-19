import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/Dashboard/Dashboard'
import Login from '@/views/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
