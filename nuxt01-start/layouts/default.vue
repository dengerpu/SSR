<template>
  <div class="d-layout">
        <nuxt/>
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