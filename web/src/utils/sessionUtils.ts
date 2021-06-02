export default {
  login(){
    sessionStorage.setItem('isLogin','true')
  },
  logout(){
    sessionStorage.removeItem('isLogin')
  },
  isLogin(){
    return !!sessionStorage.getItem('isLogin')
  }
}
