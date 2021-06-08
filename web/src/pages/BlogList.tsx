import PreviewCard from '@/components/previewCard/PreviewCard'
import Info from '@/components/info/Info'
import LoadMore from '@/components/loadMore/LoadMore'
import { useEffect, useState } from 'react'
import {history} from 'umi'
import useApi from '@/hooks/useApi'
import usePagination from '@/hooks/usePagination'
import {IBlog,IPaginationData} from '@/types/CommonTypes'
import Cover from '@/components/cover/Cover'

export default ()=>{
  const {pagination,next} = usePagination()
  const [blogs,setBlogs] = useState<IBlog[]>([])
  const pageBlogAPI = useApi<IPaginationData<IBlog>>(
    {
      url:'/blog/paging',
      method:'POST',
      data:{...pagination}
    },{immediate:true},[pagination]
    )
  useEffect(()=>{
    if(!pageBlogAPI.data){
      return
    }
    setBlogs([...blogs,...pageBlogAPI.data.records])
  },[pageBlogAPI.data])

  return (
    <>
      <Cover/>
      <div className="blog-content">
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
        <div>
          <Info/>
        </div>
      </div>
    </>
  )
}