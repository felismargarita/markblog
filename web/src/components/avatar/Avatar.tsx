import React from 'react'
interface AvatarProps {
  size?:number
  style?:React.CSSProperties
}

const Avatar:React.FC<AvatarProps> = ({size,style})=>{

  const sizeStyle:React.CSSProperties = size 
  ? {width:size,height:size,borderRadius:size/2}
  : {}

  return (
    <div className="blog-avatar" style={{...sizeStyle,...style}}>
      <img alt="avatar" className="blog-avatar-img"  src="/blogapi/avatar/read"/>
    </div>
  )
}
export default Avatar