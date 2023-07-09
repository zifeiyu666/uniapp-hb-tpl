<template>
	<view class='u-p-t-20 '>
		<u-row>
			<u-col @click="() => onTabClick(i)" :span='3' v-for='i in tabs' :key='i.title'>
				<view class='u-text-center' :class="{active: i.title === activeTab}">
					{{i.title}}
				</view>
			</u-col>
		</u-row>
		<drop-filter :searchData.sync='searchData' v-model='visible'></drop-filter>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabs: [{
						title: '综合',
					},
					{
						title: '最新',
					},
					{
						title: '最热',
					},
					{
						title: '筛选',
						type: 'filter'
					}
				],
				activeTab: '综合',
				visible: false,
				searchData: {
					min_price: '',
					max_price: '',
					cos_ratio: '',
					cos_fee: '',
					comment_score: '',
					sort_field: '',
					sort_order: '',
					origin: ''
				},
			}
		},
		methods: {
			onTabClick(i) {
				console.log('---------', i);
				if (i.title === '筛选') {
					this.openVisible()
				} else {
					this.activeTab = i.title
				}
			},
			openVisible() {
				this.visible = true
			},
		},
		watch: {
			searchData(news) {
				console.log(news, '监听最新的值')
			}
		},
	}
</script>

<style lang="scss" scoped>
	.active {
		color: var(--main-red)
	}
</style>