import ReactMarkdown from 'react-markdown'
import useApi from '@/hooks/useApi'
export default function IndexPage() {
  const blogAPI = useApi({url:'/blog/test',method:'GET'},{immediate:true})
  return (
    <div>
      <ReactMarkdown>
        {blogAPI.data}
      </ReactMarkdown>
    </div>
  );
}
