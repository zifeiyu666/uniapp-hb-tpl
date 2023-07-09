<template>
	<!-- 使用z-paging-swiper为根节点可以免计算高度 -->
	<z-paging-swiper>
		<!-- 需要固定在顶部不滚动的view放在slot="top"的view中 -->
		<!-- 将不需要参与滚动的部分，放在slot="top"的view中，如果只有一个标签，可以直接在此标签上写slot="top"，将自定义的导航栏放到里面即可 -->
		<template #top>
			<view class='blur-bg'></view>
			<view style='margin-top: env(safe-area-inset-top);margin-bottom: 20rpx;'>
				<z-tabs class='u-m-t-80' bar-animate-mode='worm' :bar-width='+(tabList[current].name.length * 18)'
					:bar-style="{'border-radius': '1px',
'background': 'linear-gradient(270deg, #F53F3F 0%, rgba(245, 63, 63, 0.00) 100%)'}" active-color='#f53f3f'
					inactive-color='#333' ref="tabs" bg-color='rgba(0,0,0,0)' :list="tabList" :current="current"
					@change="tabsChange">
				</z-tabs>
			</view>

		</template>
		<!-- swiper必须设置height:100%，因为swiper有默认的高度，只有设置高度100%才可以铺满页面  -->
		<swiper class="swiper" :current="current" @transition="swiperTransition"
			@animationfinish="swiperAnimationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in tabList" :key="index">
				<search-header></search-header>
				<!-- 这里的swiper-list-item为demo中为演示用定义的组件，列表及分页代码在swiper-list-item组件内 -->
				<!-- 请注意，swiper-list-item非z-paging内置组件，在自己的项目中必须自己创建，若未创建则会报组件不存在的错误 -->
				<goods-list :tabIndex="index" :currentIndex="current"></goods-list>
			</swiper-item>
		</swiper>
	</z-paging-swiper>
</template>

<script>
	import {
		getMenu
	} from '../../config/api.js'
	export default {
		data() {
			return {
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				banner: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				tabList: [{
					name: '全部',
				}, {
					name: '跟买/好价',
				}, {
					name: '评测'
				}, {
					name: '种草'
				}, {
					name: '商品'
				}, {
					name: '用户'
				}]
			};
		},
		methods: {
			//tabs通知swiper切换
			tabChange(index) {
				this._setCurrent(index);
			},
			//swiper滑动中
			swiperTransition(e) {
				this.$refs.tabs.setDx(e.detail.dx);
			},
			//swiper滑动结束
			swiperAnimationfinish(e) {
				this.current = e.detail.current;
				this.$refs.tabs.unlockDx();
			},
			navToSearchPage() {
				uni.navigateTo({
					url: '/pages/search/index'
				})
			}
		},
	};
</script>
<style lang='scss'>
	.blur-bg {
		position: absolute;
		opacity: 0.3;
		width: 100%;
		padding-top: env(safe-area-inset-top);
		height: 300rpx;
		background: linear-gradient(94deg, rgba(255, 161, 180, 1) 0%, rgba(255, 161, 180, 1) 0%, rgba(255, 190, 203, 1) 8%, rgba(251, 247, 249, 1) 32%, rgba(255, 255, 255, 1) 64%, rgba(102, 112, 255, 1) 100%);
	}

	.swiper {
		height: 100%;
		background: #fff;
		border-top-left-radius: 40rpx;
		border-top-right-radius: 40rpx;
	}

	.header-box {
		padding: 0 $ytg-page-spacing;

		.search-box {
			margin: 0 20rpx;
			flex: 1
		}

		.msg-box {
			width: 64rpx;
			height: 64rpx;
			display: flex;
			justify-content: center;
			align-items: center;

			.msg-icon {
				margin-top: 8rpx;
			}

			.num-box {
				right: 0;
				top: 0
			}
		}
	}
</style>