<template>
	<view>
		<u-cell-group :customStyle="{'background': '#fff'}">
			<u-cell @click='handleBind("WX")' icon="pushpin-fill" title="微信绑定"
				:value="userInfo['wx_bind'] == '1' ? '已绑定' : '未绑定'"></u-cell>
			<u-cell @click='handleBind("TB")' icon="pushpin-fill" title="淘宝授权"
				:value="userInfo['taobao_bind'] == '1' ? '已绑定' : '未绑定'"></u-cell>
			<!-- <u-cell icon="pushpin-fill" title="拼多多授权" :value="userInfo['wx_bind'] == '1' ? '已绑定' : '未绑定'"></u-cell>
			<u-cell icon="pushpin-fill" title="京东授权" :value="userInfo['wx_bind'] == '1' ? '已绑定' : '未绑定'"></u-cell> -->
			<u-cell icon="phone-fill" title="修改手机号"></u-cell>
			<u-cell icon="setting-fill" title="设置密码" :value="userInfo['wx_bind'] == '1' ? '已绑定' : '未绑定'"></u-cell>
			<u-cell title="注销账号">

				<view slot='icon'>
					<u-icon name='close-circle-fill'></u-icon>
				</view>
			</u-cell>

		</u-cell-group>

		<!-- <web-view id="web-view" class="uni-flex-item" :src="authUrl" :webview-styles="webview_styles">
		</web-view> -->
	</view>
</template>


<script>
	import {
		bindWX,
		bindJD,
		bindTB,
		bindPDD,
		getUserInfo
	} from '@/config/api.js';
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		mounted() {
			console.log('-------------授权页面');
		},
		data() {
			return {
				authUrl: 'https://oauth.taobao.com/authorize?client_id=34461637&response_type=code&redirect_uri=http%3A%2F%2Fwww.youtogo.cn%2Fcallback%2Foauth%2Ftaobao&state=19&view=web',
				webview_styles: {
					progress: {
						color: '#FF3333'
					}
				},
				webviewContext: null,
				loadError: false
			}
		},
		computed: {
			...mapState(['userInfo'])
		},
		methods: {
			...mapMutations(['updateUserInfo']),
			handleBind(type) {
				console.log('-=-=-=-=')
				uni.setStorageSync('foo', 'adsfasfasdfasdfas')
				console.log(uni.getStorageSync('token'), '-=-=token');
				console.log(uni.getStorageSync('foo'), '-=-=foo');
				// return
				let bind;
				switch (type) {
					case 'WX':
						bind = bindWX
						break;
					case '':
						bind = bindJD
						break;
					case 'TB':
						bind = bindTB
						break;
					case 'PDD':
						bind = bindPDD
						break;
					default:
						break;
				}
				bind().then((res) => {
					this.authUrl = res
					plus.runtime.openURL(res)
					console.log('----------res', res);
					// uni.showModal({
					// 	title: " 绑定成功"
					// })
					getUserInfo().then(res => {
						this.updateUserInfo(res)
					})

				})
			}
		}
	}
</script>

<style>
	.uni-flex-item {
		margin-top: 500px;
	}
</style>