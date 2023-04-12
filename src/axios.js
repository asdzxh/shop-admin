// 自定义 axios 实例
// import { useCookies } from '@vueuse/integrations'
import axios from 'axios'
import { ElNotification } from 'element-plus'


const service = axios.create({
    baseURL: "http://127.0.0.1:4523/m1/2571700-0-default/api"
})

// //添加请求拦截
// service.interceptors.request.use(function (config) {
//     //从cookie 中取出token
//     const cookie = useCookies()
//     const token = cookie.get('admin-token')

//     //如果不同，向header中添加token
//     if (token) {
//         config.headers['token'] = token

//     }
//     return config;

// }, function (error) {
//     //对于请求出错，可以做的处理
//     return Promise.reject(error)
// })


// //添加相应拦截
// service.interceptors.response.use(function (res) {
//     //对应数据处理
//     return res.data.data;
// }, function (error) {
//     //对于相应错误信息的处理
//     ElNotification({
//         message: err.response.data.msg || '请求失败',
//         type: 'error',
//         duration: 2000
//     })
//     return Promise.reject(error)
// })


export default service