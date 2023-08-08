const createApp  = require('./app')
const server = require('express')()

const template = require('fs').readFileSync('./index.html', 'utf-8')

const renderer = require('vue-server-renderer').createRenderer({
    template
})

const context = {
    title: '自定义标题',
    meta: `
        <meta name="keyword" content="vue,ssr">
        <meta name="description" content="vue srr demo">
    `
}

server.get('*', (req,res) => {
    const param = { url: req.url }
    const app = createApp(param)
    // 将Vue实例渲染为HTML
    renderer.renderToString(app, context, (err, html) => {
        if(err) {
            res.status(500).end('服务器端发生错误')
            return
        }
        res.end(html)
    })
})

server.listen(8080)

