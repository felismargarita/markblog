import React from 'react'
import {IBlog} from '@/types/CommonTypes'
import moment from 'moment'
import {ClockCircleFilled,TagFilled} from '@ant-design/icons'

interface PreviewCardProps extends IBlog {
  onClickMore:()=>void
}

const PreviewCard:React.FC<PreviewCardProps> = ({content,title,tags,createdTime,onClickMore,updatedTime})=>{


  return (
    <div className="preview-card" onClick={onClickMore}>
      <span className="preview-card-title">{title}</span>
      <div className="preview-card-footer">
        <div className="preview-card-time">
          <ClockCircleFilled style={{marginRight:4}}/>发布时间:{moment(createdTime).format('YYYY-MM-DD')}
        </div>
        <div className="preview-card-tags">
          {
            tags && tags.length
            ?
            <>
            <TagFilled/>
            {
              tags.map(tag=><span className="preview-card-tag" key={tag}>{tag}</span>)
            }
            </>
            :null
          }
        </div>
      </div>
    </div>
  )
}

export default PreviewCard