<!-- 在这个文件对每个tab对应的列表进行渲染 -->
<template>
	<view class="content">

		<!-- 这里设置了z-paging加载时禁止自动调用reload方法，自行控制何时reload（懒加载）-->
		<!--  :enable-back-to-top=" currentIndex===tabIndex"
		在微信小程序上可以多加这一句，因为默认是允许点击返回顶部的，但是这个页面有多个scroll-view，会全部返回顶部，所以需要控制是当前index才允许点击返回顶部 -->
		<z-paging ref="paging" v-model="dataList" @query="queryList">

			<template #top>
				<view>
					<view class="header">
						<view class='top page-padding'>
							<view class="top-title font-main-black-16">
								<u-navbar title="我要爆料" placeholder bgColor="rgba(0,0,0,0)" :autoBack="true">
									<u-icon size='20' slot='right' class="refresh"
										name="/static/followBuy/refresh.png"></u-icon>
								</u-navbar>

								<!-- 专业测评
							<u-icon size='20' class="refresh" name="/static/followBuy/refresh.png"></u-icon> -->
							</view>

							<view>
								<u-row>
									<u-col :span='4'>
										<view class='u-flex u-flex-column u-flex-center '>
											<u-icon name='/static/breakNews/gybl.png' size='46'></u-icon>
											<view class='u-m-t-16'>
												关于爆料
											</view>
										</view>
									</u-col>
									<u-col :span='4'>
										<view class='u-flex u-flex-column u-flex-center '>
											<u-icon name='/static/breakNews/bljn.png' size='46'></u-icon>
											<view class='u-m-t-16'>
												爆料技能
											</view>
										</view>
									</u-col>
									<u-col :span='4'>
										<view class='u-flex u-flex-column u-flex-center '
											@click='handleNav("/pages/TalentList/TalentList")'>
											<u-icon name='/static/breakNews/drbd.png' size='46'></u-icon>
											<view class='u-m-t-16'>
												达人榜单
											</view>
										</view>
									</u-col>
								</u-row>
							</view>

							<view>

								<nav-card @click.native='navToSubmitBreakNews' title='爆好价' tips='爆料超值好价，共享优惠信息'
									navUrl='' icon='/static/breakNews/bhj.png' bgColor="#F4FBFF"></nav-card>
								<nav-card @click.native='navToSubmitNote' title='发笔记' tips='发布图文、视频，交流消费心得' navUrl=''
									icon='/static/breakNews/fbj.png' bgColor="#FFF8F1"></nav-card>
							</view>

						</view>
					</view>

				</view>

			</template>

			<view class='page-padding u-rela'>
				<view class='u-flex u-m-t-24'>
					<u-tag text="面部护肤" shape="circle" borderColor="#FFECE8" bgColor="#FFECE8" color="#f53f3f">
					</u-tag>
					<u-tag class='u-m-l-10' text="面部护肤" shape="circle" borderColor="#ffffff" bgColor="#ffffff"
						color="#444444">
					</u-tag>
				</view>

				<view class='goods-container u-rela'>
					<view class='u-abso' style="top:0">aaaa</view>
					<HM-filterDropdown menuTop='0' :filterData="filterData" :defaultSelected="defaultSelected"
						@confirm="confirm"></HM-filterDropdown>
					<u-grid :border="false" col="1">
						<u-grid-item class='goods-item' v-for="(item,index) in dataList" :key="index"
							@click="itemClick(item)">
							<break-news-item></break-news-item>
						</u-grid-item>
					</u-grid>
				</view>

			</view>


		</z-paging>
	</view>
</template>

<script>
	import {
		getMenu
	} from '@/config/api.js';

	import filterData from './filterData.js'
	export default {
		data() {
			return {

				//v-model绑定的这个变量不要在分页请求结束中自己赋值！！！
				dataList: [1, 2, 3, 4],
				firstLoaded: false,
				//  高级搜索相关
				filterData: filterData,
				defaultSelected: [],
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
			handleNav(url) {
				uni.navigateTo({
					url
				})
			},
			navToSubmitNote() {
				uni.navigateTo({
					url: '/pages/submitNote/submitNote'
				})
			},
			navToSubmitBreakNews() {
				uni.navigateTo({
					url: '/pages/submitBreakNews/submitBreakNews'
				})
			},
			// 高级搜索接收菜单结果
			confirm(e) {
				this.indexArr = e.index;
				this.valueArr = e.value;

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

<style lang='scss' scoped>
	.top {
		/* padding-top: env(safe-area-inset-top); */
		background: linear-gradient(180deg, #FDF6E9 0%, #FFF 25%);

		.top-title {
			text-align: center;
			position: relative;
			padding: $ytg-page-spacing;

			.refresh {
				position: absolute;
				right: $ytg-page-spacing;
				top: 20rpx;
			}
		}
	}

	.grid-text {
		font-size: 14px;
		margin-top: 18rpx;
	}



	/* 注意:父节点需要固定高度，z-paging的height:100%才会生效 */
	/* .content {
		height: 100%;
	} */

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


	.goods-container {
		margin-top: 40rpx;
		padding-top: 80rpx;
		background-color: #fff;
		border-radius: 12px;
		overflow: hidden;
	}
</style>