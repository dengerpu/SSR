<template>
  <div> 
    评论页面
    <hr>
    <nuxt-link :to="{name: 'goods-comment-uid', params: {uid: 1}, query: {a: 111, b: 2222}}">评论01</nuxt-link>
    <nuxt-link to="/goods/comment/2?a=111&b=222">评论02</nuxt-link>

    <nuxt/>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>