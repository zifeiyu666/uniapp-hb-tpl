<template>
	<u-row gutter="11">
		<u-col :span="6">
			<view class="left">
				<view class="tab u-flex">
					<view class='tab-item' @click='() => handleClassifyClick(item)' v-for='item in classifyList'
						:key='item.title' :class='{active: item.title === currentTab}'>
						{{item.title}}
					</view>
				</view>
				<view>
					<view class='list-item u-m-t-20' v-for=' (item,index) in list' :key='index'>
						<text class='xuhao'>{{index + 1}}.</text>
						{{item.title}}
					</view>
				</view>
				<view class='u-flex font-main-red-12 u-row-center u-m-t-20'>
					更多分类 <u-icon name='arrow-right' size="12" color='var(--main-red)'></u-icon>
				</view>
			</view>
		</u-col>
		<u-col :span="6">
			<view class="right">
				<view class="title u-m-b-30">
					品牌主题馆
				</view>
				<u-swiper height='108' imgMode="aspectFill" bgColor='rgba(0,0,0,0)' :indicator='true'
					indicatorActiveColor='var(--main-red)' in indicatorInactiveColor="#F0F0F0" showTitle
					:titleStyle='titleStyle' :imageStyle="imageStyle" :indicatorStyle="{bottom: '-15px'}" :list="list2"
					keyName="image" :autoplay="false" circular></u-swiper>
			</view>
		</u-col>
	</u-row>
</template>

<script>
	export default {
		data() {
			return {
				titleStyle: {
					borderRadius: "12px",
					background: "#F5F1EB",
					height: "23px",
					lineHeight: "23px",
					color: "#BD6D3F",
					fontSize: "12px",
					padding: "0 12px",
					textAlign: "center"
				},
				imageStyle: {
					height: '85px',
					padding: '0 10px'
				},
				currentTab: '热点分类',
				classifyList: [{
						title: '热点分类',

					},
					{
						title: '医美定制',
					}
				],
				list: [{
						title: '爽肤水'
					},
					{
						title: '卸妆'
					},
					{
						title: '卸妆'
					},
				],
				list2: [{
					image: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					title: '昨夜星辰昨夜风，画楼西畔桂堂东',
				}, {
					image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					title: '身无彩凤双飞翼，心有灵犀一点通'
				}, {
					image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
				}],
			}
		},
		methods: {
			handleClassifyClick(item) {
				this.currentTab = item.title
			}
		}
	}
</script>

<style lang='scss' scoped>
	.left {
		border-radius: 12px;
		background: linear-gradient(180deg, #FFECE8 0%, #FFF 52.08%);
		padding: 16rpx;
		height: 176px;

		.tab,
		.tab-item {
			border-radius: 12px 0px;
			background: #FFF;
			line-height: 25px;
		}

		.tab-item {
			padding: 0 14px;
			white-space: nowrap;
			color: var(--main-red);
			font-size: 12px;
		}

		.tab-item.active {
			background: linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%);
			color: #fff;
		}

		.list-item {
			font-size: 12px;
			line-height: 25px;

			.xuhao {
				padding-right: 8rpx;
			}

			&:nth-child(1) .xuhao {
				color: var(--main-red)
			}

			&:nth-child(2) .xuhao {
				color: var(--tips-brown);
			}

			&:nth-child(3) .xuhao {
				color: var(--tips-orange)
			}
		}
	}

	.right {
		border-radius: 12px;
		background: linear-gradient(180deg, #FEF9EB 0%, #FFF 75%);
		padding: 16rpx;
		height: 176px;

		.title {
			color: var(--tips-brown, #BD6D3F);
			font-size: 14px;
			font-weight: 500;
		}
	}
</style>