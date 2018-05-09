import {
	baseUrl
}
from '@common/js/config';
import util from '@common/js/mUtils.js'
import axios from 'axios';

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//http request 拦截器
axios.interceptors.request.use(
	config => {
		var appid = window.localStorage.getItem('appid');
		if (appid == '' || appid == null || appid == 'null') {
			window.location.href = '#/';
			return false;
		}

		if (appid && config.method == 'get') {
			config.params.appid = appid;
		} else {
			config.data.appid = appid;
		}
		//debugger
		var sid = window.localStorage.getItem('sid');
		if (sid != '' && sid != null && sid != undefined) {
			config.headers.Cookies = 'sid=' + sid;
		}
		consoe.log(config);
		return config;
	},
	err => {
		return Promise.reject(err);
	}
)

// http response 拦截器
axios.interceptors.response.use(
	response => {
		var data = response.data,
			res;
		if (data.errCode === '0') {
			return data.data;
		} else {
			return Promise.reject(data.message);
		}
	},
	err => {
		if (err && err.response) {
			switch (err.response.status) {
				case 400:
					err.message = '请求错误'
					break

				case 401:
					err.message = '未授权，请登录'
					break

				case 403:
					err.message = '拒绝访问'
					break

				case 404:
					err.message = `请求地址出错: ${err.response.config.url}`
					break

				case 408:
					err.message = '请求超时'
					break

				case 500:
					err.message = '服务器内部错误'
					break

				case 501:
					err.message = '服务未实现'
					break

				case 502:
					err.message = '网关错误'
					break

				case 503:
					err.message = '服务不可用'
					break

				case 504:
					err.message = '网关超时'
					break

				case 505:
					err.message = 'HTTP版本不受支持'
					break

				default:
					err.message = '未知错误'
			}
		}
		return Promise.reject(err.message);
	}
)

/**
 * [HttpService description]
 *  fetch:get请求方法、 post: post请求方法
 * @param url
 * @param params
 * @return (Promise)
 */
var _t = this;
let HttpService = {
	fetch: function(url, params = {}) {
		return new Promise((resolve, reject) => {
			axios.get(url, {
				params: params,
				withCredentials: true,
				responseType: 'json'
			}).then(response => {
				resolve(response)
			}).catch(err => {
				reject(err)
			})
		})
	},
	post: function(url, params = {}) {
		return new Promise((resolve, reject) => {
			axios.post(url, params).then(response => {
				resolve(response)
			}).catch(err => {
				reject(err)
			})
		})
	}
}

export default HttpService;
