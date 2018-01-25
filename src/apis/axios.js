import axios from 'axios'
import security from '../store/security'

axios.defaults.baseURL = '/apis'
axios.interceptors.request.use(
  config => {
    if (security.state.token) {
      config.headers.Token = `${security.state.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

export default axios
