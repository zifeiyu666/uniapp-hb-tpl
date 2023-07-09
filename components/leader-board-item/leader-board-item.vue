<template>
	<view class='board-wrapper'>
		<view class='u-flex u-row-between'>
			<view class="font-main-black-16 title">
				婴儿尿裤热销榜
			</view>
			<view class='icon-right u-flex'>
				查看更多 <u-icon name='arrow-right' size="10" color='var(--tips-brown)'></u-icon>
			</view>
		</view>
		<u-row gutter="20" class='u-m-t-34'>
			<u-col :span='4' v-for='item in [1,2,3]' :key='item'>
				<view class='u-flex u-flex-column' style='align-items: flex-start'>
					<view style='width: 100%'>
						<u-image width="100%" height="93px" mode="aspectFit"></u-image>
					</view>
					<view class='font-main-black-12 u-line-2 u-m-t-16'>
						Merries 妙而舒纸尿裤
					</view>
					<cn-money class='u-m-t-16' color='#f53f3f' :money="68.45" :size="28"></cn-money>

				</view>
			</u-col>
		</u-row>
	</view>

</template>

<script>
</script>

<style lang='scss' scoped>
	.board-wrapper {
		border-radius: 8px;
		background: linear-gradient(180deg, rgba(255, 247, 232, 0.80) 0%, rgba(255, 255, 255, 0.80) 44.58%);
		backdrop-filter: blur(5px);
		padding: 24rpx;

		.title {
			border-bottom: 8rpx solid;
			border-image: linear-gradient(270deg, #FF9A2E 0%, rgba(255, 154, 46, 0.00) 100%) 1;
		}

		.icon-right {
			color: var(--tips-brown)
		}
	}
</style>