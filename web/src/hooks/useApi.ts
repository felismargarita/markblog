import {useEffect,useState} from 'react'
import api from '../api/api'
import { message } from 'antd'

 type httpMethod = 'get'|'GET'|'post'|'POST'|'put'|'PUT'|'delete'|'DELETE'
export {httpMethod}
interface AxiosProps {
  url:string,
  params?:object,
  method?:httpMethod,
  data?:object
}

interface OutputProps<V=any> {
  loading:boolean
  data:V|undefined
  status:boolean
  error:any
}

interface OptionsProps {
  immediate?:boolean,
  successMsg?:string|React.ReactNode,
}

const initialState = {loading:false,data:undefined,status:false,error:undefined}

function useApi<T=any>(axiosconfig:AxiosProps,options?:OptionsProps,dependencies:Array<any>=[]){
  const [output,setOutput]=useState<OutputProps<T>>(initialState)
  const fetch = (overwriteConfig?:Partial<AxiosProps>)=>{
    setOutput({loading:true,data:undefined,status:false,error:undefined})
    return new Promise<T>((resolve,reject)=>{
      api({
        method:'get',
        ...axiosconfig,
        ...overwriteConfig
      }).then((res:unknown)=>{
        if(options?.successMsg){
          message.success(options.successMsg)
        }
        setOutput({loading:false,data:res as T,status:true,error:undefined})
        resolve(res as T)
      }).catch(err=>{
        setOutput({loading:false,data:undefined,status:false,error:err})
        reject()
      })
    })
  }

  const reset = ()=>setOutput(initialState)

  useEffect(()=>{
    if(options?.immediate){
      fetch()
    }
  },dependencies)

  return {...output,fetch,reset}
}

export default useApi