/*jshint esversion: 6 */
import Taro from '@tarojs/taro'
import config from '@config'

export default (options = { method: 'GET', data: {}, token: '' }) => {
	// 显示加载中动画
	Taro.showLoading({ title: '加载中' })
	// 设置请求头
	let headers =  {
		'Content-type': 'application/json',
		'Authorization': `Bearer ${options.token}`
	}
	return Taro.request({
		url: config.baseUrl + options.url,
		data: options.data,
		header: headers,
		method: options.method.toUpperCase(),
	}).then((res) => {
		// 隐藏加载中动画
		Taro.hideLoading()
		const { statusCode, data } = res
		if (statusCode === 200) {
			return data
		} else if (statusCode === 401) {
			Taro.removeStorageSync('token')
			Taro.showToast({
				title: '请登录',
				icon: 'none',
				duration:1500,
				mask: true,
			})
			setTimeout(() => {
				Taro.redirectTo({
					url: '/pages/login/index'
				})
			}, 1500)
		}
	}).catch((error) => {
		// 隐藏加载中动画
		Taro.hideLoading()
		Taro.showToast({
			title: `${error.message}`,
			icon: 'none',
			duration:1500,
			mask: true,
		})
	})
}