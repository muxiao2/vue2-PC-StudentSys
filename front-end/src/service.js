import axios from 'axios'
// 二次封装
const service = axios.create({
    //baseURL:全局请求地址根路径
    // baseURL: 'http://rap2api.taobao.org/app/mock/301642/',
    baseURL: 'http://localhost:3000/',
    // baseURL: '/api'
    // 指定请求超时的毫秒数，超时请求自动中断
    timeout:1000,
    // 请求头
    headers: {
        'Content-type': 'application/json;charset=utf-8'
    }
})

//添加请求拦截器
service.interceptors.request.use(function(config) {
    // 在发送请求前做什么
    return config
}, function(error) {
    return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function(response) {
    // 对响应数据做些什么
    return response
}, function(error) {
    // 响应错误做些什么
    return Promise.reject(error)
})
// 导出
export default service