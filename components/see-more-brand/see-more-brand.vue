<template>
	<view :class="type" class='container u-flex u-row-between'>
		<view class="left">
			{{title}}
		</view>
		<view class="right u-flex">
			查看更多
			<u-icon name='arrow-right' :color="color"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			type: {
				default: 'golden'
			},
			color: {
				default: 'var(--tips-brown)'
			},
			title: {
				default: '每日优选'
			}
		}
	}
</script>

<style lang='scss'>
	.container {
		border-radius: 8px;

		padding: 24rpx;

		.left {
			line-height: 24px;
			padding: 0 8rpx;
			color: #fff
		}
	}

	.golden {
		background: #FDF6E9;

		.left {
			border-radius: 8px 0px;
			background: linear-gradient(90deg, #AE8A65 0%, #D3B696 100%);
		}

		.right,
		.right-icon span {
			color: var(--tips-brown, #BD6D3F);
		}
	}

	.red {
		background: var(--tips-red, #FFECE8);

		.left {
			border-radius: 8px 0px;
			background: linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%);
		}

		.right,
		.right-icon span {
			color: var(--main-red, #F53F3F);
		}
	}

	.blue {
		background: #E6F2FF;

		.left {
			border-radius: 8px 0px;
			background: linear-gradient(90deg, #4B9FFF 0%, #0178FF 100%);
		}

		.right,
		.right-icon span {
			color: var(--main-blue);
		}
	}

	.green {
		background: #E8FFEA;

		.left {
			border-radius: 8px 0px;
			background: linear-gradient(265deg, #00C121 0%, #50D266 100%);
		}

		.right,
		.right-icon span {
			color: var(--main-green);
		}
	}
</style>