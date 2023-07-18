<template>
	<view class="goods-box">
		<u-image radius="4" width="120" height="120" src='https://cdn.uviewui.com/uview/swiper/swiper1.png'></u-image>
		<view class='goods-info '>
			<view class='u-lin-2'>
				百亿补贴：Hasee神舟 战神 15.6英寸游戏本：Has...
			</view>

			<view class='u-m-t-8 u-flex'>
				<view class='tag'>2.9元红包</view>
				<view class='tag u-flex u-m-l-8'>
					<view class='tag redTag u-m-r-8'>券</view> <cn-money color='#f53f3f' :money="520"
						:size="24"></cn-money>
				</view>
			</view>
			<view class="price u-m-t-10">
				<line-progress :leftnums='8544' :rightnums='3004'></line-progress>
			</view>
			<view class="u-flex u-row-between u-m-t-8">
				<cn-money class='u-m-l-10' color='#f53f3f' :money="68.45" :size="28"></cn-money>
				<view class="u-flex" style="width: 90px;">
					<u-button text="立即选购" shape='circle' type='primary' size='small'
						color='linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%)' iconPos="right"
						icon="/static/common/lightning.png">
					</u-button>
				</view>
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
		border-radius: 8rpx;
		padding: 16rpx;
		overflow: hidden;
		display: flex;

		.goods-info {
			/* padding: 18rpx; */
			padding-left: 18rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-around;

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
				color: #6F7379;
				font-size: 10px;
			}
		}

	}
</style>