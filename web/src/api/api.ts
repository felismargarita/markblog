import axios from 'axios'
import {message} from 'antd'
import sessionUtils from '../utils/sessionUtils'
const service = axios.create({
  baseURL: '/api/blog', // api的base_url,
  withCredentials:true,
})


// request拦截器
service.interceptors.request.use(config => {
  config.withCredentials=true;
  const token = sessionStorage.getItem('token')
  if(token){
    config.headers['x-auth-token']= token
  }
  return config
}, error => {
  return Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(
  (response) => {
    const token=response.headers['x-auth-token']
    if(token){
        sessionStorage.setItem('token',token)
    }
    const res = response.data;
    if (res.code === 200) {
      return res.info;
    } else if (res.code === 20011) {
      sessionUtils.logout()
      window.location.href='/login'
      return Promise.reject(res)
    } else {
      message.error(res.msg)
      return Promise.reject(res)
    }
  },
  error => {
    message.error(error.msg||'系统超时,请稍后再试')
    return Promise.reject(error)
  }
);
export default service

