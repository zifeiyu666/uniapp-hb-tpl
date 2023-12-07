<template>
	<view class="u-p-24">
		<view class='cell-container'>
			<view class="u-flex u-row-between ">
				<view class='u-flex'>

					<view class='u-rela'>
						<u-avatar></u-avatar>

					</view>

					<view class="u-flex u-flex-column u-col-top u-m-l-24">
						<view class='u-flex'> 用户昵称 <u-icon name="level" color='#ff9a2e'></u-icon> <u--text text='6'
								color='#ff9a2e'></u--text> </view>
						<view class='font-main-grey-14'> 用户间接简介。。。。。。</view>
					</view>
				</view>
				<view>
					<u-button text="回粉" shape='circle' type='primary' size='small'
						color='linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%)'></u-button>
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

<style lang='less' scoped>
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