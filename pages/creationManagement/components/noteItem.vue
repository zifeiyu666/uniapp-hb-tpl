<template>
	<view class='u-flex u-flex-column container'>
		<!-- <view class='cell-container'>
			<view class="u-flex u-row-between ">
				<view class='u-flex'>

					<view class='u-rela'>
						<u-avatar></u-avatar>

					</view>

					<view class="u-flex u-flex-column u-col-top u-m-l-18">
						<view class='u-flex '> 店铺名称 <u-icon name="level" color='#ff9a2e'></u-icon> <u--text text='6'
								color='#ff9a2e'></u--text> </view>
						<view class='font-main-grey-12 u-line-1'> 付款时间：2023-08-04 12:00:03</view>
					</view>
				</view>
				<view>

					<u--text text='已结算' type='error'></u--text>
				</view>
			</view>
		</view> -->

		<!-- 商品 region -->
		<view class="goods-box">
			<u-image radius="4" width="100" height="100"
				src='https://cdn.uviewui.com/uview/swiper/swiper1.png'></u-image>
			<view class='goods-info '>
				<view class='u-lin-2'>
					百亿补贴：Hasee神舟 战神 15.6英寸游戏本：Has...
				</view>
				<!-- <view class="u-flex u-m-t-4">
					<view class="mini-tag">精选</view>
				</view> -->
				<view class='u-flex u-m-t-10 u-row-between'>
					<view style='flex-grow: 1;' class='u-flex'>
						<u--text type="success" size=13 text="已发布"></u--text>
						<u--text type="error" size=13 text="审核中"></u--text>
					</view>
				</view>
				<view class="u-flex u-row-between u-m-t-8">
					<view class="info ">
						05:30
					</view>
					<view class="u-flex ">
						<u--text size=13 type='error' text="删除" @click='handleDelete'></u--text>
						<u--text class="u-m-l-20" size=13 text="编辑" @click='handleEdit'></u--text>
					</view>
				</view>
			</view>
		</view>

	</view>

</template>

<script>
	export default {
		props: {
			queryList: {
				require: true,
				type: Function,
			}
		},
		data() {
			return {}
		},
		methods: {
			handleDelete() {
				let that = this
				uni.showModal({
					title: '提示',
					content: '确认删除？',
					confirmColor: '#dd524d',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							console.log(this.$parent);
							that.queryList();
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			handleEdit() {
				console.log('edit----');
				uni.navigateTo({
					url: '/pages/submitBreakNews/submitBreakNews?id=123'
				})
			}
		}
	}
</script>

<style lang='scss' scoped>
	.container {
		width: 100%;
		background-color: #FFFFFF;
		border-radius: 8rpx;
		padding: 16rpx;
		overflow: hidden;
	}

	.cell-container {
		width: 100%;
		background-color: #fff;
		/* border-radius: 12px; */
		/* padding: 16px; */
		margin-bottom: 12px;
	}

	.cell-list {
		.cell-item {
			background-color: var(--main-bg);
			border-radius: 6px;
			padding: 12px 15px;
			margin-top: 8px;
		}
	}

	.goods-box {
		width: 100%;
		background-color: #FFFFFF;
		border-radius: 8rpx;
		/* padding: 16rpx; */
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