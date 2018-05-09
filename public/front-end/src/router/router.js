import Vue from 'vue'
import VueRouter from 'vue-router'
import {
    routerMode
}
from '@common/js/config'

const Author = r => require.ensure([], () => r(require('@pages/Author')), 'author')
const Index = r => require.ensure([], () => r(require('@pages/index/Index')), 'index')



const routes = [{
        path: '',
        redirect: '/index'
    }, //认证页面
    // {
    //     path: '/author',
    //     component: Author
    // }, //首页
    {
        path: '/index',
        component: Index
    },
];

Vue.use(VueRouter)

export default new VueRouter({
    routes: routes,
    mode: routerMode,
    strict: process.env.NODE_ENV !== 'production',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            if (from.meta.keepAlive) {
                from.meta.savedPosition = document.body.scrollTop;
            }
            return {
                x: 0,
                y: to.meta.savedPosition || 0
            }
        }
    }
})
