<template>
	<view class="container">
		<view class="header u-flex u-row-between">
			<view class="left u-flex">
				<cn-money color='#fff' :showZeroDecimal='false' :money="0" :size="50"></cn-money>
				<view class="tag u-m-l-8">
					到手价
				</view>
				<view class='origin u-m-l-8'>
					淘宝价 <cn-money original color='rgba(255,255,255,0.6)' :showZeroDecimal='false' :money="4.9"
						:size="24"></cn-money>
				</view>
			</view>
			<view class="right u-flex u-flex-column u-row-center u-col-center">
				<view style="color: #fff" class='u-m-b-6'>
					限时福利
				</view>
				<u-tag text="新人0元购" shape="circle" borderColor="rgba(0,0,0,0)"
					bgColor="linear-gradient(180deg, #FFE4B5 0%, #FFD080 100%)" color="#BD6D3F"> </u-tag>
			</view>
		</view>
		<view class="content">
			<view class="title u-line-2 u-m-b-32">
				百亿补贴：Hasee神舟 战神8D6 15.6英寸游戏本：寸游戏本Has寸游戏游戏
			</view>
			<view class="u-flex">
				<view class='left'>
					0元购
				</view>
				<view class='right u-flex-1 u-flex u-flex-column u-row-center u-col-top'>
					<view class='u-m-b-10'>
						<ticket bgColor='#fff'></ticket>
					</view>
					<view class='tips u-flex'>
						<view class='u-flex'>
							领券支付 <cn-money color='var(--main-red)' :money="4.9" :size="24"></cn-money>
						</view>
						<view class="horizen-line"></view>
						<view class='u-flex'>
							优兔购 <text style='color: var(--main-red)'>全额返 </text>
							<cn-money color='var(--main-red)' :money="4.9" :size="24"></cn-money>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang='scss' scope>
	.container {
		border-radius: 8px;
		background: #FFF;

		.header {
			border-radius: 8px 8px 0px 0px;
			background: linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%);
			padding: 10rpx 24rpx;

			.tag {
				border-radius: 2px;
				background: var(--unnamed, #FFECE8);
				color: var(--unnamed, #F53F3F);
				font-size: 10px;
				padding: 0 8rpx;

			}

			.origin {
				color: rgba(255, 255, 255, 0.6);
				font-size: 12px;
			}
		}

		.content {
			padding: 24rpx;

			.title {
				font-size: 18px;
			}

			.left,
			.right {
				background-color: $ytg-fuzhu-red;
				border-radius: 12px;
				height: 56px;
				line-height: 56px;
				padding: 0 17px;

				color: var(--main-red);

				.tips {
					border-radius: 2px;
					border: 0.5px solid var(--main-red, #F53F3F);
					background: var(--main-white, #FFF);
					color: var(--main-black);
					height: 18px;
					line-height: 18px;
					padding: 0 16rpx;
					font-size: 10px;

					.horizen-line {
						height: 60%;
						width: 1px;
						background-color: var(--main-red);
						margin: 0 10rpx;
					}
				}
			}

			.left {
				border-right: 1px dashed #fff;
			}
		}
	}
</style>