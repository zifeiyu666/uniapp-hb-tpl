<!-- 在这个文件对每个tab对应的列表进行渲染 -->
<template>
	<view class="content ">

		<z-paging ref="paging" v-model="dataList" @query="queryList" :fixed="false">
			<template #top>
				<view class='top page-padding'>
					<view class="top-title font-main-black-16">
						跟着买
					</view>
					<view class='u-flex'>
						<u-search class='u-m-r-50' :showAction="false" actionText="搜商品找评测" bgColor="#fff"
							searchIconColor='var(--main-red)' borderColor="var(--main-red)"
							:animation="true"></u-search>
						<u-icon size='20' class="refresh" name="/static/followBuy/refresh.png"></u-icon>
					</view>

					<view style="height: 10px;">
						<!-- <view>{{JSON.stringify(filterData)}}</view> -->
						<HM-filterDropdown menuTop='100' :filterData="filterData" :defaultSelected="defaultSelected"
							@confirm="confirm"></HM-filterDropdown>
					</view>

					<view class="u-flex">
						<u-tag text="标签" shape="circle" borderColor="#FFECE8" bgColor="#FFECE8" color="#f53f3f">
						</u-tag>
						<u-tag class='u-m-l-10' text="标签" shape="circle" borderColor="#F5F6F8" bgColor="#F5F6F8"
							color="#444444">
						</u-tag>
					</view>
				</view>

			</template>
			<!-- 如果希望其他view跟着页面滚动，可以放在z-paging标签内 -->
			<view class='goods-container page-padding'>
				<view class='goods-item' v-for="(item,index) in dataList" :key="index">
					<!-- <view class="goods-box">
						<u-image width="100%" height="80"
							src='https://cdn.uviewui.com/uview/swiper/swiper1.png'></u-image>
						<view>
							<u-icon size="32" name="/static/icons/jd.png" label='弗利萨家' label-size="14"></u-icon>

						</view>
					</view> -->
					<goods-list-row-item></goods-list-row-item>
				</view>
			</view>

		</z-paging>
	</view>
</template>

<script>
	import {
		getMenu
	} from '@/config/api.js';

	import data from '@/common/data.js'; //筛选菜单数据
	export default {
		data() {
			return {
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
				],

				//  高级搜索相关
				filterData: [],
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
		// 模拟高级搜索请求参数
		onLoad: function() {
			//定时器模拟ajax异步请求数据
			setTimeout(() => {
				this.filterData = data;
			}, 100);

			//模拟ajax请求子菜单数据。
			setTimeout(() => {
				console.log('修改菜单');
				// 这是不行的
				// this.filterData[2] = {
				// 	name:'附近',
				// 	"type": 'hierarchy',
				// 	"submenu": [{"name": "附近","value": "附近"},{"name": "1km","value": "1km"}]
				// };

				// splice方法才行
				this.filterData.splice(2, 1, {
					name: '附近',
					"type": 'hierarchy',
					"submenu": [{
						"name": "附近",
						"value": "附近"
					}, {
						"name": "1km",
						"value": "1km"
					}]
				})
				console.log("this.filterData[2]: " + JSON.stringify(this.filterData[2]));
			}, 5000)
			setTimeout(() => {
				//3秒后 修改defaultSelected
				this.changeSelected();
			}, 3000);
		},
		methods: {
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
		padding-top: env(safe-area-inset-top);
		background: linear-gradient(180deg, #FFECE8 0%, #FFF 52.92%);


		.top-title {
			text-align: center;
			position: relative;
			padding: $ytg-page-spacing;

			.refresh {
				position: absolute;
				right: $ytg-page-spacing;
				top: 36rpx;
			}
		}
	}



	.grid-text {
		font-size: 14px;
		margin-top: 18rpx;
	}



	/* 注意:父节点需要固定高度，z-paging的height:100%才会生效 */
	.content {
		height: 100vh;
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

	/* .goods-item:nth-child(odd) {
		padding-right: 12rpx;
	}

	.goods-item:nth-child(even) {
		padding-left: 12rpx;
	} */

	/* .goods-container {
		margin-top: 40rpx;
	} */
</style>