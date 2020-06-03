import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_UI_API_PREFIX,
  timeout: 8170,
  headers: { 'X-Custom-Header': 'header' }
})

instance.interceptors.request.use(
  (config) => {
    // 在结合redux后，在此判断登录状态，向所有请求添加某些参数，比如header
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
