<template>
	<!-- 使用z-paging-swiper为根节点可以免计算高度 -->
	<z-paging-swiper>
		<!-- 需要固定在顶部不滚动的view放在slot="top"的view中 -->
		<!-- 将不需要参与滚动的部分，放在slot="top"的view中，如果只有一个标签，可以直接在此标签上写slot="top"，将自定义的导航栏放到里面即可 -->
		<template #top>
			<view class="header">
				<view class="u-flex header-box safe-top">
					<!-- <u-avatar text='left'></u-avatar> -->
					<u-icon size="32" name="/static/icons/link.png" @click='navToLinkExchangePage'></u-icon>
					<view class="search-box">
						<u-search placeholder="请输入商品名称" bgColor="#fff" @click='navToSearchPage' :disabled='true'
							:showAction="false"></u-search>
					</view>
					<view class='u-rela msg-box'>
						<u-icon class='msg-icon' size='22' name="/static/icons/message.png"></u-icon>
						<u-badge class='u-abso num-box' type="error" max="99" value="10"></u-badge>
					</view>
				</view>
				<view class='u-m-l-32 u-m-r-32 u-m-t-20'>
					<share-header-nav class='u-m-b-20' :list='list'></share-header-nav>
					<!-- <z-tabs inactiveColor="#6F7379" :activeStyle="{'font-size': '16px'}" bar-animate-mode='worm'
						:bar-width='+(tabList[current].name.length * 18)' :bar-style="{'border-radius': '1px',
'background': 'linear-gradient(270deg, #F53F3F 0%, rgba(245, 63, 63, 0.00) 100%)'}" active-color='#f53f3f' ref="tabs"
						bg-color='rgba(0,0,0,0)' :list="tabList" :current="current" @change="tabsChange">
						<view slot="right" style="padding-left: 4px;" @tap="navToCategoryPage">
							<u-icon name="list" size="21" bold></u-icon>
						</view>
					</z-tabs> -->

				</view>


			</view>

		</template>
		<share-list :tabIndex="index" :currentIndex="current"></share-list>
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
						title: '每日优选',
						icon: '/static/growGrass/focus.png'
					},
					{
						title: '达人榜单',
						path: '/pages/TalentList/TalentList',
						icon: '/static/growGrass/list.png'
					},
					{
						title: '种草技能',
						path: '/pages/grassNote/grassNote',
						icon: '/static/growGrass/grow.png'
					},
					{
						title: '专业测评',
						path: '/pages/professionalAssessment/professionalAssessment',
						icon: '/static/growGrass/master.png'
					},
					{
						title: '营销日历',
						icon: '/static/growGrass/list.png'
					},
					{
						title: '拉新造势',
						icon: '/static/growGrass/grow.png'
					},
					{
						title: '活动素材',
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
		height: 100%;
	}

	.header {
		background: #fff;
		/* filter: blur(23px); */
		backdrop-filter: blur(10px);
		margin-bottom: -32rpx;
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