<template>
	<view class="u-p-24">
		<view class='cell-container'>
			<view class="u-flex u-row-between ">
				<view class='u-flex'>

					<view class='u-rela'>
						<u-icon name="photo" color="#2979ff" size="28">
						</u-icon>
						<u-badge absolute type="error" max="99" :value="12" :offset='[-3,-3]'></u-badge>
					</view>

					<view class="u-flex u-flex-column u-col-top u-m-l-24">
						<view> 消息标题</view>
						<view class='font-main-grey-14'> 消息副标题</view>
					</view>
				</view>
				<view>
					<u-icon name='arrow-right'></u-icon>
				</view>
			</view>
			<view class="cell-list">
				<view class='cell-item'>
					<view> 消息标题</view>
					<view class='font-main-grey-14'> 消息副标题</view>
				</view>
				<view class='cell-item'>
					<view> 消息标题</view>
					<view class='font-main-grey-14'> 消息副标题</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang='less'>
	.cell-container {
		background-color: #fff;
		border-radius: 12px;
		padding: 16px;
		margin-bottom: 12px;
	}

	.cell-list {
		.cell-item {
			background-color: var(--main-bg);
			border-radius: 6px;
			padding: 12px 15px;
			margin-top: 8px;
		}
	}
</style>