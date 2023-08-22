export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt01-start',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    middleware: 'auth',
    // 扩展路由
    extendRoutes(routes, resolve) {
      console.log(routes)
      routes.push({
        name: 'home',
        path: '/index',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },

  //定义系统默认loading效果
  // loading: {color:'#399', height: ' 3px'},
  // 使用自定义组件
  loading: '~/components/loadding.vue',

  // Global CSS: https://go.nuxtjs.dev/config-css
  // 全局样式
  css: [
    'assets/css/transition.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    //nuxt.config文件,~代表根目录
    '~/plugins/router',
    {
      src: '~/plugins/axios',
      ssr: true // 服务器
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  axios:{
    proxy:true,//开启axios跨域
    // prefix:'/api',//baseUrl
  },
  proxy:{
    '/api/':{
      target:'http://www.006969.xyz:8000',//代理转发的地址
      changeOrigin:true,
      pathRewrite:{
        '^/api':''
      }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
