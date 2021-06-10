import Info from '@/components/info/Info'
import Cover from '@/components/cover/Cover'
import BlogList from './BlogList'
export default ()=>{

  return (
    <>
    <Cover/>
    <div className="blog-content">
      <BlogList/>
      <div>
        <Info/>
      </div>
    </div>
  </>
  )
}