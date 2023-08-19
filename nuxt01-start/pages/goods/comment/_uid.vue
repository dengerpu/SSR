<template>
  <div>
    评论页面{{ $route.params }}
  </div>
</template>

<script>
export default {
  // 参数有效性判断
  validate({ params, query }) {
    return  typeof params.uid === 'number'
  }
}
</script>

<style>

</style>