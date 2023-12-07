<template>
	<view>
		<u-cell-group :customStyle="{'background': '#fff'}">
			<u-cell icon="setting-fill" title="个人资料设置" value="昵称,头像,地址等"></u-cell>
			<u-cell icon="lock-fill" title="账号与安全"></u-cell>
			<u-cell @click='navTo("/pages/authorize/authorize")' icon="lock-fill" title="账号绑定授权"></u-cell>
			<u-cell icon="chat-fill" title="APP推送设置"></u-cell>
			<u-cell icon="trash-fill" title="清除缓存"></u-cell>
			<u-cell icon="info-circle-fill" title="关于我们"></u-cell>
		</u-cell-group>
		<view class='page-padding'>
			<u-button @click="handleLogout" class="u-m-t-20" text="退出登录" shape='circle' type='primary'
				color='linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%)'></u-button>

		</view>

	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {

			}
		},
		methods: {
			...mapMutations('logout'),
			navTo(url) {
				uni.navigateTo({
					url
				})
			},
			handleLogout() {
				uni.clearStorageSync('token')
				// this.logout()
				uni.navigateTo({
					url: '/pages/login/login'
				})

			}
		}
	}
</script>

<style>

</style>