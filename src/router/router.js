import Vue from 'vue'
import Router from 'vue-router'
import security from '../store/security'
import Dashboard from '@/views/Dashboard/Dashboard'
import Login from '@/views/Login/Login'
import User from '@/views/User/user'

Vue.use(Router)

if (window.localStorage.getItem('token')) {
  security.commit('login', window.localStorage.getItem('token'))
}

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: '/user',
          name: 'user',
          component: User
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (security.state.token) {
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
