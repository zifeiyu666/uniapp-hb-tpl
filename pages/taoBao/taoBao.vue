<template>
	<!-- 使用z-paging-swiper为根节点可以免计算高度 -->
	<z-paging-swiper>
		<!-- 需要固定在顶部不滚动的view放在slot="top"的view中 -->
		<!-- 将不需要参与滚动的部分，放在slot="top"的view中，如果只有一个标签，可以直接在此标签上写slot="top"，将自定义的导航栏放到里面即可 -->
		<template #top>
			<view class="u-flex header-box safe-top">
				<!-- <u-avatar text='left'></u-avatar> -->
				<u-icon size="20" name="arrow-left" @click='goBack'></u-icon>
				<view class="search-box" @click='navToSearchPage'>
					<u-search placeholder="请输入商品名称" :disabled='true' :showAction="false"></u-search>
				</view>
				<!-- <view class='u-rela msg-box'>
					<u-icon class='msg-icon' size='22' name="/static/icons/message.png"></u-icon>
					<u-badge class='u-abso num-box' type="error" max="99" value="10"></u-badge>
				</view> -->
			</view>
			<u-swiper keyName="image" class='u-m-t-30' :list="bannerList"></u-swiper>
			<u-grid @click='handleNavClick' class='u-m-t-26 u-m-b-30' :border="false" col="5">
				<u-grid-item v-for="(listItem,listIndex) in navIconList" @click="handleNav(listItem.url)"
					:key="listIndex">
					<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="'/static/icons/index_icon' + listIndex + '.png'"
						:size="52"></u-icon>
					<text class="grid-text">{{listItem.title}}</text>
				</u-grid-item>
			</u-grid>

			<z-tabs active-color='#f53f3f' :bar-style="{'border-radius': '1px',
					'background': 'linear-gradient(270deg, #F53F3F 20%, rgba(245, 63, 63, 0.00) 100%)'}" inactive-color='#333'
				ref="tabs" bg-color='rgba(0,0,0,0)' :list="classNavList" :current="current" @change="tabsChange">
				<view slot="right" style="padding-left: 4px;" @tap="$u.toast('插槽被点击')">
					<u-icon name="list" size="21" bold></u-icon>
				</view>
			</z-tabs>
		</template>

		<swiper class="swiper" :current="current" @transition="swiperTransition"
			@animationfinish="swiperAnimationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in classNavList" :key="index">

				<!-- 首页 -->
				<goods :tabIndex="index" :currentIndex="current" :classNavList="classNavList"></goods>
			</swiper-item>
		</swiper>
	</z-paging-swiper>
</template>

<script>
	import {
		getMenu,
		getTaobaoHomePage,
		getTaobaoHomePageGoodsList
	} from '../../config/api.js'
	import goods from './components/goods.vue'

	export default {
		components: {
			goods
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
				classNavList: [],
				bannerList: [],
				navIconList: [{
						title: '天猫超市',
						icon_url: 'xxxx',
					},
					{
						title: '天猫国际'
					},
					{
						title: '百亿补贴'
					},
					{
						title: '我要爆料'
					},
					{
						title: '颜研社'
					},
					{
						title: '淘宝',
						url: '/pages/taoBao/taoBao'
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
			};
		},
		mounted() {
			getTaobaoHomePage().then(res => {
				console.log(res, 'res----')
				this.bannerList = res.bannerList.map(i => {
					i.image = i.icon_url
					return i
				})
				this.navIconList = res.navIconList
				this.classNavList = res.classNavList

			})
		},
		methods: {
			goBack() {
				uni.navigateBack()
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