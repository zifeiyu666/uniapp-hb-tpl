<template>
	<view class='tag u-flex ' :style='{background: bgColor}'>
		<view class='tag redTag u-m-r-8'>券</view> <cn-money v-bind="$attrs" color='#f53f3f' :money="520"
			:size="24"></cn-money>
	</view>
</template>

<script>
	export default {
		props: {
			bgColor: {
				default: '#ffece8'
			}
		}
	}
</script>

<style lang='scss' scoped>
	.tag {
		/* background-color: $ytg-fuzhu-red; */
		padding: 0 6rpx 0 0;
		font-size: 24rpx;
		color: $ytg-main-red;
		height: 36rpx;
		line-height: 36rpx;
		border-radius: 4rpx;

		.redTag {
			padding-left: 6rpx;
			background-color: $ytg-main-red;
			color: #fff;
		}
	}
</style>