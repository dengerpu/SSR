<template>
  <div v-if="loading" class="spinner"></div>
</template>
<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'
@Component
export default class Loading extends Vue{
  //data元数据 == 实例属性
  loading: boolean = false

  //methods的方法 == 类内的实例方法
  start():void{
    this.loading = true;
  }
  finish():void{
    this.loading = false;
  }

}
</script>

<!-- <script>
  export default {
    data: () => ({
      loading: false,
    }),
    methods: {
      // 这两个函数使nuxt为我们提供的，一个是请求开始，一个是结束
      start() {
        this.loading = true;
      },
      finish() {
        this.loading = false;
      },
    },
  };
</script> -->
<style scoped>
.spinner {
  width: 60px;
  height: 60px;
  background-color: #399;

  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -30px;
  margin-top: -30px;
  -webkit-animation: rotateplane 1.2s infinite ease-in-out;
  animation: rotateplane 1.2s infinite ease-in-out;
}

@-webkit-keyframes rotateplane {
  0% {
    -webkit-transform: perspective(120px);
  }
  50% {
    -webkit-transform: perspective(120px) rotateY(180deg);
  }
  100% {
    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
  }
}

@keyframes rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
</style>
  
  
  