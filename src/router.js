import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import login from '@/views/login'
import notFound from '@/views/errorPage/notFound'

Vue.use(Router)

if (window.sessionStorage.getItem('token')) {
  store.commit('auth/setToken', window.sessionStorage.getItem('token'))
}

if (window.sessionStorage.getItem('menus')) {
  store.commit('auth/setMenus', window.sessionStorage.getItem('menus'))
}

if (window.sessionStorage.getItem('activeMenuId')) {
  store.commit('dashboard/activeMenu', window.sessionStorage.getItem('activeMenuId'))
}

if (window.sessionStorage.getItem('activeItemId') && window.sessionStorage.getItem('activeItemTitle')) {
  store.commit('dashboard/activeItem', {
    id: window.sessionStorage.getItem('activeItemId'),
    title: window.sessionStorage.getItem('activeItemTitle')
  })
}

if (typeof window.sessionStorage.getItem('isDrawerActive') !== 'undefined') {
  store.commit('dashboard/setIsDrawerActive', window.sessionStorage.getItem('isDrawerActive') === 'true')
}

const router = new Router({
  routes: [{
    path: '/login',
    component: login
  }, {
    path: '/dashboard',
    component: resolve => require(['@/views/dashboard'], resolve),
    children: getRouters(store.state.dashboard.menus)
  }, {
    path: '*',
    component: notFound
  }]
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
        path: '/dashboard'
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
        component: resolve => require(['@/views' + item.url], resolve),
        meta: { title: item.title }
      })
    })
  })
  return children
}

export default router
