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
  },

  // 参数的有效性
  validate({params, query}) {
    console.log('validate', params, query)
    return true; // true页面才会显示
  }
}
</script>
