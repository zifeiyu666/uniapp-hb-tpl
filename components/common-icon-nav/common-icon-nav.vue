<template>
	<view class='u-flex u-row-between'>
		<view @click='() => $emit("onchange", item)' v-for='item in navList' :key='item.title'
			class='u-flex u-flex-column u-row-center u-col-center '>
			<u-image :src='item.icon' width='52' height="52"></u-image>
			<view class='font-main-black-12'>
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			navList: Array
		}
	}
</script>

<style>
</style>