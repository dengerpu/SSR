const Vue =  require('vue')

module.exports = function createApp(context) {
    return new Vue({
        data: {
            url: context.url
        },
        template: `<h1>你访问的 URL 是： {{ url }}</h1>`
    })
}