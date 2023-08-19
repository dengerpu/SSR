<template>
  <div class="d-layout">
    <!-- 跳转  声明式跳转 router-link -->
    <nuxt-link to="/">首页</nuxt-link>
    <nuxt-link to="/goods">商品页面</nuxt-link>
    <nuxt-link to="/userinfo">用户信息</nuxt-link>
    <nuxt-link :to="{name:'login',query:{a:11,b:22}}">登陆页面</nuxt-link>
    <!-- 展示区  ~~ router-view -->
    <nuxt />
  </div>
</template>

<script>
export default {
    // middleware: 'auth' // 页面层级中间件定义
    middleware() {
        console.log('middleware->layouts/default.vue')
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