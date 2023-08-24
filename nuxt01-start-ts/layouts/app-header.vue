<template>
  <el-menu 
    :default-active="activeIndex"
    @select="handleSelect"
    active-text-color="#399"
    mode="horizontal"
  >
    <el-menu-item 
      v-for="(item,index) of navs"
      :key="index"
      :index="index+''"
    >{{item.title}}</el-menu-item>
  </el-menu>
</template>
<script lang="ts">
import {Vue,Component,Watch} from 'vue-property-decorator'
import {Route} from 'vue-router'

type TNavs = {path:string,title:string}

@Component
export default class AppHeader extends Vue {
  activeIndex:string = "-1";
  navs:TNavs[] = [
        {path:'/index',title:'首页'},
        {path:'/goods',title:'商品'},
        {path:'/userinfo',title:'用户信息'},
      ];
  handleSelect(key:number):void{
      this.$router.push(this.navs[key].path)
  }
  @Watch('$route',{immediate:true,deep:true})
  onRouteChange(route:Route){
    let find=false;
        this.navs.map((item,index)=>{
          if(item.path=='/') this.$router.push({name:'root'})
          if(route.path==item.path) {
            // console.log('true')
           this.activeIndex=index+'';
           find=true;
          }
        })
      if(!find) this.activeIndex="-1";
  }    
}
// export default {
//   data(){
//     return {
//       activeIndex:"-1",
//       navs:[
//         {path:'/index',title:'首页'},
//         {path:'/goods',title:'商品'},
//         {path:'/userinfo',title:'用户信息'},
//       ]
//     }
//   },
//   methods:{
//     handleSelect(key,keyPath){
//       this.$router.push(this.navs[key].path)
//     }
//   },
//   watch:{
//     $route:{
//       immediate:true,
//       handler(route){
//         let find=false;
//         this.navs.map((item,index)=>{
//           if(item.path=='/') this.$router.push({name:'root'})
//           if(route.path==item.path) {
//             // console.log('true')
//            this.activeIndex=index+'';
//            find=true;
//           }
//         })
//         if(!find) this.activeIndex="-1";
        
//       }
//     }
//   }
// }
</script>

<style scoped>
/* .app_header--active{
  background: #399;
  color:#fff
} */
</style>
