import React from 'react'
import {history} from 'umi'
import Avatar from '@/components/avatar/Avatar'
import {GithubFilled,LoginOutlined} from '@ant-design/icons'
import {Space} from 'antd'
const header:React.FC = ({children})=>{
  const goLogin = ()=> history.push('/login')
  const goIndex = ()=> history.push('/')
  const openGithub = ()=>window.open('https://github.com/felismargarita')
  return (
    <div className="blog-header-wrapper">
      <div className="blog-header">
          <div className="blog-title-item" onClick={goIndex}><Avatar style={{marginRight:8}} size={32}/>Felis的博客</div>
          <div className="blog-title-item">
            <Space size={18}>
              <LoginOutlined onClick={goLogin}/>
              <GithubFilled onClick={openGithub}/>
            </Space>
          </div>
          {/* <div className="blog-title-item" onClick={goLogin}>登陆/注册</div> */}
      </div>
    </div>
  )
}

export default header