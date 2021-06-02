import React from 'react'
import {IBlog} from '@/types/CommonTypes'
import Markdown from 'react-markdown'
import moment from 'moment'
import {ClockCircleOutlined} from '@ant-design/icons'
interface PreviewCardProps extends IBlog {
  onClickMore:()=>void
}

const PreviewCard:React.FC<PreviewCardProps> = ({content,title,createdTime,onClickMore,updatedTime})=>{


  return (
    <div className="preview-card" onClick={onClickMore}>
      <div className="preview-card-title">{title}</div>
      <div className="preview-card-content">
        <Markdown>
          {content}
        </Markdown>
      </div>
      <div className="preview-card-footer">
        <div className="preview-card-time"><ClockCircleOutlined/>发布时间:{moment(createdTime).format('YYYY-MM-DD')}</div>
      </div>
    </div>
  )
}

export default PreviewCard