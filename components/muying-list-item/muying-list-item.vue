<!-- 在这个文件对每个tab对应的列表进行渲染 -->
<template>
	<view class="content page-padding">
		<!-- 这里设置了z-paging加载时禁止自动调用reload方法，自行控制何时reload（懒加载）-->
		<!--  :enable-back-to-top=" currentIndex===tabIndex"
		在微信小程序上可以多加这一句，因为默认是允许点击返回顶部的，但是这个页面有多个scroll-view，会全部返回顶部，所以需要控制是当前index才允许点击返回顶部 -->
		<z-paging ref="paging" v-model="dataList" @query="queryList" :fixed="false">
			<u-swiper :list="list1"></u-swiper>

			<!-- 模块1 start -->
			<muying-tabs class='u-m-t-20' :tabList="tabList" defaultCurrent="beiyun"
				@onchange='handleTabChange'></muying-tabs>
			<view class='block-one-container u-m-t-20'>
				<circle-tabs :tabList="classifyList" defaultCurrent="jsyp"></circle-tabs>
				<u-scroll-list indicatorActiveColor='var(--main-red)'>
					<view v-for="(item, index) in scrollList" :key="index" class="u-m-r-10">
						<u--image width="92" height="92" radius='4' :src="item.thumb"></u--image>
						<view class='u-text-center u-m-t-10' style="width: 92px;">{{item.title}}</view>
					</view>
				</u-scroll-list>
			</view>
			<!-- 模块 end -->
			<!-- 模块2 start -->
			<common-tabcards class='u-m-t-20' :tabList="cardTabList" :current="current"
				@onchange='handleTabCardsChange'>
				<view v-if='current === "pcdg"'>
					<view class='u-p-24'>
						<circle-tabs :tabList="tabList" activeColor='#fff'
							activeBg='linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%)'
							defaultCurrent="jsyp"></circle-tabs>
						<u-scroll-list indicatorActiveColor='var(--main-red)' class='u-m-t-30'>
							<view v-for="(item, index) in scrollList" :key="index" class="u-m-r-40">
								<goods-pingce-item></goods-pingce-item>
							</view>
						</u-scroll-list>
					</view>
				</view>
				<view v-else>
					sssss.........
				</view>
			</common-tabcards>
			<!-- 模块2 end -->




		</z-paging>
	</view>
</template>

<script>
	import {
		getMenu
	} from '@/config/api.js';

	export default {
		data() {
			return {
				current: 'pcdg',
				cardTabList: [{
					title: '评测导购',
					dataIndex: 'pcdg'
				}, {
					title: '榜单推荐',
					dataIndex: 'bdtj'
				}],

				scrollList: [{
					thumb: "https://cdn.uviewui.com/uview/goods/1.jpg",
					title: '备孕纸巾'
				}, {
					thumb: "https://cdn.uviewui.com/uview/goods/2.jpg",
					title: '备孕纸巾'
				}, {
					thumb: "https://cdn.uviewui.com/uview/goods/3.jpg",
					title: '备孕纸巾'
				}, {
					thumb: "https://cdn.uviewui.com/uview/goods/4.jpg"
				}, {
					thumb: "https://cdn.uviewui.com/uview/goods/5.jpg"
				}],
				classifyList: [{
						title: "计生用品",
						dataIndex: 'jsyp'
					},
					{
						title: "美容馆",
						dataIndex: 'mrg'
					},
				],

				tabList: [{
					title: "备孕",
					dataIndex: 'beiyun'
				}, {
					title: "孕期",
					dataIndex: 'yunqi'
				}, {
					title: " 产后",
					dataIndex: 'chanhou'
				}, {
					title: "1-6月",
					dataIndex: '1to6'
				}, {
					title: "6-12月",
					dataIndex: '6to12'
				}, {
					title: "全部",
					dataIndex: 'all'
				}],
				list: [{
						title: '新人免单'
					},
					{
						title: '本地生活'
					},
					{
						title: '专业测评'
					},
					{
						title: '我要爆料'
					},
					{
						title: '颜研社'
					},
					{
						title: '淘宝'
					},
					{
						title: '京东'
					},
					{
						title: '拼多多'
					},
					{
						title: '唯品会'
					},
					{
						title: '抖音'
					},
				],
				//v-model绑定的这个变量不要在分页请求结束中自己赋值！！！
				dataList: [1, 2, 3, 4],
				firstLoaded: false,
				list1: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				]
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
			handleTabCardsChange(item) {
				console.log('item----', item);
				this.current = item.dataIndex
			},

			handleTabChange(item) {
				console.log(item, 'item-=-====');
			},

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
				getMenu().then((res) => {
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

	.block-one-container {
		background: #fff;
		border-radius: 8px;
		padding: 24rpx;
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