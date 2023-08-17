<template>
  <Tutorial />
</template>

<script>
export default {
  name: "IndexPage",
  layout: "default",
  // middleware: 'auth' // 页面层级中间件定义
  middleware() {
    console.log("middleware->pages/index.vue");
  },

  // 参数的有效性
  validate({ params, query }) {
    console.log("validate", params, query);
    return true; // true页面才会显示
  },

  // 读数据，返回给组件
  asyncData(context) {
    // 异步业务逻辑，读取服务器数据
    console.log("asyncData");
    // 返回的数据会和data里面的数据合并
    return {
      b: 2,
    };
  },

  // 读数据，返回给vuex
  fetch({ store }) {
    // 异步业务逻辑，读取服务器数据提交给vuex
    console.log("fetch");
  },
  //SSR && CSR
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
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
    };
  },
};
</script>
