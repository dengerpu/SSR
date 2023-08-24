<template>
  <div>
    商品详情页面{{ $route.params }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  validate({params,query}){
    return typeof params.id === 'string'
  },
  // transition:'动画名'
  transition:'test',
  
  // asyncData({query,params,app:{$axios}}){
  //   return $axios({
  //     url:`/api/goods/${query.collectionName}/${params.id}`
  //   }).then(
  //     (res:any)=>({detail:res.data.data})
  //   )
  // },
  // head(){
  //   return this.$seo(this.detail.title,this.detail.des,[{}])
  // }
 
})
export default class GoodsDetail extends Vue {
   
}
// export default {
//   // 参数有效性判断
//   validate({ params, query }) {
//     return  typeof params.id === 'number'
//   },
//   // transition: '动画名'
//   transition: 'test'
// }
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