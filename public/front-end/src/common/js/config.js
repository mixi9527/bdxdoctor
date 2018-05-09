/**
 * 配置编译环境和线上环境之间的切换
 *
 * host: 网站域名
 * baseUrl: 后台域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */
let host = window.location.origin //网站域名
let baseUrl = ''
let routerMode = 'hash'
let imgBaseUrl


if (process.env.NODE_ENV == 'development') {
    baseUrl = '/api'
} else if (process.env.NODE_ENV == 'testing') {
    baseUrl = ''
} else if (process.env.NODE_ENV == 'prepare') {
    host = ''
    baseUrl = ''
} else if (process.env.NODE_ENV == 'production') {
    host = ''
    baseUrl = ''
}

export {
    host,
    baseUrl,
    routerMode,
    imgBaseUrl
}
