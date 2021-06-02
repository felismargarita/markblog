export interface IPagination {
  current:number
  pageSize:number
}

export interface IPaginationData<T=any> {
  total:number
  records:T[]
}

export interface IBlog {
  id:number
  title:string
  content:string
  createdTime:string
  updatedTime:string
  createdBy:string
  updatedBy:string
}