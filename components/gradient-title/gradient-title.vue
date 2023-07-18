<template>
	<view class='container'>
		{{title}}
	</view>
</template>

<script>
	export default {
		props: {
			title: String
		}
	}
</script>

<style scope>
	.container {
		border-radius: 20px;
		background: linear-gradient(90deg, #FFECE8 0%, rgba(255, 255, 255, 0.00) 100%);
		height: 28px;
		line-height: 28px;
		padding: 0 16rpx;
		display: inline-block;
	}
</style>