<template>
	<view class='container'>
		<view class='u-flex u-row-center'>
			<view v-for='item in tabList' :key='item.dataIndex' class='u-relative'>
				<view @click="() => handleClick(item)" class='item u-m-r-16'
					:class='{active:item.dataIndex === current}'>
					{{item.title}}
				</view>
				<view class="triangle" v-if='item.dataIndex === current'></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: this.defaultCurrent
			}
		},
		props: {
			tabList: Array,
			defaultCurrent: String
		},
		methods: {
			handleClick(item) {
				console.log(item, '00000');
				this.current = item.dataIndex
				this.$emit('onchange', item)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		border-radius: 8px;
		background: var(--unnamed, #FFECE8);

		padding: 4px 6px;

		.item {
			border-radius: 8px;
			background: var(--unnamed, #FFF);
			padding: 0 16rpx;
			line-height: 28px;
		}

		.active {
			color: #fff;
			background: linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%);
		}

		.triangle {
			width: 0;
			height: 0;
			border-bottom: 10px solid #fff;
			border-right: 10px solid transparent;
			border-left: 10px solid transparent;
			position: absolute;
			left: 50%;
			margin-left: -15px;
			bottom: -15px;
		}
	}
</style>