
import React from 'react'
import {Button, Form, Input,Card, Space, Upload, message} from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
import useApi from '@/hooks/useApi'
export default ()=>{
  const [form] = Form.useForm()
  const [uploading,setUploading] = React.useState(false)
  const passwordAPI = useApi({url:'/user/changePassword',method:'PUT'})
  const submit = async ()=>{
    const {password2:password} = await form.validateFields()
    await passwordAPI.fetch({params:{password}})
    message.success('密码修改成功')
    form.resetFields()
  }
  return (
    <div>
      <Space direction="vertical">
      <Card title="logo编辑">
        <Upload
          listType="picture-card"
          headers={{
            'x-auth-token':sessionStorage.getItem('token') || ''
          }}
          showUploadList={false}
          onChange={info=>{
            const {response,status} = info.file
            if(status === 'uploading'){
              setUploading(true)
            }
            if(status === 'done'){
              if(response.code === 20011){
                message.warn(response.info)
                window.location.href = '/'
                setUploading(false)
              }
              if(response.code === 200){
                setUploading(false)
              }
            }
          }}
          action="/api/blog/avatar/upload">
            {
              uploading
              ? <LoadingOutlined/>
              : <img src={"/api/blog/avatar/read"} className="logo-upload-img" alt="avatar" style={{ width: '100%' }} />
            }
        </Upload>
      </Card>
      <Card title="密码修改">
        <Form form={form} size="small">
          <Form.Item label="新的密码" name="password1" rules={[{required:true,message:'密码必填'}]}>
            <Input.Password/>
          </Form.Item>
          <Form.Item label="确认密码"
            name="password2"
            rules={[
              {required:true,message:'密码必填'},
              {min:8,message:'密码最少8位'},
              {validator:(rule,value)=>{
                const {password1} = form.getFieldsValue()
                if(value && value!==password1){
                  return Promise.reject('密码输入不一致')
                }
                return Promise.resolve()
              }}
              ]}>
            <Input.Password/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={submit} loading={passwordAPI.loading}>确认修改</Button>
          </Form.Item>
        </Form>
      </Card>
      </Space>
    </div>
  )
}
