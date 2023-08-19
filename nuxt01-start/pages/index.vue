<template>
  <div>
    <h1>首页</h1>
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
  asyncData(context) {
    // 异步业务逻辑，读取服务器数据
    console.log("asyncData");
    // 返回的数据会和data里面的数据合并
    return {
      b: 2,
    };
  },

  // 读数据，返回给vuex
  fetch({ store }) {
    // 异步业务逻辑，读取服务器数据提交给vuex
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
