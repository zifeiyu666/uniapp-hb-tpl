<!-- 在这个文件对每个tab对应的列表进行渲染 -->
<template>
	<view class="content page-padding">

		<z-paging ref="paging" v-model="dataList" @query="queryList" :fixed="false">
			<view class='u-flex u-m-t-24'>
				<circle-tabs :tabList="classifyList" defaultCurrent="all"></circle-tabs>
			</view>
			<u-grid :border="false" col="1" class='goods-container'>
				<u-grid-item class='goods-item' v-for="(item,index) in dataList" :key="index" @click="itemClick(item)">
					<NoteItem :queryList="queryList"></NoteItem>
				</u-grid-item>
			</u-grid>

		</z-paging>
	</view>
</template>

<script>
	import {
		getMenu
	} from '@/config/api.js';

	import NoteItem from './noteItem.vue'

	export default {
		components: {
			NoteItem
		},
		data() {
			return {

				//v-model绑定的这个变量不要在分页请求结束中自己赋值！！！
				dataList: [1, 2, 3, 4],
				firstLoaded: false,
				classifyList: [{
						title: "全部",
						dataIndex: 'all'
					},
					{
						title: "已发布",
						dataIndex: 'yfb'
					},
					{
						title: "审核中",
						dataIndex: 'shz'
					},
					{
						title: "草稿",
						dataIndex: 'cg'
					},
					{
						title: "未通过",
						dataIndex: 'wtg'
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
		methods: {
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
	.grid-text {
		font-size: 14px;
		margin-top: 18rpx;
	}



	/* 注意:父节点需要固定高度，z-paging的height:100%才会生效 */
	.content {
		height: 100%;
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

	/* 	.goods-item:nth-child(odd) {
		padding-right: 12rpx;
	}

	.goods-item:nth-child(even) {
		padding-left: 12rpx;
	} */

	.goods-container {
		/* margin-top: 40rpx; */
		background-color: $ytg-bg;
	}
</style>