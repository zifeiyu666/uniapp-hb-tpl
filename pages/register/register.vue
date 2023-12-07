<template>
	<view class='container-login'>
		<view class="left-bottom-sign"></view>
		<view class="back-btn yticon icon-zuojiantou-up" @click="navBack"></view>
		<view class="right-top-sign"></view>
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
		<view class="wrapper">
			<view class="left-top-sign">REGISTER</view>
			<view class="welcome">
				注册
			</view>
			<view style='padding: 0 50rpx'>
				<u--form :model="model" :rules="rules" ref="uForm">

					<u-form-item :rightIconStyle="{color: '#888', fontSize: '32rpx'}" right-icon="kefu-ermai"
						:label-position="labelPosition" label="手机号码" prop="phone" label-width="70">
						<u--input :border="border" placeholder="请输入手机号" v-model="model.phone" type="number"></u--input>
					</u-form-item>
					<u-form-item :label-position="labelPosition" label="密码" prop="password" label-width="40">
						<u--input :password-icon="true" :border="border" type="password" v-model="model.password"
							placeholder="请输入密码"></u--input>
					</u-form-item>
					<u-form-item :label-position="labelPosition" label="确认密码" label-width="70" prop="rePassword">
						<u--input :border="border" type="password" v-model="model.rePassword"
							placeholder="请确认密码"></u--input>
					</u-form-item>
					<u-form-item :label-position="labelPosition" label="验证码" prop="code" label-width="60">
						<u--input :border="border" placeholder="请输入验证码" v-model="model.code" type="text"></u--input>
						<u-button slot="right" type="success" size="mini" @click="getCode">{{codeTips}}</u-button>
					</u-form-item>


				</u--form>
			</view>

			<u-verification-code seconds="60" ref="uCode" @change="codeChange"></u-verification-code>
			<!-- 获取验证码 -->
			<u-modal :show="codeModalShow" :closeOnClickOverlay="true" title="获取短信验证码" @confirm="getSMSCode"
				:asyncClose="false">
				<view class="slot-content u-flex">
					<u-input :border="border" placeholder="请输入图形验证码" v-model="picCode" type="text"></u-input>
					<u--image :showLoading="true" :src="picCodeUrl " width="80px" height="30px" @click="refreshPicCode"
						:key='picCodeKey'></u--image>
				</view>
			</u-modal>

			<button class="confirm-btn" @click="submit" :disabled="logining">注册</button>
			<!-- <view class="forget-section">
				忘记密码?
			</view> -->
		</view>
		<view class="register-section">
			已有账号?{{this.model.phone}}
			<text @click="goLogin">去登录</text>
		</view>
	</view>
</template>



<script>
	import {
		getSmsCode,
		registerByCode
	} from '@/config/api.js'
	import {
		mapMutations
	} from 'vuex';

	const codeUrl = 'http://dev.youtogo.cn/api/user/getCaptcha'

	export default {
		data() {
			let that = this;
			return {
				model: {
					phone: '',
					password: '',
					rePassword: '',
					code: '',
				},

				codeModalShow: false,
				picCode: undefined, //  图形验证码
				picCodeKey: 1,
				picCodeUrl: undefined, //  获取图形验证码的 url
				codeTips: '获取验证码',
				labelPosition: 'left',
				border: false,
				errorType: ['message'],
				rules: {
					phone: [{
							required: true,
							message: '请输入手机号',
							trigger: ['change', 'blur'],
						},
						{
							validator: (rule, value, callback) => {
								// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							// 触发器可以同时用blur和change，二者之间用英文逗号隔开
							trigger: ['change', 'blur'],
						}
					],
					code: [{
							required: true,
							message: '请输入验证码',
							trigger: ['change', 'blur'],
						},
						{
							type: 'number',
							message: '验证码只能为数字',
							trigger: ['change', 'blur'],
						}
					],
					password: [{
							required: true,
							message: '请输入密码',
							trigger: ['change', 'blur'],
						},
						{
							// 正则不能含有两边的引号
							pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+\S{5,12}$/,
							message: '需同时含有字母和数字，长度在6-12之间',
							trigger: ['change', 'blur'],
						}
					],
					rePassword: [{
							required: true,
							message: '请重新输入密码',
							trigger: ['change', 'blur'],
						},
						{
							validator: (rule, value, callback) => {
								return value === this.model.password;
							},
							message: '两次输入的密码不相等',
							trigger: ['change', 'blur'],
						}
					],
				},
				logining: false,
				tips: '获取验证码'
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		onLoad() {

		},
		methods: {
			...mapMutations(['login']),
			refreshPicCode() {
				this.picCodeUrl = null
				setTimeout(() => {
					this.picCodeUrl = codeUrl + "?key=" + Math.random()
					// this.picCodeKey = this.picCodeKey + 1
				}, 0)

			},
			codeChange(text) {
				this.codeTips = text;
			},
			submit() {
				this.$refs.uForm.validate().then(() => {
					console.log('验证通过');
					registerByCode({

					}, {
						params: {
							mobile: this.model.phone,
							captcha: this.model.code,
							invitation: 'FACAI8'
						}
					}).then(_ => {
						this.$u.toast('注册成功');
						this.goLogin()
					})
				})
			},
			// 获取验证码
			getCode() {
				if (!this.model.phone) {
					this.$u.toast("请输入手机号")
					return
				} else if (!this.$u.test.mobile(this.model.phone)) {
					this.$u.toast("请输入正确的手机号")
					return
				}
				this.codeModalShow = true
				this.refreshPicCode()
			},
			getSMSCode() {
				if (!this.picCode) {
					this.$u.toast('请输入图形验证码')
					return
				}
				this.codeModalShow = false
				if (this.$refs.uCode.canGetCode) {
					console.log(this.model, 'this.model-----');
					if (!this.model.phone) {
						this.$u.toast("请输入手机号")
						return
					}
					uni.showLoading({
						title: '正在获取验证码',
						mask: true
					})
					setTimeout(() => {
						uni.hideLoading()
					}, 10 * 1000)
					getSmsCode({
						mobile: this.model.phone,
						type: 'register', //验证码类型，可选值：login登陆register注册
						captcha: this.picCode
					}).then(_ => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						this.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					})
				} else {
					this.$u.toast('倒计时结束后再发送');
				}
			},
			errorChange(index) {
				if (index == 0) this.errorType = ['message'];
				if (index == 1) this.errorType = ['toast'];
				if (index == 2) this.errorType = ['border-bottom'];
				if (index == 3) this.errorType = ['border'];
			},

			goLogin() {
				console.log('11111login');
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
		}
	}
</script>


<style lang='scss'>
	page {
		background: #fff;
	}

	.container-login {
		padding-top: 115px;
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: #fff;
	}

	.wrapper {
		position: relative;
		z-index: 90;
		background: #fff;
		padding-bottom: 40upx;
	}

	.back-btn {
		position: absolute;
		left: 40upx;
		z-index: 9999;
		padding-top: var(--status-bar-height);
		top: 40upx;
		font-size: 40upx;
		color: $font-color-dark;
	}

	.left-top-sign {
		font-size: 120upx;
		color: $page-color-base;
		position: relative;
		left: -16upx;
	}

	.right-top-sign {
		position: absolute;
		top: 80upx;
		right: -30upx;
		z-index: 95;

		&:before,
		&:after {
			display: block;
			content: "";
			width: 400upx;
			height: 80upx;
			background: #b4f3e2;
		}

		&:before {
			transform: rotate(50deg);
			border-radius: 0 50px 0 0;
		}

		&:after {
			position: absolute;
			right: -198upx;
			top: 0;
			transform: rotate(-50deg);
			border-radius: 50px 0 0 0;
			/* background: pink; */
		}
	}

	.left-bottom-sign {
		position: absolute;
		left: -270upx;
		bottom: -320upx;
		border: 100upx solid #d0d1fd;
		border-radius: 50%;
		padding: 180upx;
	}

	.welcome {
		position: relative;
		left: 50upx;
		top: -90upx;
		font-size: 46upx;
		color: #555;
		text-shadow: 1px 0px 1px rgba(0, 0, 0, .3);
	}

	.input-content {
		padding: 0 60upx;
	}

	.input-item {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 0 30upx;
		background: $page-color-light;
		height: 120upx;
		border-radius: 4px;
		margin-bottom: 50upx;

		&:last-child {
			margin-bottom: 0;
		}

		.tit {
			height: 50upx;
			line-height: 56upx;
			font-size: $font-sm+2upx;
			color: $font-color-base;
		}

		input {
			height: 60upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			width: 100%;
		}
	}

	.confirm-btn {
		width: 630upx;
		height: 76upx;
		line-height: 76upx;
		border-radius: 50px;
		margin-top: 70upx;
		background: $uni-color-primary;
		color: #fff;
		font-size: $font-lg;

		&:after {
			border-radius: 100px;
		}
	}

	.forget-section {
		font-size: $font-sm+2upx;
		color: $font-color-spec;
		text-align: center;
		margin-top: 40upx;
	}

	.register-section {
		position: absolute;
		left: 0;
		bottom: 50upx;
		width: 100%;
		font-size: $font-sm+2upx;
		color: $font-color-base;
		text-align: center;

		text {
			color: $font-color-spec;
			margin-left: 10upx;
		}
	}


	.slot-content {}
</style>