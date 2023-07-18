<template>
	<view class="container u-flex">
		<view class='left' :style='{"min-width": persentage}'>
			<span class='u-line-1'>已购{{leftnums}}件</span>
		</view>
		<view class='u-text-center u-flex-1 u-line-1'>剩余{{rightnums}}件</view>
	</view>
</template>

<script>
	export default {
		props: {
			leftnums: Number,
			rightnums: Number
		},
		computed: {
			persentage() {
				return this.leftnums * 100 / (this.leftnums + this.rightnums) + '%'
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		border-radius: 6px;
		background: var(--unnamed, #F5F6F8);
		height: 12px;
		line-height: 12px;
		position: relative;


		.left {
			border-radius: 6px;
			height: 12px;
			line-height: 12px;
			background: linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%);
			// position: absolute;
			left: 0;
			color: #fff;
			text-align: center;
		}
	}
</style>