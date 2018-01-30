import Vue from 'vue'
import Router from 'vue-router'
import authStore from '@/store/auth/auth'
import dashboardStore from '@/store/dashboard/dashboard'

import Login from '@/views/auth/login'
import Dashboard from '@/views/dashboard/root'

Vue.use(Router)

if (window.sessionStorage.getItem('token')) {
  authStore.commit('setToken', window.sessionStorage.getItem('token'))
}

if (window.sessionStorage.getItem('menus')) {
  authStore.commit('setMenus', window.sessionStorage.getItem('menus'))
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
          component: resolve => require(['@/views/dashboard/index'], resolve)
        },
        ...getRouters(dashboardStore.state.menus)
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

function getRouters(menus = [], children = []) {
  menus.forEach(menu => {
    menu.children.forEach(item => {
      children.push({
        path: item.url,
        component: resolve => require(['@/views' + item.url], resolve)
      })
    })
  })
  return children
}

export default router
