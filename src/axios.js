// 自定义 axios 实例
import axios from 'axios'

const service = axios.create({
    baseURL: "http://127.0.0.1:4523/m1/2571700-0-default/api"
})

export default service