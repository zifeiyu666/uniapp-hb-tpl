// 此vm参数为页面的实例，可以通过它引用vuex中的变量

const SUCCESS_CODE = 0
const BASE_URL = 'http://dev.youtogo.cn' /* 根域名 */

module.exports = (vm) => {
	console.log(vm.$store.state, 'userinfo----');
	// 初始化请求配置
	uni.$u.http.setConfig((config) => {
		/* config 为默认全局配置*/
		// config.baseURL = 'https://www.example.com'; /* 根域名 */
		config.baseURL = BASE_URL;
		return config
	})

	// 请求拦截
	uni.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
		// 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
		config.data = config.data || {}
		// 根据custom参数中配置的是否需要token，添加对应的请求头
		config.header['x-auth-token'] = vm.$store.getters.token
		return config
	}, config => { // 可使用async await 做异步操作
		return Promise.reject(config)
	})

	// 响应拦截
	uni.$u.http.interceptors.response.use((response) => {
		/* 对响应成功做点什么 可使用async await 做异步操作*/
		const data = response.data

		// 自定义参数
		const custom = response.config ? response.config.custom : undefined
		if (data.code !== SUCCESS_CODE) {
			// 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
			if (custom.toast !== false) {
				uni.$u.toast(data.message)
			}

			// 如果需要catch返回，则进行reject
			if (custom && custom.catch) {
				return Promise.reject(data)
			} else {
				// 否则返回一个pending中的promise，请求不会进入catch中
				return new Promise(() => {})
			}
		}
		return data.data === undefined ? {} : data.data
	}, (response) => {
		// 对响应错误做点什么 （statusCode !== SUCCESS_CODE）
		return Promise.reject(response)
	})
}