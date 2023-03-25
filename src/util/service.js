import axios from 'axios'

const service = axios.create()

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    switch (error.response.status) {
      case 400:
          error.message = '错误请求，错误代码：400'
          break;
      case 401:
          error.message = '未授权，请重新登录，错误代码：401'
          break;
      case 403:
          error.message = '拒绝访问，错误代码：403'
          break;
      case 404:
          error.message = '请求错误,未找到该资源，错误代码：404'
          break;
      case 405:
          error.message = '请求方法未允许，错误代码：405'
          break;
      case 408:
          error.message = '请求超时，错误代码：408'
          break;
      case 500:
          error.message = '服务器端出错，错误代码：500'
          break;
      case 501:
          error.message = '网络未实现，错误代码：501'
          break;
      case 502:
          error.message = '网络错误，错误代码：502'
          break;
      case 503:
          error.message = '服务不可用，错误代码：503'
          break;
      case 504:
          error.message = '网络超时，错误代码：504'
          break;
      case 505:
          error.message = 'http版本不支持该请求，错误代码：505'
          break;
      default:
          error.message = `连接错误${error.response.status}`
      }
    return Promise.reject(error);
  });

export default service