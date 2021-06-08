import {Layout} from 'antd'
import '@/style/style.scss'
import {BackTop} from 'antd'
import Header from '@/components/header/header'

const {Content} = Layout
const index:React.FC = ({children}) => {

  return (
    <div>
      <BackTop/>
      <Layout>
        <Header/>
        <Content>{children}</Content>
      </Layout>
    </div>
  );
}

export default index
