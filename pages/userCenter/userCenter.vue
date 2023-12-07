<template>
	<view>
		<view class="card-wrapper ">
			<view class='u-p-20'>
				<view class="u-flex u-row-between">
					<view class='u-flex u-col-center'>
						<view class=' u-m-r-24'>
							<u-avatar></u-avatar>
						</view>
						<view class='u-flex u-flex-column u-col-top '>
							<view class='font-main-black-18'>afafasdfasdfasdfs</view>
							<view class='font-main-grey-14 u-flex u-row-left'>
								<u-icon name=' level' color="var(--tips-orange)"></u-icon>
								<u--text text="5" class="u-m-r-10" color='var(--tips-orange)'></u--text>
								好价专家
							</view>
						</view>
					</view>
					<view class='u-flex u-col-center'>
						<!-- <u-icon name='setting' class='u-m-r-10'></u-icon> -->
						<u-tag text=" 编辑资料" shape="circle" borderColor="#FFECE8"
							bgColor="linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%)" color="#fff">
						</u-tag>
					</view>
				</view>
				<view class='u-m-t-20'>
					<view class='font-main-grey-14 u-line-2'>理工背景，技术出身，喜欢钻研汽车、电器、家具等各类产品，分享一些自己用过的好物。</view>
				</view>


			</view>

			<view>
				<u-grid :border="false">
					<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex">
						<u-icon color="#F53F3F" :customStyle="{paddingTop:20+'rpx'}" :name="baseListItem.name"
							:size="18"></u-icon>
						<text class="grid-text">{{baseListItem.title}}</text>
					</u-grid-item>
				</u-grid>
			</view>
		</view>

		<view class="card-wrapper u-m-t-20">
			<u-tabs lineColor='#F53F3F' :scrollable='true' :list="list2"></u-tabs>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseList: [{
						name: '100',
						title: '关注'
					},
					{
						name: '300',
						title: '粉丝'
					},
					{
						name: '123',
						title: '点赞与收藏'
					},
				],
				list2: [{
						name: '好价',
						badge: {
							value: 5,
						}
					},
					{
						name: '笔记',
						badge: {
							value: 5,
						}
					},
					{
						name: '评论',
						badge: {
							value: 5,
						}
					},
					{
						name: '收藏',
						badge: {
							value: 5,
						}
					}, {
						name: '点赞',
						badge: {
							value: 1,
						}
					},
				]

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>