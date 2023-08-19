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