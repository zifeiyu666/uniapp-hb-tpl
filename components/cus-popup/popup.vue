<template>
	<view class="popup-common" v-show="flag" :style="{top:headerIsCustom ? menuHeight + menuTop : 0,zIndex:zIndex}">
		<view class="mask" @click="markClose" :catchtouchmove="true" data-value="mask"></view>
		<view :class="['popup-wrap','popup-wrap-custom','popup-wrap-'+position]" :animation="animationData">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		externalClasses: ['popup-wrap-custom'],
		options: {
			multipleSlots: true // 复数插槽: 是
		},
		props: {
			value: {
				type: Boolean,
				default: false
			},
			position: {
				type: String,
				default: 'center'
			},
			duration: {
				type: Number,
				default: 100
			},
			headerIsCustom: {
				type: Boolean,
				default: false
			},
			allowMarkClose: { // 是否允许点击mark区域关闭
				type: Boolean,
				default: true
			},
			zIndex: {
				type: Number,
				default: 10000
			}
		},
		data() {
			return {
				flag: false,
				animationData: {},
				menuTop: getApp().globalData.menuTop,
				menuHeight: getApp().globalData.menuHeight,
				options: {
					top: {
						transName: 'translateY',
						from: 0,
						to: '-100%'
					},
					bottom: {
						transName: 'translateY',
						from: 0,
						to: '100%'
					},
					center: {
						transName: 'opacity',
						from: 1,
						to: 0
					},
					left: {
						transName: 'translateX',
						from: 0,
						to: '-100%'
					},
					right: {
						transName: 'translateX',
						from: 0,
						to: '100%'
					}
				},
			}
		},
		watch: {
			'value': {
				immediate: true,
				deep: true,
				handler(val) {
					console.log(this.isFirst, val, this.flag, 'this.flag---')

					if (this.isFirst && val === this.flag) {
						return
					}
					if (val) {
						this.showModal(val)
					} else {
						this.hideModal(val)
					}
				}
			}
		},
		methods: {
			showModal() {
				this.createAnimationFun()
				this.isFirst = true
				this.$emit('input', true)
				this.flag = true
				setTimeout(() => {
					this.fadeIn()
				}, 20)
			},
			// 隐藏遮罩层
			hideModal(e) {
				this.createAnimationFun()
				this.isFirst = true

				this.fadeDown()
				setTimeout(() => {
					this.setDataflag = false
					this.$emit('input', false)
					this.flag = false

				}, this.duration - 20)

			},
			fadeIn() {
				const obj = this.options[this.position]
				if (!obj) {
					throw Error('position值不对')
				}
				this.animation[obj.transName](obj.from).step()
				this.animationData = this.animation.export()
			},
			fadeDown: function() {
				const obj = this.options[this.position]
				if (!obj) {
					throw Error('position值不对')
				}
				this.animation[obj.transName](obj.to).step()
				this.animationData = this.animation.export()
			},
			createAnimationFun() {
				if (!this.animation) {
					console.log(this.duration, 'duration----')
					const animation = uni.createAnimation({
						duration: this.duration,
						timingFunction: 'ease',
					})
					this.animation = animation
				}
			},
			markClose(e) {
				this.allowMarkClose && this.hideModal(e)
			}
		},
	}
</script>

<style>
	.popup-common {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 100;
		overflow: hidden;
	}

	.popup-common .mask {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(40, 42, 49, 0.9);
		overflow: hidden;
	}

	.popup-wrap {
		position: absolute;
		z-index: 2;
		width: 100%;
		box-sizing: border-box;
	}

	.popup-wrap-center {
		top: 50%;
		left: 50%;
		width: 592rpx;
		transform: translate(-50%, -50%);
		display: flex;
		align-items: center;
		background-color: #fff;
		border-radius: 24rpx;
		padding: 60rpx 40rpx 40rpx;
		box-sizing: border-box;
	}

	.popup-wrap-left {
		top: 30%;
		left: 0;
		width: 100%;
		display: flex;
		align-items: center;
		background-color: #fff;
		border-radius: 0;
		padding: 60rpx 40rpx 40rpx;
		box-sizing: border-box;
	}

	.popup-wrap-right {
		top: 30%;
		right: 0;
		width: 100%;
		display: flex;
		align-items: center;
		background-color: #fff;
		border-radius: 0;
		padding: 60rpx 40rpx 40rpx;
		box-sizing: border-box;
	}

	.popup-wrap-bottom {
		bottom: 0;
		background-color: #fff;
		border-radius: 30rpx 30rpx 0px 0px;
		padding: 24rpx 30rpx 80rpx 30rpx;
		box-sizing: border-box;
	}

	.no-padding {
		padding: 0 !important;
	}

	.popup-wrap-top {
		top: 0;
		background-color: #fff;
		border-radius: 0 0 20rpx 20rpx;
		/* padding: 60rpx 40rpx 40rpx; */
	}
</style>