<script>
	import {
		mapMutations,
		mapGetters,
		mapState
	} from 'vuex';
	// import {
	// 	getUserInfo
	// } from '@/config/api.js'
	export default {
		onLaunch: function() {
			console.log('App Launch')

		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		computed: {
			...mapGetters(['token']),
			...mapState(['userInfo'])
		},
		methods: {
			...mapMutations(['login']),
		},
		mounted() {
			// 重新获取 userInfo
			if (!this.userInfo.uid && this.token) {

				uni.request({
					url: 'http://dev.youtogo.cn/api/index/user_info',
					header: {
						'x-auth-token': this.token
					},
					success: (res) => {
						const {
							data
						} = res
						const {
							code,
							message
						} = data
						if (code === 0 && data.data) {
							this.login(data.data)
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	// uview 变量
	@import "@/uni_modules/uview-ui/index.scss";

	.u-rela {
		position: relative;
	}

	.u-abso {
		position: absolute;
	}



	// 每个页面公共css
	body,
	uni-page-body {
		background-color: $ytg-bg !important;
	}

	html,
	body,
	uni-page-body {
		color: $ytg-main-black !important;
		font-size: 14px;
	}

	.page-wrapper {
		padding: $ytg-page-spacing;
		background-color: #fff;
	}

	.safe-top {
		margin-top: env(safe-area-inset-top);
		// padding-top: $ytg-page-spacing;
	}

	.font-main-black-20 {
		color: $ytg-main-black;
		font-size: 20px;
	}

	.font-main-black-18 {
		color: $ytg-main-black;
		font-size: 18px;
	}

	.font-main-black-16 {
		color: $ytg-main-black;
		font-size: 16px;
	}

	.font-main-black-12 {
		color: $ytg-main-black;
		font-size: 12px;
	}

	.font-main-black-10 {
		color: $ytg-main-black;
		font-size: 12px;
	}

	.font-main-black-14 {
		color: $ytg-main-black;
		font-size: 14px;
	}

	.font-main-red-14 {
		color: $ytg-main-red;
		font-size: 14px;
	}

	.font-main-red-12 {
		color: $ytg-main-red;
		font-size: 12px;
	}

	.font-main-grey-14 {
		color: #6F7379;
		font-size: 14px;
	}

	.font-main-grey-12 {
		color: #6F7379;
		font-size: 12px;
	}

	.font-tips-grey-12 {
		color: var(--form-tips-grey);
		font-size: 12;
	}

	.under-line {
		border-bottom: 6rpx solid;
		border-image: linear-gradient(270deg, #F53F3F 0%, rgba(245, 63, 63, 0.00) 100%) 1;
	}

	.page-padding {
		padding: $ytg-page-spacing;
	}

	//  标签
	.mini-tag {
		border-radius: 2px;
		background: #F5F6F8;
		height: 16px;
		line-height: 16px;
		color: #ABABAC;
		font-size: 10px;
		padding: 0 4px;
	}

	.topic-tag {
		border-radius: 2px;
		background: #F5F6F8;
		line-height: 32rpx;
		padding: 0 8rpx;
		margin-right: 8rpx;
		color: #6F7379;
		font-size: 10px;
	}

	.classify-tag {
		border-radius: 2px;
		background: #FFECE8;
		line-height: 36rpx;
		padding: 0 8rpx;
		margin-right: 8rpx;
		color: #F53F3F;
		font-size: 12px;
	}


	.bg-white {
		background-color: #fff;
	}

	.bold {
		font-weight: 400;
	}

	// 容器类
	.card-wrapper {
		border-radius: 8px;
		background: #FFF;
		padding: 24rpx;
	}

	.add-btn {
		width: 40px;
		height: 40px;
		position: fixed;
		z-index: 10;
		right: 10px;
		bottom: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 40px;
		background: linear-gradient(180deg, #F53F3F 0%, #FF7B7B 100%);
		box-shadow: 0px 4px 4px 0px rgba(245, 66, 66, 0.10);
	}

	.square-pink-btn {
		border-radius: 2px;
		background: #F5F6F8;
		line-height: 29px;
		padding: 12rpx 16rpx;
		display: inline-block;
	}

	.date-wrapper {
		border-radius: 2px;
		background: var(--unnamed, #FFECE8);
		color: var(--unnamed, #F53F3F);
		font-size: 10px;
		display: inline-block;
		line-height: 16px;
		padding: 0 6px;
	}


	//  渐变下划线
	.title-underline {
		border-bottom: 6px solid;
		border-image-source: linear-gradient(270deg, #F53F3F 0%, rgba(245, 63, 63, 0.00) 100%);
		border-image-slice: 1;
		line-height: 10px;
		margin: 10rpx 0;
	}

	// 颜色变量
	:root {
		/* Colors */
		--main-bg: #f5f6f8;
		--main-red: #f53f3f;
		--main-red-jb: linear-gradient(180deg, #F53F3F 0%, #FF7B7B 100%);
		--main-black: #444444;
		--main-white: #ffffff;
		--form-tips-grey: #ababac;
		--tips-grey: #6f7379;
		--tips-grey-2: #6f7379;
		--linear-tips-red: #ff9d9d;
		--tips-red: #ffece8;
		--tips-blue: #eff6fe;
		--tips-orange: #ff9a2e;
		--tips-brown: #bd6d3f;
		--box-border: #f2f3f5;
		--main-blue: #4b9fff;
		--dark-red: #c50000;
		--main-green: #50d266;

		/* Fonts */

		/* Effects */

	}
</style>