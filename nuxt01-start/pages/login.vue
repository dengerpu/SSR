<template>
  <div>
    登陆页面
    <button @click="login">登陆</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    login(){
      this.$axios({
        url:'/api/login',
        method:'post',
        data:{
          username: 'admin',
          password: '123456'
        }
      }).then(
        res=>{
          console.log(res)
          console.log(res.code)
          // 登陆成功，token在vuex和cookie中各存一份
          if(res.code == 200){
            //同步vuex && cookie
            this.$cookies.set('token',res.data.token)
            this.$store.commit('user/M_UPDATE_USER',res.data)
            if(!this.$route.query.path || /login|reg/.test(this.$route.query.path)){
              this.$router.replace('/index')
            }else{
              this.$router.replace(this.$route.query.path)
            }
          }else{
            this.message=res.message
          }
          
        }
      )
    }
  }
}
</script>

<style>

</style>