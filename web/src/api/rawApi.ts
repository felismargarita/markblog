import axios from 'axios'
const service = axios.create({
  baseURL: '/api', // api的base_url,
  withCredentials:true,
  responseType:'arraybuffer',
})

export default service

