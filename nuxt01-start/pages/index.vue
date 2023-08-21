<template>
  <div>
    <h1>首页</h1>
    <h3>{{title}}</h3>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "default",
  // middleware: 'auth' // 页面层级中间件定义
  middleware({store,route,redirect,params,query}) {
    //context 服务端上下文
    //全局守卫前置业务
    //store 状态树信息
    //route 一条目标路由信息
    // redirect 强制跳转
    //params,query 校验参数合理性
    // console.log('middleware layouts 全局守卫前置业务')
    // console.log("middleware->pages/index.vue");
    // redirect('/userinfo')
  },
  // 参数的有效性
  validate({ params, query }) {
    console.log("validate", params, query);
    return true; // true页面才会显示
  },

  // 组件独享后置守卫
  beforeRouteLeave(to,from,next){
    let b1 = window.confirm('是否要离开')
    next(b1)
  },     
  // 读数据，返回给组件
  async asyncData({$axios}) {
    // 异步业务逻辑，读取服务器数据
    let res = await $axios({url: '/data/list.json'})
    console.log('读取到的静态数据', res.data)
    // 返回的数据会和data里面的数据合并
    return {
      title: res.data.title
    }
  },

  // 读数据，返回给vuex
  async fetch({ store, $axios}) {
    // 异步业务逻辑，读取服务器数据提交给vuex
    // 测试跨域数据
    let res = await $axios({url: '/api/sys/user'})
    console.log('读取的跨域数据', res.data)
    console.log("fetch");
  },
  //SSR && CSR
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    // console.log('created',this)
    console.log("created");
  },

  //CSR   window this指向组件
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log("mounted")
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log("updated")
  },
  beforeDestroy() {
    console.log('beforeDestroy')
  },
  destroyed() {
    console.log('destroyed')
  },

  ///服务端渲染 激活、失活 不存在
  // activated(){},
  // deactivated(){},
  data() {
    return {
      a: 1,
      b: 1111,
    };
  },
};
</script>
