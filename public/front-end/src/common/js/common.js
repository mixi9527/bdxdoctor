import {
    mapState
}
from 'vuex';
import {
    format_date, getCookie, setCookie
}
from '@common/js/mUtils';

var common = function(Vue, opt) {
    Vue.mixin({
        computed: mapState({

        })
    })

    //处理手机号
    Vue.filter('filterPhone', function(value) {
        if (value == '' || value == 'undefined') {
            return '';
        }
        return value.substr(0, 3) + "****" + value.substr(7);
    })

    //格式化时间
    Vue.filter('formatDate', function(value) {
        return this.format_date(value, 'yyyy-MM-dd hh:mm:ss');
    })

    // 登录后跳转方法
    Vue.prototype.goBeforeLoginUrl = () => {
        let url = getCookie('beforeLoginUrl')
        if (!url || url.indexOf('/author') != -1) {
            router.push('/index')
        } else {
            if (url == '/') {
                url = '/index'
            }
            router.push(url)
            setCookie('beforeLoginUrl', '')
        }
    }
}

export default {
    install: common
};
