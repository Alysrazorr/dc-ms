import Vue from 'vue'
import Router from 'vue-router'
import authStore from '@/store/auth/auth'

import Dashboard from '@/views/dashboard/dashboard'
import Login from '@/views/auth/login'
import User from '@/views/auth/user'
import Desktop from '@/views/desktop/desktop'

Vue.use(Router)

if (window.sessionStorage.getItem('token')) {
  authStore.commit('login', window.sessionStorage.getItem('token'))
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
    if (authStore.state.token) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  }
})

export default router
