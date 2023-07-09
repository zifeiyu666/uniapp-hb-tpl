<template>
	<view class='page-padding'>
		<view>
			<view class='font-main-black-16 bold'>类型</view>
			<view class='u-flex u-m-t-24 u-row-left' style="flex-wrap: wrap; margin-left: -12px; margin-right: -12px">
				<view v-for='i in Array.from(new Array(7).keys())' :key='i'
					style='min-width: 25%; margin-bottom: 24rpx;'>
					<u-button :customStyle='{width:"76px"}' text="全部" shape='circle' size='small' type='primary'
						color='linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%)'></u-button>
				</view>
			</view>
		</view>

		<view>
			<view class='font-main-black-16 bold'>领域热点</view>
			<view class='u-flex u-m-t-24 u-row-left' style="flex-wrap: wrap; margin-left: -12px; margin-right: -12px">
				<view v-for='i in Array.from(new Array(7).keys())' :key='i'
					style='min-width: 25%; margin-bottom: 24rpx;'>
					<u-button :customStyle='{width:"76px"}' text="全部" shape='circle' size='small' type='primary'
						color='linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%)'></u-button>
				</view>
				<view style='min-width: 25%; margin-bottom: 24rpx;'>
					<u-button @click="show = true" :customStyle='{width:"76px"}' icon="plus" shape='circle'
						size='small'></u-button>
				</view>
			</view>
		</view>
		<u-picker :showToolbar='true' title='领域热点' closeOnClickOverlay='true' :show="show"
			:columns="columns"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				columns: [
					['中国', '美国', '日本']
				],
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>