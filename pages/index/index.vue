<template>
	<!-- 使用z-paging-swiper为根节点可以免计算高度 -->
	<z-paging-swiper>
		<!-- 需要固定在顶部不滚动的view放在slot="top"的view中 -->
		<!-- 将不需要参与滚动的部分，放在slot="top"的view中，如果只有一个标签，可以直接在此标签上写slot="top"，将自定义的导航栏放到里面即可 -->
		<template #top>
			<view class="u-flex header-box safe-top">
				<!-- <u-avatar text='left'></u-avatar> -->
				<u-icon size="32" name="/static/icons/link.png" @click='navToLinkExchangePage'></u-icon>
				<view class="search-box">
					<u-search placeholder="请输入商品名称" @click='navToSearchPage' :disabled='true'
						:showAction="false"></u-search>
				</view>
				<view class='u-rela msg-box'>
					<u-icon class='msg-icon' size='22' name="/static/icons/message.png"></u-icon>
					<u-badge class='u-abso num-box' type="error" max="99" value="10"></u-badge>
				</view>
			</view>

			<z-tabs active-color='#f53f3f' inactive-color='#333' ref="tabs" bg-color='rgba(0,0,0,0)' :list="tabList"
				:current="current" @change="tabsChange">
				<view slot="right" style="padding-left: 4px;" @tap="$u.toast('插槽被点击')">
					<u-icon name="list" size="21" bold></u-icon>
				</view>
			</z-tabs>
		</template>

		<swiper class="swiper" :current="current" @transition="swiperTransition"
			@animationfinish="swiperAnimationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in tabList" :key="index">

				<!-- 首页 -->
				<swiper-list-item v-if='item.name === "首页"' :tabIndex="index"
					:currentIndex="current"></swiper-list-item>

				<!-- 母婴 -->
				<muying-list-item v-if='item.name === "母婴"'></muying-list-item>

				<!-- 美妆 -->
				<makeups v-if='item.name === "美妆"'></makeups>


			</swiper-item>
		</swiper>
	</z-paging-swiper>
</template>

<script>
	import {
		getMenu
	} from '../../config/api.js'

	import makeups from './components/makeups/index.vue'

	export default {
		components: {
			makeups
		},
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
					name: '首页',
				}, {
					name: '母婴',
				}, {
					name: '美妆'
				}, {
					name: '衣服'
				}, {
					name: '家居'
				}, {
					name: '家电'
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