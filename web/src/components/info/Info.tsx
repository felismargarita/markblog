import React from 'react'
import Avatar from '../avatar/Avatar'
import useApi from '@/hooks/useApi'
import {IBlog} from '@/types/CommonTypes'
import _ from 'lodash'
import {LayoutFilled,TagFilled,MailFilled} from '@ant-design/icons'
import {randomColor,colors} from '@/utils/colors'
import {history} from 'umi'
interface ITagStatistic {
  tag:string
  count:number
}

const goBlogTag = (tag:string)=>history.push({
  pathname:'/blogtag',
  query:{tag}
})
const shuffledColors = _.shuffle(colors)

const calTags = (tags?:string[])=>{
  if(!tags){
    return []
  }
  const list = tags.reduce<ITagStatistic[]>((pre,curr:string)=>{
    const exist = pre.find(p=>p.tag === curr)
    if(exist){
      exist.count ++
      return pre
    }else{
      return [...pre,{tag:curr,count:1}]
    }
  },[])
  if(list.length>5){
    return _.sortBy(list,'count').reverse().slice(0,5)
  }
  return _.sortBy(list,'count').reverse()
}


export default ()=>{

  const allBlogsAPI = useApi<IBlog[]>({url:'/blog/all'},{immediate:true})
  const tags = allBlogsAPI.data?.reduce<string[]>((pre,curr)=>{
    return [...pre,...curr.tags]
  },[])
  return (
    <div className="blog-info">
      <div className="blog-info-avatar">
        <Avatar size={80}/>
      </div>
      <div className="blog-info-title">Felis</div>
      <div className="blog-info-statistic">
        <div className="blog-info-statistic-item">
          <div className="blog-info-statistic-count">
            {allBlogsAPI.data?.length}
          </div>
          <div className="blog-info-statistic-tag">
            Article
          </div>
        </div>
        <div className="blog-info-statistic-divider"></div>
        <div className="blog-info-statistic-item">
          <div className="blog-info-statistic-count">{_.uniq(tags).length}</div>
          <div className="blog-info-statistic-tag">Tag</div>
        </div>
      </div>
      <div className="blog-info-horizental-divider"></div>
      <div className="blog-info-mail"><MailFilled/> Contact Me</div>
      <div className="blog-info-address">
        felismargarita@hotmail.com
      </div>
      <div className="blog-info-horizental-divider"></div>
      <div className="blog-info-category"><LayoutFilled/> Category</div>
      <div className="blog-info-category-info">
        {
          calTags(tags).map((tagInfo,index)=>(
            <div key={tagInfo.tag} onClick={()=>goBlogTag(tagInfo.tag)} className="blog-info-category-card">
              <div className="blog-info-category-name">{tagInfo.tag}</div>
              <div className="blog-info-category-count" style={{background:shuffledColors[index]}}>{tagInfo.count}</div>
            </div>
          ))
        }
      </div>
      <div className="blog-info-horizental-divider"></div>
      <div className="blog-info-tag-title"><TagFilled/> Tag</div>
      <div className="blog-info-tags">
        {
          _.uniq(tags).map(tag=><div key={tag} onClick={()=>goBlogTag(tag)}  style={{background:randomColor()}} className="blog-info-tag">{tag}</div>)
        }
      </div>
    </div>
  )
}