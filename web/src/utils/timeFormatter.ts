import dayjs from 'dayjs'

export default (time:any)=>{
  if(!time){
    return ''
  }
  return dayjs(time).format('YYYY-MM-DD HH:mm:ss')

}
