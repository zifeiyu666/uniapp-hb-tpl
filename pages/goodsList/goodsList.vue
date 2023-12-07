<template>
	<view class='container'>
		<view>
			<view :class="{active: selected.indexOf(index) != -1}" class="goods-item" @click="handleSelect(index)"
				v-for='(item,index) in goodsList' :key='index'>
				<goods-list-row-item></goods-list-row-item>
			</view>
		</view>


		<view class="confirm">
			<u-button text="确定" @click="handleConfirm" shape='circle' type='primary'
				color='linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%)'></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsList: [],
				selected: []
			}
		},
		mounted() {
			this.getList()
		},
		methods: {
			getList() {
				this.goodsList = [1, 2, 3, 4]
			},
			handleSelect(index) {
				console.log(index);
				console.log(this.selected);
				// debugger
				if (this.selected.indexOf(index) == -1) {
					this.selected.push(index)
				} else {
					this.selected = this.selected.filter((i) => i != index)
				}

			},
			handleConfirm() {
				uni.navigateBack()
				uni.$emit('add-goods-confirm', {
					selected: this.selected
				})
			}
		}
	}
</script>

<style scoped lang='less'>
	.container {
		position: relative;
	}

	.confirm {
		position: fixed;
		width: calc(100% - 64rpx);
		bottom: env(safe-area-inset-bottom);
		left: 32rpx;
	}

	.goods-item {
		margin: 10px;
	}

	.active {
		outline: 1px solid #F53F3F;
	}
</style>