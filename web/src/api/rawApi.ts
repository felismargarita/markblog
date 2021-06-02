import axios from 'axios'
import urls from './urls'
const service = axios.create({
  baseURL: urls.SERVER, // api的base_url,
  withCredentials:true,
  responseType:'arraybuffer',
})

export default service

