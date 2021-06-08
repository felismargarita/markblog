import React from 'react'
import useApi from '@/hooks/useApi'
import {Select} from 'antd'


const TagSelect:React.FC = ({children,...rest})=>{
  const tagsAPI = useApi<string[]>({url:'/tag/all'},{immediate:true})
  return (
    <Select mode="tags" {...rest}>
      {
        tagsAPI.data?.map(name=><Select.Option key={name} value={name}>{name}</Select.Option>)
      }
    </Select>
  )
}

export default TagSelect