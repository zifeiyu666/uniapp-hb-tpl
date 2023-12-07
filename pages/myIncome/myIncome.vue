<template>
	<view class='page-padding'>
		<view class='card-wrapper'>
			<view>
				<u-icon name='/static/my/wallet.png' size="15" label="账户余额" labelColor="#6F7379"
					labelSize="12"></u-icon>
			</view>
			<view class='u-m-t-20 u-flex u-row-between'>
				<cn-money class='u-m-l-10 u-flex-1' :thousandth='true' color='#444444' :money="68.45"
					:size="64"></cn-money>
				<u-button text="提现" style="width: 88px" shape='circle' type='primary' size='small'
					color='linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%)'></u-button>
			</view>

			<view class='u-flex u-row-left u-m-t-20' style='color: #F53F3F'>
				<view @click='handleNav("/pages/billingDetails/billingDetails")'>
					结算明细
				</view>
				<view class='u-m-l-20' @click='handleNav("/pages/balanceChange/balanceChange")'>
					余额变动
				</view>
				<!-- <u--text text='结算明细' color='#F53F3F'></u--text> -->
				<!-- <u--text text='余额变动' color='#F53F3F'></u--text> -->
			</view>

			<view class='card-grey u-m-t-20'>
				<u-row class=' u-m-b-30'>
					<u-col :span='6'>
						<view class='u-flex  u-row-center u-col-center'>
							<view class='font-main-grey-14 u-m-r-20'>累计收益</view>
							<cn-money class='u-m-t-10 u-flex-1' :thousandth='true' color='#444444' :money="68.45"
								:size="32"></cn-money>
						</view>
					</u-col>
					<u-col :span='6'>
						<view class='u-flex  u-row-center u-col-center'>
							<view class='font-main-grey-14 u-m-r-20'>已结算收益</view>
							<cn-money class='u-m-t-10 u-flex-1' :thousandth='true' color='#444444' :money="68.45"
								:size="32"></cn-money>
						</view>
					</u-col>
				</u-row>
				<u-row>
					<u-col :span='6'>
						<view class='u-flex  u-row-center u-col-center'>
							<view class='font-main-grey-14 u-m-r-20'>累计分享收益</view>
							<cn-money class='u-m-t-10 u-flex-1' :thousandth='true' color='#444444' :money="68.45"
								:size="32"></cn-money>
						</view>
					</u-col>
					<u-col :span='6'>
						<view class='u-flex  u-row-center u-col-center'>
							<view class='font-main-grey-14 u-m-r-20'>累计创作收益</view>
							<cn-money class='u-m-t-10 u-flex-1' :thousandth='true' color='#444444' :money="68.45"
								:size="32"></cn-money>
						</view>
					</u-col>

				</u-row>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			handleNav(url) {
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style>

</style>