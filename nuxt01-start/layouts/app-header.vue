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
<script>
export default {
  data(){
    return {
      activeIndex:"-1",
      navs:[
        {path:'/index',title:'首页'},
        {path:'/goods',title:'商品'},
        {path:'/userinfo',title:'用户信息'},
      ]
    }
  },
  methods:{
    handleSelect(key,keyPath){
      this.$router.push(this.navs[key].path)
    }
  },
  watch:{
    $route:{
      immediate:true,
      handler(route){
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
  }
}
</script>

<style scoped>
/* .app_header--active{
  background: #399;
  color:#fff
} */
</style>
