<template>
  <Tutorial/>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
  // middleware: 'auth' // 页面层级中间件定义
  middleware() {
    console.log('middleware->pages/index.vue')
  }
}
</script>
