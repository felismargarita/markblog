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
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  hash:true,
  fastRefresh: {},
});
