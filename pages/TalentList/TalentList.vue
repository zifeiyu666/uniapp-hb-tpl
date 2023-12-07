<template>
	<!-- 使用z-paging-swiper为根节点可以免计算高度 -->
	<z-paging-swiper>
		<!-- 需要固定在顶部不滚动的view放在slot="top"的view中 -->
		<!-- 将不需要参与滚动的部分，放在slot="top"的view中，如果只有一个标签，可以直接在此标签上写slot="top"，将自定义的导航栏放到里面即可 -->
		<template #top>
			<view class="header">
				<view>
					<u-navbar title="" bgColor="rgba(0,0,0,0)" leftIconColor='#fff' placeholder :autoBack="true">
					</u-navbar>
				</view>
				<view class='tabs'>
					<z-tabs inactiveColor="#6F7379" :activeStyle="{'font-size': '16px'}" bar-animate-mode='worm'
						:bar-width='+(tabList[current].name.length * 18)'
						:bar-style="{'border-radius': '1px',
					'background': 'linear-gradient(270deg, #F53F3F 0%, rgba(245, 63, 63, 0.00) 100%)','position':'relative', 'left': '-3px'}" active-color='#f53f3f' ref="tabs"
						bg-color='rgba(0,0,0,0)' :list="tabList" :current="current" @change="tabsChange">
						<view slot="right" style="padding-left: 4px;" @tap="navToCategoryPage">
							<u-icon name="list" size="21" bold></u-icon>
						</view>
					</z-tabs>
				</view>

			</view>
		</template>
		<!-- swiper必须设置height:100%，因为swiper有默认的高度，只有设置高度100%才可以铺满页面  -->
		<swiper class="swiper" :current="current" @transition="swiperTransition"
			@animationfinish="swiperAnimationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in tabList" :key="index">
				<!-- 这里的swiper-list-item为demo中为演示用定义的组件，列表及分页代码在swiper-list-item组件内 -->
				<!-- 请注意，swiper-list-item非z-paging内置组件，在自己的项目中必须自己创建，若未创建则会报组件不存在的错误 -->
				<talent-list :tabIndex="index" :currentIndex="current"></talent-list>
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
				list: [{
						title: '我的关注',
						icon: '/static/growGrass/focus.png'
					},
					{
						title: '达人榜单',
						icon: '/static/growGrass/list.png'
					},
					{
						title: '种草技能',
						icon: '/static/growGrass/grow.png'
					},
					{
						title: '专业测评',
						icon: '/static/growGrass/master.png'
					},
				],
				tabList: [{
					name: '关注',
				}, {
					name: '推荐',
				}, {
					name: '电影'
				}, {
					name: '科技'
				}, {
					name: '音乐'
				}, {
					name: '美食'
				}, {
					name: '文化'
				}, {
					name: '财经'
				}, {
					name: '手工'
				}]
			};
		},
		methods: {
			navToCategoryPage() {
				uni.navigateTo({
					url: '/pages/growGrassCategory/growGrassCategory'
				})
			},

			setCurrent(index) {
				this.current = index
			},
			//tabs通知swiper切换
			tabsChange(index) {
				this.setCurrent(index);
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
			},
			navToLinkExchangePage() {
				uni.navigateTo({
					url: '/pages/exchangeLink/exchangeLink'
				})
			}
		},
	};
</script>
<style lang='scss'>
	.swiper {
		height: calc(100% + 60px);
		background: #FFF;
		margin-top: -20px;
	}

	.tabs {
		border-radius: 20px 20px 0px 0px;
		background: #FFF;
		margin-top: 18px;
		padding: 0 10px;
		position: absolute;
		width: 100%;
		bottom: 20px;
	}

	.header {
		background-image: url('/static/talentList/banner.png');
		background-size: 100%;
		background-repeat: no-repeat;
		background-position: center;
		height: 396rpx;
		z-index: 0;
		position: relative;

		/* .title {
			color: #fff;
			margin-top: env(safe-area-inset-top);
			padding-top: 10px;
			text-align: center;
			text-shadow: 0px 4px 4px 0px #FF7243;
			font-size: 40px;
		} */
	}

	.header-box {
		padding: 0 $ytg-page-spacing;

		/* background: linear-gradient(92deg, rgba(255, 255, 255, 0.00) 0%, #EAFFFB 48.72%, #E3FFFA 100%); */
		/* filter: blur(23px);
		backdrop-filter: blur(10px); */

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