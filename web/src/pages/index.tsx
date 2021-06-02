import {Layout} from 'antd'
import '@/style/style.scss'
import {history} from 'umi'
import useApi from '@/hooks/useApi'
import usePagination from '@/hooks/usePagination'
import PreviewCard from '@/components/previewCard/PreviewCard'
import {IBlog,IPaginationData} from '@/types/CommonTypes'
import {Spin} from 'antd'

const {Header,Content} = Layout
export default function IndexPage() {
  const goLogin = ()=> history.push('/login')
  const {pagination,next,prev,init} = usePagination()
  const pageBlogAPI = useApi<IPaginationData<IBlog>>({url:'/blog/paging',method:'POST',data:{pagination}},{immediate:true},[pagination])
  return (
    <div>
      <Layout>
        <Header className="blog-header">
          <div className="blog-title">
            <div className="blog-title-item">Felis的博客</div>
            <div className="blog-title-item" onClick={goLogin}>登陆/注册</div>
          </div>
        </Header>
        <Content>
          <Spin spinning={pageBlogAPI.loading}>
            {
              pageBlogAPI.data?.records.map(b=>(
                <div className="blog-preview-container">
                  <PreviewCard 
                    key={b.id} 
                    {...b}
                    onClickMore={()=>{
                      history.push({
                        pathname:'/blog',
                        query:{id:b.id}
                      })
                    }}
                  />
                </div>
              ))
            }
          </Spin>
        </Content>
      </Layout>
    </div>
  );
}
