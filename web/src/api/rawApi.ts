import axios from 'axios'
const service = axios.create({
  baseURL: '/blogapi', // api的base_url,
  withCredentials:true,
  responseType:'arraybuffer',
})

export default service

