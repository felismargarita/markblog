import { defineConfig } from 'umi';

export default defineConfig({
  devServer:{
    port:8001
  },
  nodeModulesTransform: {
    type: 'none',
  },
  proxy:{
    '/api': {
      target: 'http://localhost:8080',
      pathRewrite: { '^/api': '' },
      changeOrigin: true
    }
  },
  title:'个人博客',
  locale:{
    default:'zh-CN',
    antd:true
  },
  sass: {
  },
  routes: [
    { path:'/login',component:'@/pages/Login' },
    { 
      path:'/center',
      component:'@/pages/Center',
      wrappers:['@/wrappers/Auth'],
      routes:[
        {
          path:'manage',
          component:'@/pages/Manage'
        },
        {
          path:'paper',
          component:'@/pages/Paper'
        },
        {
          path:'userinfo',
          component:'@/pages/UserInfo'
        }
      ]
    },
    { 
      path: '/', 
      component: '@/pages/Index',
      routes:[
        {
          exact:true,
          path:'blog',
          component:'@/pages/Blog'
        },
        {
          component: '@/pages/BlogList',
        },
      ]
    },
  ],
  hash:true,
  fastRefresh: {},
});
