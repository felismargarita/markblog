import React, { useState } from 'react'
import {Input,Menu,Layout,Row,Col, Space, Button} from 'antd'
import {history} from 'umi'

const {Sider,Content} = Layout
const { Item } = Menu
const center:React.FC = (props)=>{
  return (
    <Layout>
      <Sider
        width={160}
        style={{height:'100vh'}}>
        <Menu theme="dark">
          <Item onClick={()=>history.push('/')}>首页</Item>
          <Item onClick={()=>history.push('/center/manage')}>文章管理</Item>
          <Item onClick={()=>history.push('/center/paper')}>创作中心</Item>
        </Menu>
      </Sider>
      <Content style={{padding:8}}>
        {props.children}
      </Content>
    </Layout>
  )
}

export default center