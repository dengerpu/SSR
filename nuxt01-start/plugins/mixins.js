//全局方法
import Vue from 'vue'
let show = () => console.log('全局方法')

Vue.prototype.$show = show//服务端钩子内部不可以使用，this不会执行vue实例

//全局过滤器
import * as filters from '../assets/script/filter';
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));


//全局指令
import direc1 from '../assets/script/directives/direc1'
import direc2 from '../assets/script/directives/direc2'
Vue.directive('direc1', direc1)
Vue.directive('direc2', direc2)

// 全局组件
import myButton from '../components/global/mybutton';
Vue.component('my-button', myButton)


//混入methods
Vue.mixin({
    methods: {
        $seo(title, content, payload = []) {
            return {
                title,
                meta: [{
                    hid: 'description',
                    name: 'keywords',
                    content
                }].concat(payload)
            }
        }
    }
})