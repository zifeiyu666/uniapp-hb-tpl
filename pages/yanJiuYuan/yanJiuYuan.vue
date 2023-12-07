<template>
	<view class='container'>
		<refresh-navbar placeholder iconColor='#444' title='颜究院' rightIcon="/static/common/share.png"></refresh-navbar>
		<view class='u-m-t-80 page-padding'>
			<view class="u-flex u-row-between u-m-b-40">
				<view class="title">
					肤质档案
				</view>
				<view>
					<xuan-switch :switchList="['男','女']" bj_color='#fff'
						checked_bj_color='linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%)'></xuan-switch>
				</view>
			</view>

			<view class="card-wrapper">
				<view class='u-flex u-row-between blue-wrapper'>
					<view class='u-flex u-flex-column u-row-center u-col-center '>
						<view class='blue-title'>
							色素<u-icon @click='openModel' name="reload" color="#2979ff" size="18"></u-icon>
						</view>
						<view class='tips'>
							色素/非色素
						</view>
					</view>
					<view class='u-flex u-flex-column u-row-center u-col-center '>
						<view class='blue-title'>
							色素<u-icon name="reload" color="#2979ff" size="18"></u-icon>
						</view>
						<view class='tips'>
							色素/非色素
						</view>
					</view>
					<view class='u-flex u-flex-column u-row-center u-col-center '>
						<view class='blue-title'>
							色素<u-icon name="reload" color="#2979ff" size="18"></u-icon>
						</view>
						<view class='tips'>
							色素/非色素
						</view>
					</view>
					<view class='u-flex u-flex-column u-row-center u-col-center '>
						<view class='blue-title'>
							色素<u-icon name="reload" color="#2979ff" size="18"></u-icon>
						</view>
						<view class='tips'>
							色素/非色素
						</view>
					</view>
				</view>
				<u-collapse :border='false' @change="change" @close="close" @open="open">
					<u-collapse-item :clickable='false' title="DSPW型皮屑" :titleStyle="{
						color: 'var(--main-red)',
						fontSize: '16px'
					}" name="Docs guide">
						<view class='content-container'>
							<view>
								<text style="color: 'var(--tips-grey)'">表现症状：</text>
								<text style="color: '#333'">干燥脱皮/敏感红血绦/色素沉着/皴纹松弛</text>
							</view>
							<view class='u-m-t-20'>
								<text style="color: 'var(--tips-grey)'">表现症状：</text>
								<text style="color: '#333'">干燥脱皮/敏感红血绦/色素沉着/皴纹松弛</text>
							</view>
						</view>



					</u-collapse-item>
				</u-collapse>
			</view>

		</view>

		<!--  底部选择弹窗 -->
		<u-popup :round="10" :show="show" mode="bottom" @close="closeModel">
			<view class="model-container">
				<view class='u-flex u-m-b-40 u-row-center u-flex-column u-col-center model-tips'>
					<view>
						如果您非常确认自己的肤质类型
					</view>
					<view>
						可以跳过测试，直接选择肤质
					</view>
				</view>
				<view class='u-m-b-32 model-item' v-for="item in [1,2,3]" :key='item'>
					<view class='u-m-b-32 u-text-center'>
						重度耐受皮肤
					</view>
					<u-line></u-line>
				</view>
				<view @click='navToTest' class='u-m-b-32 model-item model-btn'>
					<view class='u-m-b-32 u-text-center'>
						重新测试
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 'girl',
				activeValue: 'gril',
				inactiveValue: 'boy',
				show: false
			}
		},
		computed: {

		},
		methods: {
			navToTest() {
				this.closeModel()
				uni.navigateTo({
					url: '/pages/makeups/makeups'
				})
			},

			openModel() {
				this.show = true
			},
			closeModel() {
				this.show = false
				// console.log('close');
			},
			open(e) {
				// console.log('open', e)
			},
			close(e) {
				// console.log('close', e)
			},
			change(e) {
				// console.log('change', e)
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

		.title {
			font-size: 28px;
		}

		.blue-wrapper {
			border-radius: 4px;
			background: var(--unnamed, #EFF6FE);
			padding: 16px;
		}

		.blue-title {
			color: var(--main-blue, #4B9FFF);
			display: flex;
		}

		.tips {
			font-size: 10px;
			color: var(--tips-grey, #6F7379);
			margin-top: 2px;
		}

		.content-container {
			border-radius: 4px;
			background: var(--main-bg, #F5F6F8);
			padding: 12px;
		}

		.model-container {
			padding: 21px;

			.model-tips {
				color: var(--tips-grey)
			}

			.model-item {
				font-size: 16px;
			}

			.model-btn {
				color: var(--main-blue, #4B9FFF);

			}
		}
	}
</style>