<!-- 在这个文件对每个tab对应的列表进行渲染 -->
<template>
	<view class="content page-wrapper">

		<z-paging ref="paging" v-model="dataList" @query="queryList" :fixed="false">

			<GoodsItem v-for="(item,index) in dataList" :goodsInfo='item' :key="index" @click="itemClick(item)">
			</GoodsItem>


		</z-paging>
	</view>
</template>

<script>
	import {
		getMenu,
		getTaobaoHomePageGoodsList
	} from '@/config/api.js';
	import GoodsItem from './goodsItem.vue';

	export default {
		components: {
			GoodsItem
		},
		data() {
			return {
				dataList: [],
				firstLoaded: false,
			}
		},
		props: {
			//当前组件的index，也就是当前组件是swiper中的第几个
			tabIndex: {
				type: Number,
				default: function() {
					return 0
				}
			},
			//当前swiper切换到第几个index
			currentIndex: {
				type: Number,
				default: function() {
					return 0
				}
			},
			classNavList: {
				type: Array,
			}
		},
		watch: {
			currentIndex: {
				handler(newVal) {
					if (newVal === this.tabIndex) {
						//懒加载，当滑动到当前的item时，才去加载
						if (!this.firstLoaded) {
							this.$nextTick(() => {
								setTimeout(() => {
									this.$refs.paging.reload();
								}, 100);
							})
						}
					}
				},
				immediate: true
			},
		},
		methods: {


			handleNavClick(index) {
				switch (index) {
					case 0:
						uni.navigateTo({
							url: '/pages/newCustomer/newCustomer'
						})
						break;
					case 3:
						uni.navigateTo({
							url: '/pages/breakNews/breakNews'
						})
						break;
					default:
						break;
				}
			},

			queryList(pageNo, pageSize) {
				console.log(this.classNavList, this.currentIndex, 'this.classNavList[this.current]');
				getTaobaoHomePageGoodsList({
					itemtitle: this.classNavList[this.currentIndex].cat_id
				}).then((res) => {
					console.log(res, 'res-=-=--===');

					// 将请求结果通过complete传给z-paging处理，同时也代表请求结束，这一行必须调用
					this.$refs.paging.complete(res);
				}).catch(res => {
					//如果请求失败写this.$refs.paging.complete(false);
					//注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方案可以全局统一处理
					//在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可
					this.$refs.paging.complete(false);
				})

				// 此处请求仅为演示，请替换为自己项目中的请求
				// this.$request.queryList({
				// 	pageNo,
				// 	pageSize
				// }).then(res => {
				// 	// 将请求结果通过complete传给z-paging处理，同时也代表请求结束，这一行必须调用
				// 	this.$refs.paging.complete(res.data.list);
				// })
			},
			itemClick(item) {
				console.log('点击了', item.title);
			}
		}
	}
</script>

<style lang='scss'>
	.grid-text {
		font-size: 14px;
		margin-top: 18rpx;
	}



	/* 注意:父节点需要固定高度，z-paging的height:100%才会生效 */
	.content {
		height: 100%;
	}

	.item {
		position: relative;
		height: 150rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0rpx 30rpx;
	}

	.item-detail {
		padding: 5rpx 15rpx;
		border-radius: 10rpx;
		font-size: 28rpx;
		color: white;
		background-color: #007AFF;
	}

	.item-line {
		position: absolute;
		bottom: 0rpx;
		left: 0rpx;
		height: 1px;
		width: 100%;
		background-color: #eeeeee;
	}

	.goods-item {
		margin-bottom: $ytg-page-spacing;
	}

	.goods-item:nth-child(odd) {
		padding-right: 12rpx;
	}

	.goods-item:nth-child(even) {
		padding-left: 12rpx;
	}

	.goods-container {
		margin-top: 40rpx;
	}
</style>