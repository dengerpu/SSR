import Vue from 'vue'
let show = ()=>console.log('全局方法')

Vue.propotype.$show = show  //服务端钩子内部不可以使用，this不会执行vue实例