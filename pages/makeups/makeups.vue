<template>
	<view class='container'>
		<refresh-navbar placeholder iconColor='#444' rightIcon="/static/common/share.png"></refresh-navbar>
		<view class='u-m-t-80' style='width: 100%;height: 450px;'>

			<z-swiper @slideChange="onChange" ref="zSwiper" v-model="list" :options="options">
				<z-swiper-item :custom-style="slideCustomStyle" v-for="(item,index) in list" :key="index">
					<view class='card-item'>
						<view class="xuhao">
							{{item.index}}/11
						</view>
						<u-line-progress :showText='false' :percentage="30" height="8"
							activeColor='var(--main-red)'></u-line-progress>

						<view class='title'>
							洗完脸后不在脸上涂任何产品，2-3小时后，你的皮肤会?
						</view>
						<view>
							<view @click='() => handleAnsower(i, item)' class='item' v-for='i in item.list' :key='i.key'
								:class='{active: item.selected === i.key}'>
								{{i.key}}
								{{i.content}}
							</view>
						</view>

					</view>

				</z-swiper-item>
			</z-swiper>
			<view class='u-p-32' v-if='isAllFinished'>
				<u-button text="提交" shape='circle' type='primary'
					color='linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%)'></u-button>
			</view>

			<view class="tihao">
				<view class="item" @click="slideTo(index)" v-for='(item,index) in list'
					:class='{finished:item.selected,current:currentQuestionIndex==index}' :key='item'>
					{{index + 1}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentQuestionIndex: 0,
				slideCustomStyle: {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: '36rpx'
				},
				options: {
					// direction: 'vertical',
					effect: 'cards',
					cardsEffect: {
						rotate: false,
						perSlideOffset: 8,
						perSlideRotate: 1
					},
					// loop: true,
					slidesPerView: 'auto',
					loopedSlides: 1,
				},
				list: [{
					index: '01',
					list: [{
							key: 'A',
							content: '非常粗糙、出现皮屑、暗沉'
						},
						{
							key: 'B',
							content: '仍有紧绷感'
						},
						{
							key: 'C',
							content: '不紧绷，没有油光'
						},
						{
							key: 'D',
							content: '能看到明显的油光'
						}
					],
					selected: 'A'
				}, {
					index: '02',
					list: [{
							key: 'A',
							content: '非常粗糙、出现皮屑、暗沉'
						},
						{
							key: 'B',
							content: '仍有紧绷感'
						},
						{
							key: 'C',
							content: '不紧绷，没有油光'
						},
						{
							key: 'D',
							content: '能看到明显的油光'
						}
					],
					selected: ''
				}, {
					index: '03',
					list: [{
							key: 'A',
							content: '非常粗糙、出现皮屑、暗沉'
						},
						{
							key: 'B',
							content: '仍有紧绷感'
						},
						{
							key: 'C',
							content: '不紧绷，没有油光'
						},
						{
							key: 'D',
							content: '能看到明显的油光'
						}
					],
					selected: ''
				}, {
					index: '04',
					list: [{
							key: 'A',
							content: '非常粗糙、出现皮屑、暗沉'
						},
						{
							key: 'B',
							content: '仍有紧绷感'
						},
						{
							key: 'C',
							content: '不紧绷，没有油光'
						},
						{
							key: 'D',
							content: '能看到明显的油光'
						}
					],
					selected: ''
				}, {
					index: '05',
					list: [{
							key: 'A',
							content: '非常粗糙、出现皮屑、暗沉'
						},
						{
							key: 'B',
							content: '仍有紧绷感'
						},
						{
							key: 'C',
							content: '不紧绷，没有油光'
						},
						{
							key: 'D',
							content: '能看到明显的油光'
						}
					],
					selected: ''
				}]
			}
		},
		computed: {
			isAllFinished() {
				return this.list.every(i => {
					return i.selected
				})
			}
		},
		methods: {
			onChange(swiper, index) {
				this.currentQuestionIndex = index
			},
			slideTo(index) {
				this.$refs.zSwiper.swiper.slideTo(index); //切换到第三个slide，速度为1秒
			},
			// 答题
			handleAnsower(i, item) {
				this.list = this.list.map(ele => {
					if (ele.index === item.index) {
						ele.selected = i.key
					}
					return ele
				})
			}
		}
	}
</script>

<style scoped lang='scss'>
	.container {
		width: 100%;
		height: 100vh;
		overflow-x: hidden;
		overflow-y: auto;
		background-image: url("/static/makeups/bg.png");
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;

		.tihao {
			display: flex;
			padding: 32rpx;
			flex-wrap: wrap;

			.item {
				border-radius: 50%;
				width: 36px;
				line-height: 36px;
				height: 36px;
				color: var(--tips-grey);
				background: #fff;
				text-align: center;

				margin-right: 30rpx;

				&.current {
					color: var(--main-red);
					background: var(--tips-red);
				}

				&.finished {
					color: #fff;
					background: linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%);
					;
				}
			}
		}

		.card-item {
			height: 404px;
			border-radius: 12px;
			background: #FFF;
			width: 666rpx;
			padding: 20px 16px;

			.xuhao {
				color: var(--tips-grey);
				margin-bottom: 8px;
			}

			.title {
				color: var(--main-black, #444);
				font-size: 20px;
				margin-top: 32px;
				margin-bottom: 30px;
			}

			.item {
				border-radius: 4px;
				background: var(--main-bg, #F5F6F8);
				padding: 0 10px;
				line-height: 42px;
				margin-top: 12px;
				color: var(--tips-grey, #6F7379);

				&.active {
					color: var(--main-red);
					background: var(--tips-red);
				}
			}
		}
	}

	.image {
		height: 640rpx;
		width: 480rpx;
		border-radius: 24rpx;
	}
</style>

<style>
	.swiper-slide-cards {
		opacity: 0.6;
	}

	.swiper-slide-active {
		opacity: 1 !important;
	}
</style>