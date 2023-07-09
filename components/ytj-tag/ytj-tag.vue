<template>
	<view class='ytj-tg u-flex u-col-center'>
		<view class="ytj-icon">
			优兔价
		</view>
		<cn-money class='u-m-l-10 u-m-t-4' color='#f53f3f' :money="price"></cn-money>
	</view>
</template>

<script>
	export default {
		name: "ytj-tag",
		data() {
			return {

			};
		},
		props: {
			price: {
				default: 123.12
			}
		}
	}
</script>

<style lang='scss' scoped>
	.ytj-tg {
		border-radius: 2px;
		background: #FFECE8;
		color: #F53F3F;
		line-height: 28px;
		padding-right: 4px;

		.ytj-icon {
			padding: 0 4px;
			color: #ffffff !important;
			border-radius: 2px;
			background: linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%) !important;
		}
	}
</style>