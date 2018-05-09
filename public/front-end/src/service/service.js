import _http from '@common/js/http';
import {
	host
}
from '@common/js/config';

/**
 * 微信认证信息
 */
export const getAccessToken = (appID, appSecret) => {
	return _http.fetch('https://api.weixin.qq.com/cgi-bin/token', {
		grant_type: 'client_credential',
		appid: appID,
		secret: appSecret
	});
}

export const getTicket = (ACCESS_TOKEN) => {
	return _http.fetch('https://api.weixin.qq.com/cgi-bin/ticket/getticket', {
		access_token: ACCESS_TOKEN,
		type: jsapi
	});
}

export const getSignature = (url) => {
	return _http.fetch('/get-signature', {
		url: encodeURIComponent(url),
		credentials: "same-origin"
	});
}

export const getWeChatUserInfo = (url) => {
	return _http.fetch('/Wap/User/info');
}

/**
 * 获取首页信息
 */
export const s_getIndexInfo = () => {
	return _http.fetch('/Wap/User/info');
}
