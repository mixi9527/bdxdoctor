import {
    CHANGE_LOADING,
    CHANGE_ALERT,
    CHANGE_CONFIRM,
    UDATE_DIALOGT_TYPE,
    UPDATE_TIPS_MESSAGE,
    FADE_ALERT,
    CHANGE_MENU,
    UPDATE_CART_NUMS
}
from './mutation-types.js'

export default {
    //改变加载框显示
    [CHANGE_LOADING](state, flag) {
        state.ifLoading = flag;
    },
    //改变提示框显示
    [CHANGE_ALERT](state) {
        state.ifShowAlert = !state.ifShowAlert;
    },
    //改变询问框显示
    [CHANGE_CONFIRM](state) {
        state.ifShowConfirm = !state.ifShowConfirm;
    },
    //修改弹框类型
    [UDATE_DIALOGT_TYPE](state, type) {
        state.dialogType = type;
    },
    //修改提示信息
    [UPDATE_TIPS_MESSAGE](state, msg) {
        state.tipsMsg = msg;
    },
    //改变搜索框、底部菜单显示情况 0:显示 1:不显示
    [CHANGE_MENU](state, res) {
        state.ifShowSearch = res.search_display;
        state.ifShowBottom = res.menu_display;
    },
    //修改购物车数量
    [UPDATE_CART_NUMS](state, num) {
        state.cartNums = num;
    }
}
