import { defineConfig } from 'umi';

export default defineConfig({
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
  sass: {
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path:'/blog',component:'@/pages/blog'},
    { path:'/login',component:'@/pages/login' },
    { 
      path:'/center',
      component:'@/pages/center',
      routes:[
        {
          path:'paper',
          component:'@/pages/paper'
        }
      ]
    },
    
  ],
  hash:true,
  fastRefresh: {},
});
