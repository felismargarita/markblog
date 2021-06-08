import {useEffect} from 'react'
import Markdown from '@/components/Markdown'
import {Input,Row,Col, Space, Button,Form, message} from 'antd'
import useApi from '@/hooks/useApi'
import {IBlog} from '@/types/CommonTypes'
import TagSelect from '@/components/TagSelect'

const paper:React.FC<any> = (props)=>{
  const id = props?.location?.query?.id //文章ID
  const [form] = Form.useForm() 
  const publishAPI = useApi({url:'/blog/add',method:'POST'})
  const updateAPI = useApi({url:'/blog/update',method:'PUT'})
  const blogAPI = useApi<IBlog>({url:'/blog/getById',params:{id}})
  
  useEffect(()=>{
    if(id){
      blogAPI.fetch().then(blog=>{
        const {title,content,tags} = blog
        form.setFieldsValue({title,content,tags})
      })
    }
  },[id])
  const onSubmit = async ()=>{
    const formData = form.getFieldsValue(true)
    const {title} = formData
    if(!title){
      message.warn('请输入标题')
      return
    }
    if(id){
      await updateAPI.fetch({data:{...formData,id}})
    }else{
      await publishAPI.fetch({data:formData})
    }
    message.success('发布成功')
  }
  return (
    <div>
      <Form form={form}>
        <Row style={{marginBottom:4}} gutter={8}>
            <Col span={12}>
              <Form.Item name="title" label="标题">
                <Input placeholder="请输入标题..."/>
              </Form.Item>
              <Form.Item name="tags" label="标签">
                <TagSelect/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Space>
                <Button>保存草稿</Button>
                <Button type="primary" onClick={onSubmit} loading={publishAPI.loading || updateAPI.loading}>发布</Button>
              </Space>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item name="content">
                <Input.TextArea style={{height:600}}/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <div style={{background:'#fff'}}>
                <Form.Item noStyle shouldUpdate>
                  {
                    ()=>(
                      <Markdown>
                      {form.getFieldValue('content')}
                    </Markdown>
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

export default paper