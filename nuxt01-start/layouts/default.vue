<template>
  <div class="d-layout">
    <app-header></app-header>
    <!-- 展示区  ~~ router-view -->
    <nuxt />
  </div>
</template>

<script>
import appHeader from './app-header.vue'
export default {
  components: { appHeader },
    // middleware: 'auth' // 页面层级中间件定义
  middleware({store,route,redirect,params,query}) {
    //context 服务端上下文
    //全局守卫前置业务
    //store 状态树信息
    //route 一条目标路由信息
    // redirect 强制跳转
    //params,query 校验参数合理性
    // console.log('middleware layouts 全局守卫前置业务')
    // console.log('middleware->layouts/default.vue')
    // redirect('/login')
  }
}
</script>

<style scoped>
.d-layout {
    width: 100%;
    height: 100%;
    border: 1px solid red;
    background-color: #ccc;
}
</style>