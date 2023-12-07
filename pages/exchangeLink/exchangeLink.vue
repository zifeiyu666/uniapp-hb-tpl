<template>
	<view class="page-wrapper">
		<view class="top ">
			<view class='tool-bar u-flex u-row-between'>
				<view class="font-main-red-14 u-flex u-col-center">
					<u-icon name='/static/link/link.png' size="18" class='u-m-r-6'></u-icon>
					待转链接
				</view>
				<view @click="clearUrl" class="font-main-black-14 u-flex u-col-center">
					<u-icon name='/static/link/close.png' size="18" class='u-m-r-6'></u-icon>
					清空
				</view>
			</view>

			<view class='link-content'>
				<u--textarea :style="{border: 'none'}" v-model="link" placeholder="请输入要转换的链接"
					height='200rpx'></u--textarea>
			</view>
		</view>

		<view class='u-m-t-30'>
			<u-button text="转换为我的链接" @click="changeLink" shape='circle' type='primary'
				color='linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%)'></u-button>
		</view>

		<view class="link-tutorial u-m-t-60">
			<view class='tutorial-title u-m-b-30'>
				<text class='under-line'>转链操作教程</text>
			</view>
			<view class='u-flex u-row-around'>
				<view class="step u-flex-column u-row-between u-col-center">
					<u-icon name="/static/link/one.png" size="24" class='u-m-t-20'></u-icon>
					<view class='u-m-t-10'>复制商品链接</view>
					<u-image src="/static/link/step1.png" width="180" mode="aspectFit">
					</u-image>
				</view>
				<view class="step u-flex-column u-row-between u-col-center">
					<u-icon name="/static/link/two.png" size="24" class='u-m-t-20'></u-icon>
					<view class='u-m-t-10'>把链接粘贴到转换区</view>
					<u-image src="/static/link/step2.png" width="180" mode="aspectFit">
					</u-image>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import {
		convertGoodsUrl
	} from '@/config/api.js'
	export default {
		data() {
			return {
				link: `【李佳琦直播间】卡诗山茶花护发精华油精油柔顺* 209.00元 热门商品 这么大的福利赶紧抢哦~ h:/37￥ CZ3457 tgRsWdwaD9E￥ `
			}
		},
		methods: {
			clearUrl() {
				this.link = ''
			},
			changeLink() {
				if (this.link) {
					convertGoodsUrl({
						goods_url: this.link
					}).then(res => {
						console.log(res);
					})
				}
			}
		}
	}
</script>

<style lang='scss' scoped>
	.top {
		/* height: 300rpx; */
		border-radius: 24rpx;
		padding: 24rpx;
		background: linear-gradient(180deg, #FFECE8 0%, #FFF 52.08%);

		.tool-bar {
			padding: 0 24rpx;
			color: $ytg-main-red;
			font-size: 14px;
			border-radius: 40rpx;
			line-height: 56rpx;
			background: linear-gradient(180deg, rgba(255, 219, 211, 0.80) 0%, rgba(255, 233, 228, 0.80) 100%);
			backdrop-filter: blur(10rpx);
		}

		.link-content {
			margin-top: 24rpx;
			padding: 24rpx;
			min-height: 240rpx;
			border-radius: 12px;
			background: #FFF;
			box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
		}


	}

	.link-tutorial {
		border-radius: 12px;
		background: $ytg-bg;
		/* height: 500rpx; */
		padding: 24rpx;

		.tutorial-title {
			font-size: 18px;
			text-align: center;
		}

		.step {
			height: 460rpx;
			width: 300rpx;
			border-radius: 12px;
			background: #FFF;
			box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
		}
	}
</style>

<style>
	body,
	uni-page-body {
		background-color: $ytg-bg !important;
	}
</style>