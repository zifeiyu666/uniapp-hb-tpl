import App from './App'
import store from './store'
Vue.prototype.$store = store


// uview 引入
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)


// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif

uni.setLocale('zh-Hans')

// 引入请求封装，将app参数传递到配置中
require('config/request.js')(app)