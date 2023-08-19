<template>
  <div>
    商品详情页面{{ $route.params }}
  </div>
</template>

<script>
export default {
  // 参数有效性判断
  validate({ params, query }) {
    return  typeof params.id === 'number'
  },
  // transition: '动画名'
  transition: 'test'
}
</script>

<style scoped>
/**
  .test-enter-active, .test-leave-active {
    transition: .5s ease all;
  }
  .test-enter, .test-leave-active {
    margin-left: -1000px;
  }  
*/
</style>