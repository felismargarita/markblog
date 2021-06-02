import {useEffect,useState} from 'react'
import api from '../api/rawApi'
import { message } from 'antd'

 type httpMethod = 'get'|'GET'|'post'|'POST'|'put'|'PUT'|'delete'|'DELETE'
export {httpMethod}
interface axiosProps {
  method:httpMethod,
  url:string,
  params?:object,
  data?:object
}

interface OutputProps<V=any> {
  loading:boolean
  data:V|undefined
  status:boolean
  error:any
}

interface OptionsProps {
  immediate:boolean,
  successMsg?:string|React.ReactNode,
}


function useApi<T=any>(axiosconfig:axiosProps,options:OptionsProps,dependencies:Array<any>=[]){
  const [output,setOutput]=useState<OutputProps<T>>({loading:false,data:undefined,status:false,error:undefined})
  const fetch = (overwriteConfig?:Partial<axiosProps>)=>{
    setOutput({loading:true,data:undefined,status:false,error:undefined})
    return new Promise<T>((resolve,reject)=>{
      api({
        ...axiosconfig,
        ...overwriteConfig
      }).then((res:unknown)=>{
        if(options.successMsg){
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

  useEffect(()=>{
    if(options.immediate){
      fetch()
    }
  },dependencies)

  return {...output,fetch}
}

export default useApi