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
  }
}
</script>

<style>

</style>