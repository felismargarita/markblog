import React from 'react'

interface LoadMoreProps {
  onClick:()=>void
}

const LoadMore:React.FC<LoadMoreProps> = ({onClick})=>{

  return (
    <div className="load-more" onClick={()=>onClick()}>
      <span className="load-more-text">
        加载更多
      </span>
    </div>
  )
}

export default LoadMore