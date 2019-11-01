import axios from 'axios'

// 创建axios实例
const service = axios.create({
  timeout: 10000
})

service.interceptors.response.use(
  function (response) {
    // 请求正常则返回,这里返回了所有的请求头和请求体信息
    return Promise.resolve(response)
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default service