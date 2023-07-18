<template>
	<view style='padding-bottom: 80px;'>
		<view>
			<refresh-navbar leftIcon='/static/common/bg-left.png' rightIcon='/static/common/bg-refresh.png'
				iconSize='24' @rightClick="rightClick" :autoBack="true">
			</refresh-navbar>
			<u-swiper height='375' radius="0" :indicator='true' :list="list1"></u-swiper>
		</view>
		<view class='page-padding '>
			<sale-banner></sale-banner>
			<guide class='u-m-t-32'></guide>

			<view class="card-wrapper u-m-t-32">
				<gradient-title title='图文详情'></gradient-title>
			</view>
		</view>

		<view class="footer u-flex u-flex-column u-row-center u-col-center">
			<view class='font-main-red-12'>优兔购全额返 ¥ 2.9</view>
			<view class="btn u-m-t-8">
				领券购买 <cn-money class='u-m-l-10' color='#fff' :money="68.45" :size="32"></cn-money>
			</view>
		</view>


	</view>

</template>

<script>
	import saleBanner from './components/sale-banner.vue'
	import guide from './components/guide.vue'
	export default {
		components: {
			saleBanner,
			guide
		},
		data() {
			return {
				list1: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang='scss' scoped>
	.footer {
		background-color: #fff;
		padding: 16rpx;
		box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.05);
		position: fixed;
		width: 100%;
		bottom: 0;

		.btn {
			border-radius: 40px;
			line-height: 40px;
			text-align: center;
			width: 80%;
			color: #fff;
			font-size: 16px;
			background: linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%);
		}
	}
</style>