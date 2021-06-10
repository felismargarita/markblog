import React from 'react'
import PreviewCard from '@/components/previewCard/PreviewCard'
import LoadMore from '@/components/loadMore/LoadMore'
import { useEffect, useState } from 'react'
import {history} from 'umi'
import useApi from '@/hooks/useApi'
import usePagination from '@/hooks/usePagination'
import {IBlog,IPaginationData} from '@/types/CommonTypes'

interface BlogListProps {
  tag?:string
}

const BlogList:React.FC<BlogListProps> = ({tag})=>{
  const {pagination,next} = usePagination()
  const [blogs,setBlogs] = useState<IBlog[]>([])
  const pageBlogAPI = useApi<IPaginationData<IBlog>>(
    {
      url:'/blog/paging',
      method:'POST',
      data:{...pagination,params:{tag}}
    },{immediate:true},[pagination,tag]
    )
  useEffect(()=>{
    setBlogs([])
  },[tag])
  useEffect(()=>{
    if(!pageBlogAPI.data){
      return
    }
    setBlogs([...blogs,...pageBlogAPI.data.records])
  },[pageBlogAPI.data])

  return (
    <div className="blog-content-list">
    {
      blogs.map(b=>(
        <div key={b.id}  className="blog-preview-container">
          <PreviewCard 
            {...b}
            onClickMore={()=>{
              history.push({
                pathname:'/blog',
                query:{id:b.id}
              })
            }}
          />
        </div>
      ))
    }
    <div className="blog-pagination">
      {
        pageBlogAPI.data?.current === pageBlogAPI.data?.pages
        ? null
        : <LoadMore onClick={next}/>
      }
    </div>
    </div>
  )
}

export default BlogList