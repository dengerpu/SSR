<template>
  <div class="container">
    <h1>首页</h1>
    <!-- <h3>{{title}}</h3> -->
    <el-button type="primary">按钮</el-button>
    <p>{{data2}}</p>
    <button @click="getStore">点击修改vuex中的数据</button>
    <hr>
    <h4>内部资源指向</h4>
    <!-- 相对路径找到一些需要压缩的资源 assets -->
    <!-- <img src="../assets/img/btns.png" alt=""> -->
    <img src="~assets/img/btns.png" alt="">
     <!-- 绝对路径找到无需压缩的资源static -->
     <img src="/img/bg.jpg" alt="">

     <div class="bgimg">css指向需要压缩的资源</div>

     <el-button onclick="alert($)">测试外部引入资源</el-button>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState, mapMutations} from 'vuex'
export default {
  name: "IndexPage",
  layout: "default",
  // middleware: 'auth' // 页面层级中间件定义
  middleware({store,route,redirect,params,query}) {
    //context 服务端上下文
    //全局守卫前置业务
    //store 状态树信息
    //route 一条目标路由信息
    // redirect 强制跳转
    //params,query 校验参数合理性
    // console.log('middleware layouts 全局守卫前置业务')
    // console.log("middleware->pages/index.vue");
    // redirect('/userinfo')
  },
  // 参数的有效性
  validate({ params, query }) {
    console.log("validate", params, query);
    return true; // true页面才会显示
  },

  // 组件独享后置守卫
  // beforeRouteLeave(to,from,next){
  //   let b1 = window.confirm('是否要离开')
  //   next(b1)
  // },     
  // 读数据，返回给组件
  async asyncData({$axios}) {
    // 异步业务逻辑，读取服务器数据
    // let res = await $axios({url: '/data/list.json'})
    // console.log('读取到的静态数据', res.data)
    // // 返回的数据会和data里面的数据合并
    // return {
    //   title: res.data.title
    // }
  },

  // 读数据，返回给vuex
  async fetch({ store, $axios}) {
    // 异步业务逻辑，读取服务器数据提交给vuex
    // 测试跨域数据
    // let res = await $axios({url: '/api/sys/user'})
    // console.log('读取的跨域数据', res.data)
    // console.log("fetch");
  },
  //SSR && CSR
  beforeCreate() {
    console.log("beforeCreate");
  },
  async created() {
    let res = await this.$axios({url: '/api/sys/user'})
    this.data2 = res.data
    // console.log('created',this)
    console.log("created");
  },

  //CSR   window this指向组件
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log("mounted")
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log("updated")
  },
  beforeDestroy() {
    console.log('beforeDestroy')
  },
  destroyed() {
    console.log('destroyed')
  },

  ///服务端渲染 激活、失活 不存在
  // activated(){},
  // deactivated(){},
  data() {
    return {
      a: 1,
      b: 1111,
      data2: ''
    };
  },

  methods:{
    getStore(){
      //编程式访问vuex

      //发出actions请求给user模块
      // this.$store.dispatch('user/A_UPDATE_USER',{token:'假token'})
      // this.A_UPDATE_USER({token:'假token'})
      
      //发出mutations请求给user模块
      // this.$store.commit('user/M_UPDATE_USER',{token:'假token'})
      this.M_UPDATE_USER({token:'假token'})
    },

    ...mapActions('user',['A_UPDATE_USER']),
    ...mapMutations('user',['M_UPDATE_USER']),
  },

  computed:{
    xx(){},
    ...mapGetters(['getNav']),
    ...mapState(['bNav']),
    ...mapState('user',['data']),
    ...mapState({home:state=>state.home.data}),
  }
};
</script>

<style scoped>
.bgimg {
  /* background: url('../assets/img/btns.png') no-repeat; */
  background: url('~/assets/img/btns.png') no-repeat;
}
</style>
