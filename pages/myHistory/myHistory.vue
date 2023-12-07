<template>
	<view class='page-padding'>
		<view v-for="item in historyList" :key="item.time">
			<view class='font-main-black-18 u-m-b-20'>{{item.time}}</view>
			<view v-for='(citem,index) in item.list' :key="index">
				<view class='u-m-b-20'>
					<goods-list-row-item></goods-list-row-item>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				historyList: [{
					time: '今天',
					list: [
						1, 2, 3, 4
					]
				}, {
					time: '5月12',
					list: [
						1, 2, 3, 4
					]
				}]
			}
		}
	};
</script>
<style>

</style>