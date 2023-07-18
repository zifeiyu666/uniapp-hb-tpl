<template>
	<view class="content">
		<z-paging ref="paging" v-model="dataList" @query="queryList">
			<template #top>
				<view class='header-container'>
					<view class='header'>

						<!-- <u-navbar title="" leftIconColor='#fff' placeholder bgColor="rgba(0,0,0,0)" :autoBack="true">
							<u-icon size='20' slot='right' class="refresh" name="/static/common/refresh.png"></u-icon>
						</u-navbar> -->
						<refresh-navbar></refresh-navbar>

						<view class='brand u-flex u-flex-column u-row-center u-col-center'>
							<u--image width="270" height='42' src='/static/newCustomer/step.png'></u--image>
							<view class=' u-flex u-row-between u-m-t-20' style="width: 280px;">
								<view class='item'>选择商品</view>
								<view class='item'>领取红包和优惠券</view>
								<view class='item'>0元下单</view>
							</view>

						</view>
					</view>
				</view>


			</template>
			<!-- 如果希望其他view跟着页面滚动，可以放在z-paging标签内 -->
			<view class='goods-container page-padding'>
				<circle-tabs :tabList='tabList' defaultCurrent='all' @onchange='handleChange'></circle-tabs>
				<view class='goods-item' v-for="(item,index) in dataList" :key="index">
					<!-- <view class="goods-box">
						<u-image width="100%" height="80"
							src='https://cdn.uviewui.com/uview/swiper/swiper1.png'></u-image>
						<view>
							<u-icon size="32" name="/static/icons/jd.png" label='弗利萨家' label-size="14"></u-icon>
		
						</view>
					</view> -->
					<new-customer-goods-item @click.native='handleNavToDetail'></new-customer-goods-item>
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
				tabList: [{
						title: '全部',
						dataIndex: 'all'
					},
					{
						title: '母婴',
						dataIndex: 'muying'
					},
					{
						title: '美妆',
						dataIndex: 'meizhuang'
					},
					{
						title: '家居',
						dataIndex: 'jiaju'
					}
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
			handleNavToDetail() {
				uni.navigateTo({
					url: '/pages/freeOrderDetails/freeOrderDetails'
				})
			},
			handleChange(item) {
				console.log(item, 'item-=----=====');
			},

			// 高级搜索接收菜单结果
			confirm(e) {
				this.indexArr = e.index;
				this.valueArr = e.value;

			},


			queryList(pageNo, pageSize) {
				getMenu().then((res) => {

					// 将请求结果通过complete传给z-paging处理，同时也代表请求结束，这一行必须调用
					this.$refs.paging.complete(res);
				}).catch(res => {
					//如果请求失败写this.$refs.paging.complete(false);
					//注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方案可以全局统一处理
					//在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可
					this.$refs.paging.complete(false);
				})

			},
			itemClick(item) {
				console.log('点击了', item.title);
			}
		}
	}
</script>

<style lang='scss' scoped>
	.header-container {
		height: 250px;
		overflow: visible;

		.header {
			background-image: url('/static/newCustomer/banner.png');
			background-size: 100%;
			background-position: center;
			background-repeat: no-repeat;
			padding: 136px 32rpx 0 32rpx;
			height: 277px;

			.brand {
				background-color: #fff;
				/* height: 91px; */
				border-radius: 8px;
				background: #FFF;
				padding: 24rpx;

				.item {
					min-width: 42px;
					text-align: center;
				}

			}
		}
	}

	.header {
		background-image: url('/static/newCustomer/banner.png');
		background-size: 100%;
		background-position: center;
		background-repeat: no-repeat;
		padding: 96px 32rpx 0 32rpx;
		height: 277px;

		.brand {
			background-color: #fff;
			/* height: 91px; */
			border-radius: 8px;
			background: #FFF;
			padding: 24rpx;

			.item {
				min-width: 42px;
				text-align: center;
			}

		}
	}

	.goods-container {
		background-color: #fff;
		border-radius: 20px 20px 0px 0px;
		overflow: hidden
	}
</style>