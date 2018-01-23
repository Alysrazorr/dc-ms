import axios from 'axios'
import security from '../store/security'

axios.defaults.baseURL = 'http://192.168.199.233:9080/dc-ms'
axios.interceptors.request.use(
  config => {
    if (security.state.token) {
      config.headers.Token = `token ${security.state.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

export default axios
