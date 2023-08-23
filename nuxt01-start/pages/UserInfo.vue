<template>
  <div class="user">
    <h3>用户</h3>
    <el-button @click="logout">注销</el-button>
    <hr />
    <h3>全局过滤器使用</h3>
    <p>{{ 4 | fillzero }}</p>
    <span>{{ 1692779835608 | date }}</span>
    <hr />
    <h3>全局指令使用</h3>
    <div v-direc1="'red'">direc1</div>
    <div v-direc2>{{ title }}</div>
    <hr />
    <h3>全局组件使用</h3>
    <my-button></my-button>
  </div>
</template>
<script>
export default {
  //head选项，页面meta配置
  // head() {
  //   return {
  //     title: '商品信息',
  //     meta: [{ name: "keywords", content: '商品信息内容' }],
  //   };
  // },
  head() {
    return this.$seo('自定义商品标题','自定义商品描述信息',[])
  },
  data() {
    return {
      title: "全局指令",
    };
  },
  mounted() {
    this.$show(); //打印全局方法
  },
  methods: {
    logout() {
      //删除cookie，情况vuex
      this.$cookies.remove("token");
      this.$store.commit("user/M_UPDATE_USER", { token: "" });
      this.$router.push("/login");
    },
  },
};
</script>