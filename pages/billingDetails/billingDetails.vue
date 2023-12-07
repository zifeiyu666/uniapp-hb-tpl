<template>
	<view class='page-padding' style='background-color: #fff;'>
		<u-subsection activeColor='var(--main-red)' :list="list" :current="current"
			@change="sectionChange"></u-subsection>

		<ren-dropdown-filter :filterData='filterData' :defaultIndex='defaultIndex' @ed='ed'
			@dateChange='dateChange'></ren-dropdown-filter>
	</view>
</template>

<script>
	import RenDropdownFilter from '@/components/ren-dropdown-filter/ren-dropdown-filter.vue'
	export default {
		components: {
			RenDropdownFilter
		},
		data() {
			return {
				list: ['分享收益', '创作收益'],
				current: 1,
				filterData: [
					[{
						text: '所有平台',
						value: ''
					}, {
						text: '京东',
						value: 1
					}, {
						text: '淘宝',
						value: 2
					}, {
						text: '状态3',
						value: 3
					}],
					[{
						text: '全部级别',
						value: ''
					}, {
						text: '直属',
						value: 1
					}, {
						text: '下属',
						value: 2
					}, {
						text: '类型3',
						value: 3
					}]
				],
				defaultIndex: [0, 0]
			}
		},
		methods: {
			sectionChange(index) {
				this.current = index;
			},
			ed(res) {
				console.log(res)
			},
			dateChange(d) {
				uni.showToast({
					icon: 'none',
					title: d
				})
			}
		}
	}
</script>

<style>

</style>