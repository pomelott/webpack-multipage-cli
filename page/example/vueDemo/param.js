module.exports = {
    title: 'Example in Multi-Page',
    tag: {
        meta: [{
            name: 'webpack4-cli',
            content: 'vueDemo'
        }, {
            name: "webpack4-cli",
            content: 'https://github.com/pomelott/webpack4-cli'
        }],
        headLink: [{
            rel: "icon",
            type: "image/png",
            href: 'https://vuejs.bootcss.com/images/logo.png'
        },{
            href: 'https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.0/animate.min.css',
            rel: "stylesheet"
        }]
    },
    vueInit: {
        el: '#app',
        entrance: 'example'
    }
}