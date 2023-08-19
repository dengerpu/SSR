<template>
  <div>
    商品页面
    <hr>
    <nuxt-link to="/goods/1?a=1&b=2">商品01</nuxt-link>
    <nuxt-link :to="{name:'goods-id',params:{id:2},query:{a:111,b:222}}">商品02</nuxt-link>
    <nuxt-link :to="{name:'goods-id',params:{id:3},query:{a:111,b:222}}">商品03</nuxt-link>
    <nuxt-link to="/goods/comment">评论</nuxt-link>
    <nuxt/>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>