<template>
	<view class="goods-box">

		<view class='u-flex u-m-b-18'>
			<u-image src='/static/professional/pcrz.png' width="54px" height="16px" mode="aspectFit"></u-image>
			<view class="font-main-black-16 u-m-l-16">英氏洗护发套装</view>
		</view>
		<view class='font-tips-grey-12 u-m-t-18 u-m-b-18'>共2件测评精品</view>

		<u-row gutter="10">
			<u-col :span='4'>
				<u-image width="100%" height="99px" mode="aspectFit"></u-image>
			</u-col>
			<u-col :span='4'>
				<u-image width="100%" height="99px" mode="aspectFit"></u-image>
			</u-col>
			<u-col :span='4'>
				<u-image width="100%" height="99px" mode="aspectFit"></u-image>
			</u-col>
		</u-row>

		<view class='font-tips-grey-12 u-m-t-18 u-m-b-18 u-line-2'>一套搞定女童洗护发难题，再也不用担心长发打结，感受“滑梯”般柔顺体验</view>




	</view>
</template>

<script>
	export default {
		data() {
			return {}
		}
	}
</script>

<style lang='scss'>
	.goods-box {
		width: 100%;
		padding: 24rpx;
		overflow: hidden;
		border-radius: 8px;
		background: linear-gradient(180deg, rgba(255, 247, 232, 0.80) 0%, rgba(255, 255, 255, 0.80) 44.58%);
		backdrop-filter: blur(5px);
	}
</style>