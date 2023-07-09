<template>
	<view class="goods-box">
		<u-image radius="4" width="120" height="120" src='https://cdn.uviewui.com/uview/swiper/swiper1.png'></u-image>
		<view class='goods-info '>
			<view class='u-lin-2'>
				百亿补贴：Hasee神舟 战神 15.6英寸游戏本：Has...
			</view>
			<view class="u-flex u-m-t-4">
				<view class="mini-tag">精选</view>
			</view>
			<view class='u-flex u-m-t-10'>
				<ytj-tag :price='12.123'></ytj-tag>
			</view>
			<view class="u-flex u-row-between u-m-t-8">
				<view class="info ">
					京东 | 3.30
				</view>
				<view class="u-flex ">
					<u-icon name='/static/followBuy/view.png' labelSize="10" label="150" size="16"></u-icon>
					<u-icon class='u-m-l-10' name='/static/followBuy/msg.png' labelSize="10" label="150"
						size="16"></u-icon>
					<u-icon class='u-m-l-10' name='/static/followBuy/zan.png' labelSize="10" label="150"
						size="16"></u-icon>
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