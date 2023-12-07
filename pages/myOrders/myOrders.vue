<template>
	<z-paging-swiper>
		<template #top>
			<view class="header">
				<view class='top page-padding'>
					<view class="top-title font-main-black-16">
						<u-navbar title="我的订单" placeholder bgColor="rgba(0,0,0,0)" :autoBack="true">
						</u-navbar>
					</view>
					<z-tabs inactiveColor="#6F7379" :activeStyle="{'font-size': '16px'}" bar-animate-mode='worm'
						:bar-width='+(tabList[current].name.length * 18)' :bar-style="{'border-radius': '1px',
					'background': 'linear-gradient(270deg, #F53F3F 0%, rgba(245, 63, 63, 0.00) 100%)'}" active-color='#f53f3f'
						ref="tabs" bg-color='rgba(0,0,0,0)' :list="tabList" :current="current" @change="tabsChange">

					</z-tabs>
				</view>
			</view>
		</template>

		<swiper class="swiper" :current="current" @transition="swiperTransition"
			@animationfinish="swiperAnimationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in tabList" :key="index">

				<CollectionList :tabIndex="index" :currentIndex="current"></CollectionList>
			</swiper-item>
		</swiper>
	</z-paging-swiper>
</template>

<script>
	import {
		getMenu
	} from '../../config/api.js'

	import CollectionList from './components/collection-list.vue'

	export default {
		components: {
			CollectionList
		},
		data() {
			return {
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				tabList: [{
					name: '全部',
				}, {
					name: '淘宝',
				}, {
					name: '拼多多'
				}, {
					name: '京东'
				}, {
					name: '唯品会'
				}, {
					name: '抖音'
				}]
			};
		},
		methods: {
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
<style lang='scss' scoped>
	.top {
		background: linear-gradient(180deg, #DCF7FF 0%, #FFF 52.92%);

		.top-title {
			text-align: center;
			position: relative;
			/* padding: $ytg-page-spacing; */

			.refresh {
				position: absolute;
				right: $ytg-page-spacing;
				top: 20rpx;
			}
		}
	}

	.swiper {
		height: 100%;
	}

	.header {
		background: linear-gradient(170deg, rgba(255, 255, 255, 0.00) 0%, #e4f4fb 20%, #F5F6F8 80%, #F5F6F8 100%);
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