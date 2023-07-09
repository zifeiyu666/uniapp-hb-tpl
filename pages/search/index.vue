<template>
	<view>
		<u-navbar @rightClick="rightClick" bgColor="rgba(0,0,0,0)" :autoBack="true">
			<view class="nav-center" slot="center">
				<u-search bgColor='rgba(0,0,0,0)' borderColor='#f53f3f' searchIconColor='#f53f3f' :showAction="false"
					placeholder="请输入商品名称" v-model="keyword"></u-search>
			</view>
			<view class="nav-right" slot="right">
				搜索
			</view>
		</u-navbar>
		<view class='page-wrapper' v-if='!result.length || !keyword'>
			<view class="history">
				<view class="u-flex u-row-between">
					<view class='font-main-black-16'>
						搜索历史
					</view>
					<u-icon name='/static/icons/delete.png' size="16"></u-icon>
				</view>
				<view class='u-flex u-m-t-20'>
					<u-tag class='u-m-r-20' @click="(i) => search(i)" text="历史" bgColor='#f5f6f8' borderColor="#f5f6f8"
						color='#444' shape="circle"></u-tag>
					<u-tag class='u-m-r-20' text="历史22" bgColor='#f5f6f8' borderColor="#f5f6f8" color='#444'
						shape="circle"></u-tag>
					<u-tag class='u-m-r-20' text="历史333" bgColor='#f5f6f8' borderColor="#f5f6f8" color='#444'
						shape="circle"></u-tag>
				</view>
			</view>
		</view>
		<view v-else>
			<!-- <goods-list></goods-list> -->
			<search-list></search-list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				result: [123],
				keyword: ''
			}
		},
		methods: {
			search(i) {

			}
		}
	}
</script>

<style lang='scss'>
	.nav-center {
		width: 560rpx;
		padding-right: 20rpx;
	}

	.nav-right {
		color: $ytg-main-red;
	}
</style>

<style>
	body,
	uni-page-body {
		background-color: #fff !important;
	}

	.history {
		margin-top: env(safe-area-inset-top);
		padding-top: 80rpx;
	}
</style>