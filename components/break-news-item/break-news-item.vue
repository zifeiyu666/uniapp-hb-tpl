<template>
	<view class="goods-box u-flex">
		<u-image width="80" height="80" radius="8" src='https://cdn.uviewui.com/uview/swiper/swiper1.png'></u-image>
		<view class=' u-m-l-16'>
			<view class='u-line-2'>
				这样的剧本、导演、演员、观众、票房、议论、这就是软实力
			</view>

			<view class="u-flex u-row-right u-m-t-28">
				<u-tag text="爆好价" shape="circle" borderColor="#FFECE8" bgColor="#FFECE8" color="#f53f3f"> </u-tag>
				<u-tag text="发笔记" class='u-m-l-16' shape="circle" borderColor="#FFECE8"
					bgColor="linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%)" color="#fff">
				</u-tag>
			</view>
		</view>


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
		background-color: #FFFFFF;
		border-radius: 24rpx;
		padding: 24rpx;
		overflow: hidden;

	}
</style>