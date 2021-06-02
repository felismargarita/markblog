import moment from 'moment'

export default (time:any)=>{
  if(!time){
    return ''
  }
  return moment(time).format('YYYY-MM-DD HH:mm:ss')

}