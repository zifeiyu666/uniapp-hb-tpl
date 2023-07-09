<template>
	<view>
		<z-paging ref="paging" v-model="dataList" use-page-scroll @query="queryList" :fixed="false">
			<!-- 			<template #top>
				
			</template> -->
			<view class="header">
				<view>
					<u-navbar title="" bgColor="rgba(0,0,0,0)" leftIconColor='#fff' placeholder :autoBack="true">
					</u-navbar>
					<view class='title'>
						热销榜单
					</view>
				</view>
			</view>
			<!-- 如果希望其他view跟着页面滚动，可以放在z-paging标签内 -->
			<view class="content">
				<z-tabs inactiveColor="#6F7379" :activeStyle="{'font-size': '16px'}" bar-animate-mode='worm'
					:bar-width='+(tabList[current].name.length * 18)' :bar-style="{'border-radius': '1px',
				'background': 'linear-gradient(270deg, #F53F3F 0%, rgba(245, 63, 63, 0.00) 100%)'}" active-color='#f53f3f'
					ref="tabs" bg-color='rgba(0,0,0,0)' :list="tabList" :current="current" @change="tabsChange">
					<view slot="right" style="padding-left: 4px;" @tap="navToCategoryPage">
						<u-icon name="list" size="21" bold></u-icon>
					</view>
				</z-tabs>
				<u-grid :border="false" col="2" class='goods-container'>
					<u-grid-item class='goods-item' v-for="(item,index) in dataList" :key="index"
						@click="itemClick(item)">
						<!-- <view class="goods-box">
							<u-image width="100%" height="80"
								src='https://cdn.uviewui.com/uview/swiper/swiper1.png'></u-image>
							<view>
								<u-icon size="32" name="/static/icons/jd.png" label='弗利萨家' label-size="14"></u-icon>
			
							</view>
						</view> -->
						<goods-list-item></goods-list-item>
					</u-grid-item>
				</u-grid>
			</view>


		</z-paging>
	</view>

</template>

<script>
	import ZPMixin from '@/uni_modules/z-paging/components/z-paging/js/z-paging-mixin'
	import {
		getMenu
	} from '@/config/api.js';

	export default {
		mixins: [ZPMixin],
		data() {
			return {
				dataList: [1, 2, 3, 4]
			}
		},
		methods: {
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
	.header {
		background-image: url('/static/hotSellingList/banner.png');
		background-size: 100%;
		background-repeat: no-repeat;
		background-position: center;
		height: 396rpx;
		z-index: 0;

		.title {
			color: #fff;
			margin-top: env(safe-area-inset-top);
			padding-top: 10px;
			text-align: center;
			text-shadow: 0px 4px 4px 0px #FF7243;
			font-size: 40px;
		}
	}

	.content {
		border-radius: 20px 20px 0px 0px;
		background: #FFF;
		margin-top: -60px;
		z-index: 10;

	}
</style>