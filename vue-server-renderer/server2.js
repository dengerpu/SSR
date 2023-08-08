const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.html', 'utf-8')
})

server.get('*', (req,res) => {
    const app =  new Vue({
        data: {
            url: req.url
        },
        template: `<h1>你访问的 URL 是： {{ url }}</h1>`
    })

    // 将Vue实例渲染为HTML
    renderer.renderToString(app, (err, html) => {
        if(err) {
            res.status(500).end('服务器端发生错误')
            return
        }
        res.end(html)
    })
})

server.listen(8080)

