
import useApi from '@/hooks/useApi'
import React from 'react'
import {message, Spin} from 'antd'
import {IBlog} from '@/types/CommonTypes'
import Markdown from '@/components/Markdown'
import {history} from 'umi'

const blog:React.FC<any> = (props)=>{
  const id = props?.location?.query?.id
  if(!id){
    history.push('/')
  }
  const blogAPI = useApi<IBlog>({url:'/blog/getById',params:{id}},{immediate:true},[id])
  return (
    <Spin spinning={blogAPI.loading}>
      <div className="blog-page">
        <div className="blog-page-title">{blogAPI.data?.title}</div>
        <div className="blog-page-content">
          <Markdown>
            {blogAPI.data?.content || ''}
          </Markdown>
        </div>
      </div>
    </Spin>
  )
}
export default blog