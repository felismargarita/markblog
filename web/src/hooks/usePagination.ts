import {IPagination} from '@/types/CommonTypes'
import {useCallback, useState} from 'react'

export default <T=any>(initData?:IPagination)=>{
  const [pagination,setPagination] = useState<IPagination>(initData || {current:1,size:10})


  const prev = useCallback(()=>{
    const {current,size} = pagination
    if(current>1){
      setPagination({current:current - 1,size})
    }else{
      setPagination({...pagination})
    }
  },[pagination,setPagination])

  const next = useCallback(()=>{
    const {current,size} = pagination
    setPagination({current:current + 1,size})
  },[pagination,setPagination])

  const init = useCallback(()=>{
    setPagination(initData || {current:1,size:10})
  },[pagination,setPagination,initData])

  return {
    pagination,
    setPagination,
    prev,
    next,
    init
  }
}