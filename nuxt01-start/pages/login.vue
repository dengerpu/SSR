<template>
  <div class="login">
    <h3>登录</h3>
    <el-divider></el-divider>
    <el-input v-model="username" placeholder="请输入" class="mb">
      <template slot="prepend">用户</template>
    </el-input>
    <el-input type="password" v-model="password" placeholder="请输入" class="mb">
      <template slot="prepend">密码</template>
    </el-input>
    <div class="error">{{message}}</div>
    <el-button type="primary" @click="login">登录</el-button>
    <el-button @click="$router.push('/reg')">注册</el-button>
  </div> 
</template>

<script>
export default {
  name: 'login',
  data:()=>({
    username:'',
    password:'',
    message:''
  }),
  methods: {
    login(){
      this.$axios({
        url:'/api/login',
        method:'post',
        data:{
          username: this.username,
          password: this.password
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
.login{
  width:35%;
  height:auto;
  position: absolute;
  left:50%;top:50%;
  margin-left:-17%;
  transform: translateY(-50%)
}
.mb{
  margin-bottom: 20px;
}
.error{
  color:red
}
</style>