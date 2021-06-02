import axios, { AxiosResponse } from 'axios'
import urls from './urls'
import {message} from 'antd'
import sessionUtils from '../utils/sessionUtils'
import {history} from 'umi'
const service = axios.create({
  baseURL: urls.SERVER, // api的base_url,
  withCredentials:true,
})


// request拦截器
service.interceptors.request.use(config => {
  config.withCredentials=true;
  return config
}, error => {
  return Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(
  (response) => {
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

