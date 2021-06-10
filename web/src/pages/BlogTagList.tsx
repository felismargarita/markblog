import BlogList from './BlogList'
import useApi from '@/hooks/useApi'
import {randomColor} from '@/utils/colors'
import {history} from 'umi'
const goBlogTag = (tag:string)=>history.push({
  pathname:'/blogtag',
  query:{tag}
})

const BlogTagList:React.FC<any> = (props)=>{

  const allTagsAPI = useApi<string[]>({url:'/tag/all'},{immediate:true})
  return (
    <div className="blog-tag-list-page">
      <div className="blog-tag-list-tags">
        {
          allTagsAPI
          .data
          ?.map(tag=>(
            <div 
              onClick={()=>goBlogTag(tag)} 
              style={{background:randomColor()}} 
              className="blog-tag-list-tag" 
              key={tag}>{tag}</div>
          ))
        }
      </div>
      <BlogList tag={props.location?.query?.tag}/>
    </div>
  )
}

export default BlogTagList