import axios from 'axios'
import authStore from './store/auth/auth'

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

export default axios
