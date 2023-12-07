<template>
	<view class="goods-box">
		<u-image radius="4" width="120" height="120" :src="goodsInfo.goods_img_url"></u-image>
		<view class='goods-info '>
			<view class='u-lin-2'>

				{{goodsInfo.goods_title}}
			</view>

			<view class='u-m-t-8 u-flex u-row-between'>
				<view class='u-flex'>
					<cn-money class='u-m-l-10' color='#f53f3f' :money="parseFloat(goodsInfo.after_coupon_price)"
						:size="28"></cn-money>
					<cn-money class=' u-m-l-10' color="#9397a4" original
						:money="parseFloat(goodsInfo.price)"></cn-money>

				</view>
				<!-- <view class='tag'>2.9元红包</view> -->
				<view class="price">
					已购{{goodsInfo.sales_amount}}件
				</view>
			</view>
			<view class="price u-m-t-10 u-flex u-row-between">
				<view class='tag u-flex u-m-l-8'>
					<view class='tag redTag u-m-r-8'>券</view> <cn-money color='#f53f3f'
						:money="parseFloat(goodsInfo.coupon_discount)" :size="24"></cn-money>
				</view>
				<!-- <line-progress :leftnums='8544' :rightnums='3004'></line-progress> -->
				<view class='tag'>返现 <cn-money color='#f53f3f' :money="parseFloat(goodsInfo.commission)"
						:size="24"></cn-money> </view>
			</view>
			<view v-if='goodsInfo.shop_name' class="u-flex u-row-between u-m-t-8 " style="color: #aaa">
				{{goodsInfo.shop_name}}
				<!-- <cn-money class='u-m-l-10' color='#f53f3f' :money="parseFloat(goodsInfo.after_coupon_price)"
					:size="28"></cn-money> -->
				<!-- <view class="u-flex" style="width: 90px;">
					<u-button text="立即选购" shape='circle' type='primary' size='small'
						color='linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%)' iconPos="right"
						icon="/static/common/lightning.png">
					</u-button>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			goodsInfo: {
				type: Object
			}
		},

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