export interface IPagination {
  current:number
  size:number
}

export interface IPaginationData<T=any> {
  total:number
  records:T[]
  current:number
  pages:number
}

export interface IBlog {
  id:number
  title:string
  content:string
  createdTime:string
  updatedTime:string
  createdBy:string
  updatedBy:string
  tags:string[]
}