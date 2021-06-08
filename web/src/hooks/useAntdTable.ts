import useApi from '@/hooks/useApi'
import {TablePaginationConfig,TableProps} from 'antd/lib/table/index'
import React, { useEffect, useState } from 'react'
import {IPagination,IPaginationData} from '@/types/CommonTypes'
import {Form} from 'antd'


const useAntdTable = <T extends {id:number,revision:number}>(tableUrl:string,callbacks?:{
  onDoubleClickRow?:(key:number,row:T)=>void,
  onLoading?:()=>void
  onLoaded?:(dataSource?:T[])=>void
})=>{
  const [pagination,setPagination] = useState<IPagination>({current:1,size:10})
  const [selected,setSelected] = useState<{rows:T[],keys:any[]}>({rows:[],keys:[]})
  const [searchForm] = Form.useForm()
  const tableApi = useApi<IPaginationData<T>>({url:tableUrl,method:'POST'},{immediate:false},[tableUrl,pagination])
  const onSearch = ()=>{
    setPagination({current:1,size:pagination.size})
  }
  const {onDoubleClickRow,onLoading,onLoaded} = (callbacks || {})

  useEffect(()=>{
    setSelected({rows:[],keys:[]})
    onLoading?.()
    tableApi.fetch({data:{
      ...pagination,
      params:searchForm.getFieldsValue(),
      orders:[
        {
          column:'id',
          asc:false
        }
      ]
    }}).then((res)=>onLoaded?.(res.records)).catch(()=>onLoaded?.())
  },[pagination])

  const paginationProps:TablePaginationConfig = {
    total:tableApi.data?.total,
    size:'small',
    current:pagination.current,
    showTotal:total=>`总共${total}条`,
    showSizeChanger:true,
    onChange:(current,size)=>setPagination({current,size:size||10}),
    onShowSizeChange:(current,size)=>setPagination({current:1,size:size||10}),
  }

  const tableProps:TableProps<T> = {
    rowKey:'id',
    size:'small',
    scroll:{x:'max-content'},
    dataSource:tableApi.data?.records,
    loading:tableApi.loading,
    pagination:paginationProps,
    rowSelection:{
      type:'radio',
      columnTitle:'选择',
      selectedRowKeys:selected.keys,
      onChange:(keys,rows)=>setSelected({keys,rows})
    },
    onRow:(row)=>{
      return ({
          onClick:()=>setSelected({rows:[row],keys:[row.id]}),
          onDoubleClick:()=>onDoubleClickRow?.(row.id,row)
      })
    },
  }


  return {
    tableProps,
    selected,
    onSearch,
    searchForm
  }
}

export default useAntdTable