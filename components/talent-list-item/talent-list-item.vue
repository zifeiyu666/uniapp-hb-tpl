<template>
	<view class='wrapper'>
		<view class='u-flex u-row-between' :class='{"u-p-24": index > 3}'>
			<view class='u-flex'>
				<view v-if='index <= 3' class='brand'
					:style='{backgroundImage: `url(/static/talentList/top` + index + `.png)`}'></view>
				<view v-else class='brand-simple'>
					{{index}}
				</view>
				<u-avatar size='40' class="u-m-l-16"></u-avatar>
				<view class="u-flex u-flex-column u-col-top u-m-l-16">
					<view class='u-flex'>
						<view class="font-main-black-14">
							朱玲玲
						</view>
						<u-icon name='/static/talentList/hg.png' size='13'></u-icon>
						<view class='font-main-black-12'>
							普通生活家
						</view>
					</view>
					<view>
						<view class='font-tips-grey-12'>
							原创分：16515
						</view>
					</view>
				</view>
			</view>
			<view>
				<u-tag text=" 关注" icon='plus' :customizeIconSize='12' shape="circle" borderColor="#FFECE8"
					bgColor="linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%)" color="#fff">
				</u-tag>
			</view>
		</view>
		<view class='content u-m-t-16' v-if='index <= 3'>
			<view class="item u-line-2">
				<view class="circle"></view>
				低至2.6折！优衣库男士裤装最新好价，早春裤装合集，好价快冲
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
		props: {
			index: {
				type: Number,
				default: 1
			}
		}
	}
</script>

<style lang='scss' scoped>
	.brand {
		/* background-image: url('/static/talentList/top1.png'); */
		background-position: center;
		background-repeat: no-repeat;
		background-size: 100%;
		width: 58rpx;
		height: 78rpx;
	}

	.brand-simple {
		border-radius: 4px 0px;
		background: var(--main-bg, #F5F6F8);
		color: var(--tips-grey, #6F7379);
		text-align: center;
		font-size: 12px;
		line-height: 21px;
		width: 21px;
	}

	.wrapper {
		background-color: #fff;

		.content {
			border-radius: 4px;
			background: var(--main-bg, #F5F6F8);
			padding: 16rpx;

			.item {
				color: #6F7379;
				font-size: 12px;
				padding-left: 12px;
				position: relative;
			}

			.circle {
				display: block;
				position: absolute;
				border-radius: 6px;
				background: var(--main-red, #F53F3F);
				width: 6px;
				height: 6px;
				left: 0px;
				top: 6px;
			}
		}
	}
</style>