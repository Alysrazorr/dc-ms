import Vue from 'vue'
import Router from 'vue-router'
import authStore from '../store/auth/auth'
import Dashboard from '@/views/Dashboard/Dashboard'
import Login from '@/views/Auth/Login'
import User from '@/views/Auth/User'
import Desktop from '@/views/Desktop/Desktop'

Vue.use(Router)

if (window.localStorage.getItem('token')) {
  authStore.commit('login', window.localStorage.getItem('token'))
}

const router = new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Dashboard,
      children: [
        {
          path: '/',
          component: Desktop
        },
        {
          path: '/user',
          component: User
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (authStore.state.token) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
