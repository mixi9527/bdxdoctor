<template lang="html">

</template>

<script>
import {getWeChatUserInfo} from '@service/service';
import {getCookie, setCookie} from '@common/js/mUtils';
export default {
    created () {
        // 检测会员有没有登录
        if(!getCookie('userInfo')){
          let ua = window.navigator.userAgent.toLowerCase()
          if(ua.match(/MicroMessenger/i) == 'micromessenger'){
            // 跳转到微信授权页面
            window.location.href = this.webUrl + '/Wap/User/getOpenid'
          }
        }else{
          // 如果有token 但是vuex中没有用户登录信息则做登录操作
          this.login()
        }
    },
    methods: {
        login () {
          // 通过cookie中保存的token 获取用户信息
            getWeChatUserInfo().then(response => {
                response = response.body;
                if(response){
                  // 保存用户登录状态(Vuex)
                  this.$store.commit('userInfo', response)
                  setTimeout(() => {
                    this.goBeforeLoginUrl() // 页面恢复(进入用户一开始请求的页面)
                  }, 2000)
                }else{
                  this.$alert('服务器撸猫去惹 :(', 'wrong')
                  if(getCookie('userInfo')){
                    // 跳转到微信授权页面
                    window.location.href = this.webUrl + '/Wap/User/getOpenid'
                  }
                }
            });
        }
    }
}
</script>

<style lang="less">
</style>
