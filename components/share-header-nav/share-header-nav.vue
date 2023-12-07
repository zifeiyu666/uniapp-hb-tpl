<template>

	<view style='margin-left: -20px'>
		<u-scroll-list :indicator='true' indicatorActiveColor='var(--main-red)'>
			<view v-for="(listItem,listIndex) in list" :key="listIndex" @click='handleNav(listItem.path)'>
				<view style='width: 100rpx' class='u-flex u-flex-column u-flex-center u-m-l-46'>
					<u-image width="28" :customStyle="{paddingTop:20+'rpx'}" :src="listItem.icon" :height="42"
						mode="aspectFit"></u-image>
					<text class="font-main-black-12 u-m-t-16">{{listItem.title}}</text>
				</view>

			</view>
		</u-scroll-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			handleNav(path) {
				console.log(path, '------');
				uni.navigateTo({
					url: path
				})
			}
		},
		props: {
			list: Array
		}
	}
</script>

<style scoped>
	.header-nav {
		background-color: #fff;
		border-radius: 12px;
		padding-bottom: 15px;
	}
</style>