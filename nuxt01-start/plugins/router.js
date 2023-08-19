export default ({app,redirect,params,query,store})=>{ 
    console.log('插件前置守卫')
     // app == vue实例
     app.router.beforeEach((to,from,next)=>{
        //全局前置的守卫，插件
        //next(true)/next(false)   
        //next( '/login ') ×  redirect 跳转函数 √
        // 注意：不能使用next来跳转，要使用redirect
        // if (to.path === '/login') {
        //     next()
        // } else {
        //     redirect('/login')
        // }
        next()
     })
    
    //插件全局后置守卫
    app.router.afterEach((to,from)=>{
    	// console.log('插件全局后置守卫')
    }) 
}