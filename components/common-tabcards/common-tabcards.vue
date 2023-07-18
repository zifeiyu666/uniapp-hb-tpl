<template>
	<view class='container'>
		<view class='u-flex u-row-between'>
			<view class='u-flex u-row-start'>
				<view v-for='item in tabList' :key='item.dataIndex' class='u-relative'>
					<view @click="() => handleClick(item)" class='item' :style="{
						color: item.dataIndex === current ? activeColor : '#444',
						background: item.dataIndex === current ? activeBgColor : '#fff'
					}">
						{{item.title}}
					</view>
				</view>
			</view>
			<view class="font-main-red-14" :style="{color: activeColor}">
				查看更多
			</view>
		</view>

		<view class='content' :style="{
			background: 'linear-gradient(180deg,' + activeBgColor +  '80.73%, #FFF 98.57%)'
		}">
			<slot></slot>
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
			tabList: Array,
			current: String,
			activeBgColor: String, // 背景渐变色的起点，是一个纯色
			activeColor: String, //   active文字颜色
		},
		methods: {
			handleClick(item) {
				this.$emit('onchange', item)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		border-radius: 8px;

		.item {
			border-radius: 8px 8px 0 0;
			background: var(--unnamed, #FFF);
			padding: 0 19px;
			line-height: 36px;
		}

		.active {
			background: #FFECE8;
			color: var(--unnamed, #BD6D3F);
		}

		.content {
			border-radius: 0px 12px 12px 12px;
			background: linear-gradient(180deg, #FFECE8 80.73%, #FFF 98.57%);
			;
		}

	}
</style>