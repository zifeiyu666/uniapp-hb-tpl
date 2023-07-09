<template>
	<view class="goods-box">
		<u-image width="100%" height="111" src='https://cdn.uviewui.com/uview/swiper/swiper1.png'></u-image>
		<view class='goods-info'>
			<view class='goods-title'>
				<u-icon size="16" name="/static/icons/jd.png" label='弗利萨家' label-color="#444444"
					label-size="14"></u-icon>
			</view>
			<view class="price u-m-t-8">
				到手价
				<cn-money class='u-m-l-10' color='#f53f3f' :money="68.45" :size="28"></cn-money>
				<cn-money class='u-m-l-10' :money="68.39" color="#6F7379" original></cn-money>
			</view>
			<view class='u-m-t-8 u-flex'>
				<view class='tag'>返<cn-money color='#f53f3f' :money="520" :size="24"></cn-money></view>
				<view class='tag u-flex u-m-l-8'>
					<view class='tag redTag u-m-r-8'>券</view> <cn-money color='#f53f3f' :money="520"
						:size="24"></cn-money>
				</view>
			</view>
			<view class="info u-m-t-8">
				京东 | 3.30
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
		overflow: hidden;

		.goods-info {
			padding: 18rpx;

			.goods-title {
				height: 40rpx;
				/* margin-top: 10rpx; */
				display: flex;
				/* justify-content: center; */
				align-items: center;

				/deep/.u-icon__label {
					font-weight: bold;
				}

			}

			.price {
				font-size: 10px;
				color: $ytg-fuzhu-grey;
			}

			.tag {
				background-color: $ytg-fuzhu-red;
				padding: 0 6rpx;
				font-size: 24rpx;
				color: $ytg-main-red;
				height: 36rpx;
				line-height: 36rpx;
				border-radius: 4rpx;

				.redTag {
					background-color: $ytg-main-red;
					color: #fff;
				}
			}

			.info {
				color: var(--unnamed, #ABABAC);
				font-size: 10px;
			}
		}

	}
</style>