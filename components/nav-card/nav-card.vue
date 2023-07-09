<template>
	<view class="u-flex u-fow-center container" :style="{background: bgColor}">

		<view class='u-flex'>
			<u-icon :name='icon' size='48'></u-icon>
			<view class='u-flex u-flex-column u-m-l-40'></view>
		</view>

		<u-icon name="arrow-right" size='16'></u-icon>
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
		padding: 28rpx 48rpx;
		border-radius: 8px;
	}
</style>