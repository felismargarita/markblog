import { defineConfig } from 'umi';

export default defineConfig({
  devServer:{
    port:8001
  },
  nodeModulesTransform: {
    type: 'none',
  },
  base:'/blog/',
  publicPath:'/blog/',
  proxy:{
    '/blogapi': {
      target: 'http://localhost:4566',
      pathRewrite: { '^/blogapi': '' },
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
      component: '@/pages/Layout',
      routes:[
        {
          exact:true,
          path:'blog',
          component:'@/pages/Blog'
        },
        {
          exact:true,
          path:'blogtag',
          component:'@/pages/BlogTagList'
        },
        {
          component: '@/pages/Index',
        },
        
      ]
    },
  ],
  hash:true,
  fastRefresh: {},
});
