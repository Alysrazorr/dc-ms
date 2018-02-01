import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import Login from '@/views/login'
import Root from '@/views/root'
import NotFound from '@/views/errorPage/notFound'

Vue.use(Router)

if (window.sessionStorage.getItem('token')) {
  store.commit('auth/setToken', window.sessionStorage.getItem('token'))
}

if (window.sessionStorage.getItem('menus')) {
  store.commit('auth/setMenus', window.sessionStorage.getItem('menus'))
}

const router = new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Root,
      redirect: '/dashboard',
      children: [
        {
          path: '/dashboard',
          component: resolve => require(['@/views/dashboard'], resolve)
        },
        ...getRouters(store.state.dashboard.menus)
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (store.state.auth.token) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    if (store.state.auth.token) {
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
