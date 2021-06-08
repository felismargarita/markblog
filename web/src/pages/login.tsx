import {Form,Button, message} from 'antd'
import Input from '@/components/input/Input'
import useApi from '@/hooks/useApi'
import {history} from 'umi'
import sessionUtils from '@/utils/sessionUtils'
const {Item} = Form
export default ()=>{
  const [form] = Form.useForm()
  const loginAPI = useApi({url:'/user/login',method:'POST'})

  const onLogin = async ()=>{
    const values =await form.validateFields()
    await loginAPI.fetch({data:values})
    sessionUtils.login()
    message.success('登陆成功')
    history.push('/center')
  }
  return (
    <div className="login-page">
      <div className="login-box">
        <Form form={form}>
          <div className="login-box-title">博客控制台</div>
          <Item name="username" rules={[{required:true,message:'请输入用户名'}]}>
            <Input placeholder="请输入用户名"/>
          </Item>
          <Item name="password" rules={[{required:true,message:'请输入密码'}]}>
            <Input type="password" placeholder="请输入密码"/>
          </Item>
          <Item>
            <Button loading={loginAPI.loading} block ghost type="primary" onClick={onLogin}>登陆</Button>
          </Item>
        </Form>
      </div>
    </div>
  )
}