<template>
	<view class="u-flex u-row-between container" :style="{background: bgColor}">

		<view class='u-flex'>
			<u-icon :name='icon' size='48'></u-icon>
			<view class='u-flex u-flex-column u-m-l-40 u-col-top'>
				<view class="font-main-black-16">{{title}}</view>
				<view class="font-tips-grey-12">{{tips}}</view>
			</view>
		</view>

		<u-icon name="arrow-right" color="#ABABAC" size='16'></u-icon>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			title: String,
			tips: String,
			navUrl: String,
			icon: String,
			bgColor: ''
		},
		methods: {

		}
	}
</script>

<style lang='scss' scoped>
	.container {
		margin-top: 20px;
		padding: 28rpx;
		border-radius: 8px;
	}
</style>