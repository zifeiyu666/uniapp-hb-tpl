<template>
	<view>
		<view class="header page-padding">
			<view class='u-flex u-row-between u-m-t-10 u-col-center'>
				<view class='u-flex'>

					<u-avatar :src='userInfo.avatar'></u-avatar>
					<view class='u-m-l-24'>
						<view class='font-main-black-18 ' @click='handleClickNickName'>
							{{hasLogin ? userInfo.nickname : '游客'}}
						</view>
						<view class='link' v-if='hasLogin'>
							个人主页
						</view>
					</view>
				</view>
				<view class='u-flex'>
					<!--  消息 -->
					<view class='u-rela msg-box' @click="handleNav('/pages/infoCenter/infoCenter')">
						<u-icon class='msg-icon' size='22' name="/static/icons/message.png"></u-icon>
						<u-badge class='u-abso num-box' type="error" max="99" value="10"></u-badge>
					</view>
					<!-- 设置 -->
					<u-icon @click="handleNav('/pages/settings/settings')" class='msg-icon u-m-l-10' size='22'
						name="/static/my/setting.png"></u-icon>
				</view>
			</view>
			<u-row class="u-m-t-40">
				<u-col :span='3' @click="handleNav('/pages/myCollection/myCollection')">
					<view class='u-flex u-flex-column u-row-center u-col-center'>
						<view class='font-main-black-20'>6</view>
						<view class='font-main-grey-14'>收藏</view>
					</view>
				</u-col>
				<u-col :span='3' @click="handleNav('/pages/myHistory/myHistory')">
					<view class='u-flex u-flex-column u-row-center u-col-center'>
						<view class='font-main-black-20'>6</view>
						<view class='font-main-grey-14'>足迹</view>
					</view>
				</u-col>
				<u-col :span='3'>
					<view @click="handleNav('/pages/myAllFocus/myAllFocus')"
						class='u-flex u-flex-column u-row-center u-col-center'>
						<view class='font-main-black-20'>6</view>
						<view class='font-main-grey-14'>关注</view>
					</view>
				</u-col>
				<u-col :span='3' @click="handleNav('/pages/myFans/myFans')">
					<view class='u-flex u-flex-column u-row-center u-col-center'>
						<view class='font-main-black-20'>{{userInfo.follower_notice}}</view>
						<view class='font-main-grey-14'>粉丝</view>
					</view>
				</u-col>
			</u-row>
		</view>

		<view class='page-padding'>
			<view class='card-wrapper'>
				<view>
					<u-icon name='/static/my/wallet.png' size="15" label="余额" labelColor="#6F7379"
						labelSize="12"></u-icon>
				</view>
				<view class='u-m-t-20 u-flex u-row-between'>
					<cn-money class='u-m-l-10 u-flex-1' :thousandth='true' color='#444444' :money="68.45"
						:size="64"></cn-money>
					<u-button text="立即提现" style="width: 88px" shape='circle' type='primary' size='small'
						color='linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%)'></u-button>
				</view>
				<view class='card-grey u-m-t-20'>
					<u-row>
						<u-col :span='4'>
							<view class='u-flex u-flex-column u-row-center u-col-center'>
								<view class='font-main-grey-14'>本月收益</view>
								<cn-money class='u-m-t-10 u-flex-1' :thousandth='true' color='#444444' :money="68.45"
									:size="32"></cn-money>
							</view>
						</u-col>
						<u-col :span='4'>
							<view class='u-flex u-flex-column u-row-center u-col-center'>
								<view class='font-main-grey-14'> 上月收益</view>
								<cn-money class='u-m-t-10 u-flex-1' :thousandth='true' color='#444444' :money="68.45"
									:size="32"></cn-money>
							</view>
						</u-col>
						<u-col :span='4'>
							<view class='u-flex u-flex-column u-row-center u-col-center'>
								<view class='font-main-grey-14'> 上月收益</view>
								<cn-money class='u-m-t-10 u-flex-1' :thousandth='true' color='#444444' :money="68.45"
									:size="32"></cn-money>
							</view>
						</u-col>

					</u-row>
				</view>
			</view>

			<view class='card-wrapper u-m-t-32'>
				<view class='font-main-black-16'>
					常用功能
				</view>
				<u-row class="u-m-t-40">
					<u-col :span='3'>
						<view class='u-flex u-flex-column u-row-center u-col-center'>
							<u-icon name='/static/my/order.png' size='26'></u-icon>
							<view @click="handleNav('/pages/myOrders/myOrders')" class='font-main-black-14 u-m-t-10'>
								我的订单</view>
						</view>
					</u-col>
					<u-col :span='3'>
						<view class='u-flex u-flex-column u-row-center u-col-center'>
							<u-icon name='/static/my/write.png' size='26'></u-icon>
							<view class='font-main-black-14 u-m-t-10'
								@click="handleNav('/pages/creationManagement/creationManagement')">创作管理</view>
						</view>
					</u-col>
					<u-col :span='3'>
						<view class='u-flex u-flex-column u-row-center u-col-center'>
							<u-icon name='/static/my/tips.png' size='26'></u-icon>
							<view class='font-main-black-14 u-m-t-10' @click="handleNav('/pages/breakNews/breakNews')">
								创作灵感</view>
						</view>
					</u-col>
					<u-col :span='3'>
						<view class='u-flex u-flex-column u-row-center u-col-center'>
							<u-icon name='/static/my/income.png' size='26'></u-icon>
							<view @click="handleNav('/pages/myIncome/myIncome')" class='font-main-black-14 u-m-t-10'>
								我的收益</view>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		computed: {
			...mapState(["userInfo", "hasLogin"]),
		},
		methods: {
			handleNav(url) {
				uni.navigateTo({
					url
				})
			},
			navToFocusPage() {
				uni.navigateTo({
					url: '/pages/myFocus/myFocus'
				})
			},
			handleClickNickName() {
				if (!this.hasLogin) {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				} else {
					uni.navigateTo({
						url: '/pages/userCenter/userCenter'
					})
				}
			}
		}
	}
</script>

<style scoped lang='scss'>
	.header {
		padding-top: env(safe-area-inset-top);
		background: linear-gradient(170deg, rgba(255, 255, 255, 0.00) 0%, #e4f4fb 20%, #F5F6F8 80%, #F5F6F8 100%);
		backdrop-filter: blur(10px);

		.link {
			color: #6F7379;
			font-size: 12px;
			text-decoration-line: underline;
		}

		.msg-box {
			width: 64rpx;
			height: 64rpx;
			display: flex;
			justify-content: center;
			align-items: center;

			.msg-icon {
				margin-top: 8rpx;
			}

			.num-box {
				right: 0;
				top: 0
			}
		}
	}

	.card-grey {
		border-radius: 8px;
		background: #F5F6F8;
		padding: 24rpx;
	}
</style>