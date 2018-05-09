// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from '@/store';
import App from '@/App';
import router from '@/router/router';
import '@common/js/rem';
import {
    mapState
}
from 'vuex';
import Common from '@common/js/common'
import FastClick from 'fastclick'
import {
    setCookie
}
from '@common/js/mUtils'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(Common);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})

// router.beforeEach((to, from, next) => {
//     if (!store.state.userInfo.id && to.path != '/author') {
//         // 第一次进入项目
//         setCookie('beforeLoginUrl', to.fullPath); // 保存用户进入的url
//         next('/author');
//         return false;
//     }
//     if (to.path == '/author' && store.state.userInfo.id) {
//         // 用户使用后退返回到授权页，则默认回到首页
//         next('/index');
//         return false;
//     }
//     next();
// })
