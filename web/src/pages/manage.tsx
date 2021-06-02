import {Button, message, Popconfirm, Table} from 'antd'
import useAntdTable from '@/hooks/useAntdTable'
import timeFormatter from '@/utils/timeFormatter'
import useApi from '@/hooks/useApi'
import {history} from 'umi'
export default ()=>{
  const {tableProps,onSearch} = useAntdTable('/blog/paging')
  const deleteAPI = useApi({url:'/blog/delete',method:'delete'})
  const onDelete =(id:number)=>{
    deleteAPI.fetch({params:{id}}).then(()=>{
      message.success('删除成功')
      onSearch()
    })
  }
  return (
    <Table
      columns={[
        {title:'标题',dataIndex:'title'},
        {title:'发布时间',dataIndex:'createdTime',render:timeFormatter},
        {title:'更新时间',dataIndex:'updatedTime',render:timeFormatter},
        {title:'操作',render:(row)=>{
          return (
            <Button.Group size="small">
              <Button onClick={()=>history.push({
                pathname:'/center/paper',
                query:{
                  id:row.id
                }
              })}>修改</Button>
              <Popconfirm okButtonProps={{danger:true}} title="是否确认删除" onConfirm={()=>onDelete(row.id)}>
                <Button danger>删除</Button>
              </Popconfirm>
            </Button.Group>
          )
        }}
      ]}
      {...tableProps}
      rowSelection={undefined}
    />
  )
}