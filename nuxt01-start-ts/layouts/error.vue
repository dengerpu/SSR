<template>
  <div>
    <h1 v-if="error.statusCode">{{error.message}}</h1>
    <h1 v-else>应用发生异常</h1>
    <button @click="$router.replace('/index')">跳转到首页</button>
  </div>
</template>

<script lang="ts">
import {Vue,Component,Prop} from 'vue-property-decorator'
@Component
export default class Error extends Vue{
  @Prop() readonly error:string|undefined
}

// export default {
//     // 接受错误信息 error: {statusCode, message }
//     props: ['error']
// }
</script>

<style>

</style>