<template>
	<view class="goods-box">
		<u-image width="100%" height="111" src='https://cdn.uviewui.com/uview/swiper/swiper1.png'></u-image>
		<view class='goods-info'>
			<view class='goods-title'>
				<!-- <u-icon size="16" name="/static/icons/jd.png" label='弗利萨家' label-color="#444444"
					label-size="14"></u-icon> -->
				<view class='u-line-2'>
					为中国宝宝提供科学养育支持，为中国妈妈...
				</view>
			</view>


			<view class="u-flex u-row-between">
				<view class="info u-m-t-8">
					<u-icon size="16" name="/static/common/zan.png" label='10W+' label-color="var(--main-red)"
						label-size="14"></u-icon>
				</view>
				<view class="info u-m-t-8">
					105W+ 浏览
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
		width: 300rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
		overflow: hidden;

		.goods-info {
			padding: 18rpx;

			.goods-title {
				/* height: 40rpx; */
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