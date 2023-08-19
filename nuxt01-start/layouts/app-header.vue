<template>
  <div>
        <!-- 跳转  声明式跳转 router-link -->
        <nuxt-link to="/index" exact-active-class="app_header--active">首页</nuxt-link>
        <nuxt-link to="/goods" active-class="app_header--active">商品页面</nuxt-link>
        <nuxt-link to="/userinfo" active-class="app_header--active">用户信息</nuxt-link>
        <nuxt-link :to="{name:'login',query:{a:11,b:22}}" active-class="app_header--active">登陆页面</nuxt-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.app_header--active {
    color: red;
    background-color: blueviolet;
}
</style>