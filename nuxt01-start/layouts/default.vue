<template>
  <div class="d-layout">
    <app-header v-if="bNav"></app-header>
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
  },
  data(){
    return {
      bNav:true
    }
  },
  watch:{
    $route:{
      immediate:true,
      handler(route){
        if(/login|reg/.test(route.path)){
          this.bNav=false;
        }else{
          this.bNav=true;
        }
      }
    }
  },
}
</script>

<style scoped>
</style>