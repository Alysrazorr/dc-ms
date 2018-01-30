import axios from 'axios'
import authStore from './store/auth/auth'
import router from './router'

axios.defaults.baseURL = '/api'
axios.interceptors.request.use(
  config => {
    if (authStore.state.token) {
      config.headers.Token = `${authStore.state.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  response => {
    return response
  },
  err => {
    switch (err.response.status) {
      case 401:
        authStore.commit('clearToken')
        router.push('/')
        return Promise.reject(err)
    }
  }
)

export default axios
