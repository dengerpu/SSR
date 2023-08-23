<template>
  <div class="user">
    <h3>用户</h3>
    <el-button @click="logout">注销</el-button>
  </div> 
</template>
<script>
export default {
  mounted() {
    this.$show() //打印全局方法
  },
  methods:{
    logout(){
      //删除cookie，情况vuex
      this.$cookies.remove('token')
      this.$store.commit('user/M_UPDATE_USER',{token:''})
      this.$router.push('/login')
    }
  }
}
</script>