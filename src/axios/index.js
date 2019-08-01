import axios from 'axios'
import { Message } from 'element-ui'

const instance = axios.create({
  baseURL: '',
  timeout: 50000
})

let CancelToken = axios.CancelToken
/**
 * 请求队列
 *
 * 用于缓存请求，当下一个同名请求进入队列时，查看前一个请求是否已有 responce，
 * 如果前一个同名请求还在请求过程中，则 cancel 掉该请求。
 */
let requestQueue = new Array(0)

/**
 * 移除未处理的请求
 * 未处理代表未执行或在执行过程中的
 * 因为有同请求进来，因此中断掉执行中的请求
 * @param {Object} requestConfig 请求配置
 */
function removeUnreactedRequest (requestConfig) {
  for (const requestIndex in requestQueue) {
    if (requestQueue[requestIndex].unique === `${requestConfig.url}`) {
      requestQueue[requestIndex].fn()
      requestQueue.splice(requestIndex, 1)
    }
  }
}

instance.interceptors.request.use(config => {
  removeUnreactedRequest(config)

  /**
   * 为 config 添加 cancelToken 属性，用来 cancel 请求
   */
  config.cancelToken = new CancelToken(function executor (cancelFn) {
    requestQueue.push({
      fn: cancelFn,
      unique: `${config.url}`
    })
  })

  if (localStorage.token) {} else {

  }
  return config
}, error => {
  console.log(error)
})

instance.interceptors.response.use(resp => {
  removeUnreactedRequest(resp.config)
  let respdata = resp.data

  if (respdata.code === 200 && respdata.message === 'ok') {
    return respdata
  } else {
    Message.error(respdata.message)
    return Promise.reject(respdata)
  }
}, error => {
  if (error.response) {
    let errResp = error.response

    if (errResp === 404) {

    }
    console.log(error.response.data)
    console.log(error.response.status)
  } else if (error.request) {
    console.log(error.request)
  } else {
    console.log('Error', error.message)
  }
})

const install = function (Vue, opts = {}) {
  Vue.prototype.$axios = instance
}

export default { install }
