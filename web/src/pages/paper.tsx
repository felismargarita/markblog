import {useState} from 'react'
import ReactMarkdown from 'react-markdown'
import {Input,Row,Col, Space, Button,Form, message} from 'antd'
import useApi from '@/hooks/useApi'

export default ()=>{
  const [form] = Form.useForm() 
  const publishAPI = useApi({url:'/blog/add',method:'POST'})
  const onPublish = async ()=>{
    const formData = form.getFieldsValue(true)
    const {title} = formData
    if(!title){
      message.warn('请输入标题')
      return
    }
    await publishAPI.fetch({data:formData})
    message.success('发布成功')
  }
  return (
    <div>
      <Form form={form}>
        <Row style={{marginBottom:4}} gutter={8}>
            <Col span={12}>
              <Form.Item name="title">
                <Input placeholder="请输入标题..."/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Space>
                <Button>保存草稿</Button>
                <Button type="primary" onClick={onPublish} loading={publishAPI.loading}>发布</Button>
              </Space>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item name="content">
                <Input.TextArea/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <div style={{background:'#fff'}}>
                <Form.Item noStyle shouldUpdate>
                  {
                    ()=>(
                      <ReactMarkdown>
                      {form.getFieldValue('content')}
                    </ReactMarkdown>
                    )
                  }
                </Form.Item>
              </div>
            </Col>
          </Row>
        </Form>
    </div>
  )
}