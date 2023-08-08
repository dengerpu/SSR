// 1.创建一个Vue实例
const Vue = require('vue')
const app = new Vue({
    template: `<div>Hello World</div>`
})

// 2.创建一个renderer
const renderer = require('vue-server-renderer').createRenderer()

// 3.将Vue实例渲染为HTML
renderer.renderToString(app, (err, html) => {
    if(err) throw err
    console.log(html)
})



// 2.5.0+, 如果没有传入回调函数，则会返回Promise
renderer.renderToString(app).then(html => {
    console.log(html)
}).catch(err => {
    console.log(err)
})