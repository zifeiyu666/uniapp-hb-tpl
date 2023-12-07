const http = uni.$u.http

// post请求，获取菜单
export const postMenu = (params, config = {}) => http.post('/ebapi/public_api/index', params, config)

// get请求，获取菜单，注意：get请求的配置等，都在第二个参数中，详见前面解释
export const getMenu = (data) => {
	return Promise.resolve(Array.from(new Array(30).keys()))
	return http.get('/ebapi/public_api/index', data)
}

// 获取短信验证码
export const getSmsCode = (params) => {
	return http.get('/api/user/getSms', {
		params
	})
}

// 通过验证码注册
export const registerByCode = (data, config = {}) => {
	return http.post('/api/user/register', data, config)
}
// 通过验证码登录
export const loginByCode = (data, config = {}) => {
	return http.post('/api/user/login', data, config)
}
// 获取用户信息
export const getUserInfo = (data, config = {}) => {
	return http.post('/api/index/user_info', data, config)
}
// 淘宝
export const bindTB = (data, config = {}) => {
	return http.post('/api/OAuth/taobao', data, config)
}
export const bindWX = (data, config = {}) => {
	return http.post('/api/OAuth/weixin', data, config)
}

export const bindJD = (data, config = {}) => {
	return http.post('/api/OAuth/jingdong', data, config)
}

export const bindPDD = (data, config = {}) => {
	return http.post('/api/OAuth/pinduoduo', data, config)
}

// 商品连接转链
export const convertGoodsUrl = (data, config = {}) => {
	return http.post('/api/goods/convertGoodsUrl', data, config)
}


/.. 淘宝聚合页  ../
// 淘宝首页数据
export const getTaobaoHomePage = (data, config = {}) => {
	return http.post('/api/Gather/taobao_home', data, config)
}
// 淘宝首页商品列表
export const getTaobaoHomePageGoodsList = (data, config = {}) => {
	return http.post('/api/Gather/taobao_home_goods_list', data, config)
}