export default function({$axios,redirect,route,store}){
    //基本配置
    $axios.defaults.timeout=10000;

    // 请求拦截
    $axios.onRequest(config => {
        console.log('请求拦截')
        config.headers.token = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4YTZlNDk0MWFhZTI0OTViOGViYjllNzc1ZDQ5MWEzYiIsInN1YiI6IjEiLCJpc3MiOiJkZXAiLCJpYXQiOjE2OTI2MTQ5NDQsImV4cCI6MTY5MjcwMTM0NH0.GqanFI_WzYAfiaTFMcyk9xgNv5Aw2M0PlAiRF_bEyhY'
        return config
    })

    //响应拦截
    $axios.onResponse(res=>{
        console.log('响应拦截')
        if (res.code !== 200) {
            consolelog('认证失败')            // 401 认证失败(token过期或失效或非法) 403 权限不足
            if (res.code === 401) {
              store.dispatch('user/logout')
              redirect('/login?path='+route.fullPath)
            }
          } else {
            return res
          }
    })

    //错误处理
    $axios.onError(error=>{
        //处理
        return error;
    })
}