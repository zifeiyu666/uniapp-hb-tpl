import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); //vue的插件机制
const api = Vue.prototype.api


//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userInfo: {
			name: '3423423'
		},
		calendar: {}
	},
	getters: {
		token: state => {
			return uni.getStorageSync('token')
		},
	},
	mutations: {
		login(state, payload) {
			console.log(payload, '----payload');
			state.hasLogin = true
			state.userInfo = payload
		},
		updateUserInfo(state, payload) {
			state.userInfo = payload
		},
		logout(state, payload) {
			state.hasLogin = false
			state.userInfo = {}
		},
		setCalendar(state, payload) {
			state.calendar = payload
		},

	},
	actions: {
		getCalendar(context) {
			return api.getCalendar().then(res => {
				context.commit('setCalendar', res)
			})
		},
	}
})
export default store