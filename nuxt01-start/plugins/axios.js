import { Message } from 'element-ui'
export default function({$axios,redirect,route,store}){
    //基本配置
    $axios.defaults.timeout=10000;

    // 请求拦截
    $axios.onRequest(config => {
        console.log('请求拦截')
        console.log(store.state.user.token)
        config.headers.token = store.state.user.token
        return config
    })

    //响应拦截
    $axios.onResponse(res=>{
        console.log('响应拦截')
        if (res.data.code !== 200) {
            Message({
                message: res.data.message,
                type: 'error'
            })
            console.log('认证失败')            // 401 认证失败(token过期或失效或非法) 403 权限不足
            if (res.data.code === 401 || res.data.code === 403) {
            //   store.dispatch('user/logout')
                store.commit('user/M_UPDATE_USER', {token: '' }) 
                redirect('/login?path='+route.fullPath)
            }
        } else {
            // 直接把需要的数据返回
            return res.data
        }
    })

    //错误处理
    $axios.onError(error=>{
        //处理
        return error;
    })
}