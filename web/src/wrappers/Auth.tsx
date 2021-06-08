import React from 'react'
import { Redirect } from 'umi';
import sessionUtils from '../utils/sessionUtils'
const Auth: React.FC= function(props){
  const isLogin=sessionUtils.isLogin()
  return isLogin?<div>{props.children}</div>:<Redirect to="/"/>
}
export default Auth