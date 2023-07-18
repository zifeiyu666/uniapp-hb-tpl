<template>
	<cus-popup position="top" :zIndex="887" v-model="visible" :allowMarkClose="allowMarkClose"
		popup-wrap-custom="gradeCusom">
		<view class="filter-warp">


			<view class="grade-title">标签</view>
			<view class="grade-ul">
				<view :class="['grade-li',searchObj.comment_score == item.value?  'grade-li-active' : '']"
					v-for="(item,index) in gradeList" :key="item.value" @click="changeGrade(item.value)">{{item.label}}
				</view>


				<!-- <view class="gradeCusom-ratio">
					<view class="gradeCusom-ratio-li">
						<view class="grade-title">佣金比例（%）≧</view>
						<view :class="['gradeCusom-input-wrap',isBlur === 'cos_ratio'? 'custom-input-focus': '']">
							<input class="gradeCusom-ratio-input" :value="searchObj.cos_ratio"
								@input="changeInput($event,'cos_ratio')" @focus="changeFocus('cos_ratio')"
								@blur="changeBlur" type="number" maxlength="2" placeholder="请输入"
								placeholder-style="color: #CCCDD4;font-size: 26rpx;" />
							<image :src="icon" @click="clearFun('cos_ratio')" v-show="searchObj.cos_ratio !== ''">
							</image>
						</view>
					</view>
					<view class="gradeCusom-ratio-li">
						<view class="grade-title">佣金金额（%）≧</view>
						<view :class="['gradeCusom-input-wrap',isBlur === 'cos_fee'? 'custom-input-focus': '']">
							<input class="gradeCusom-ratio-input" :value="searchObj.cos_fee"
								@input="changeInput($event,'cos_fee')" @focus="changeFocus('cos_fee')"
								@blur="changeBlur" type="number" maxlength="2" placeholder="请输入"
								placeholder-style="color: #CCCDD4;font-size: 26rpx;" />
							<image :src="icon" @click="clearFun('cos_fee')" v-show="searchObj.cos_fee !== ''"></image>
						</view>
					</view>
				</view> -->
				<view class="gradeCusom-price">
					<view class="grade-title">价格区间（￥）</view>
					<view class="gradeCusom-price-li">
						<view
							:class="['gradeCusom-input-wrap','gradeCusom-price-input-wrap',isBlur === 'min_price'? 'custom-input-focus': '']">
							<input class="gradeCusom-ratio-input" :value="searchObj.min_price" maxlength="8"
								type="number" @input="changeInput($event,'min_price')" @focus="changeFocus('min_price')"
								@blur="changeBlur" placeholder="最低价"
								placeholder-style="color: #CCCDD4;font-size: 26rpx;" />
							<image :src="icon" data-prop="min_price" @click="clearFun"
								v-show="searchObj.min_price !== ''"></image>
						</view>
						<text>～</text>
						<view
							:class="['gradeCusom-input-wrap','gradeCusom-price-input-wrap',isBlur === 'max_price'? 'custom-input-focus': '']">
							<input class="gradeCusom-ratio-input" maxlength="8" :value="searchObj.max_price"
								type="number" @input="changeInput($event,'max_price')" @focus="changeFocus('max_price')"
								@blur="changeBlur" placeholder="最高价"
								placeholder-style="color: #CCCDD4;font-size: 26rpx;" />
							<image :src="icon" data-prop="max_price" @click="clearFun"
								v-show="searchObj.max_price !== ''"></image>
						</view>
					</view>
				</view>



			</view>


			<view class="grade-title">标签</view>
			<view class="grade-ul">
				<view :class="['grade-li',searchObj.origin == item.value?  'grade-li-active' : '']"
					v-for="(item,index) in originList" :key="item.label" @click="changeOrigin(item.value)">
					{{item.label}}-{{searchObj.origin}}-{{item.value}}
				</view>
			</view>
		</view>

		<view class="grade-button-wrap">
			<view class="grade-button-li" @click="reset">重置</view>
			<view class="grade-button-li" @click="submit">确定</view>
		</view>
	</cus-popup>
</template>

<script>
	import cusPopup from '@/components/cus-popup/popup.vue'
	export default {
		components: {
			cusPopup
		},
		props: {
			value: {
				type: Boolean,
				default: false
			},
			searchData: {
				type: Object,
				default: () => {}
			}
		},
		watch: {
			searchData: {
				deep: true,
				immediate: true,
				handler(news) {
					console.log(news, 'news-=-=')
					this.searchObj = news
				}
			}
		},
		computed: {
			visible: {
				get() {
					return this.value
				},
				set(news) {
					this.$emit('input', news)
				}
			}
		},
		data() {
			return {
				allowMarkClose: true,
				icon: require('./index_clean.png'),
				isBlur: false,
				searchObj: {},
				// 评分值更改为百分制
				gradeList: [{
						// label: '4.6～4.7',
						label: '92～94',
						value: 1
					},
					{
						label: '94～96',
						value: 2
					},
					{
						label: '96～98',
						value: 3
					},
					{
						label: '98以上',
						value: 4
					}
				],
				originList: [{
						// label: '4.6～4.7',
						label: '京东',
						value: 1
					},
					{
						label: '天猫精选',
						value: 2
					},
					{
						label: '苏宁易购',
						value: 3
					},

				],
			}
		},
		methods: {
			changeOrigin(value) {
				if (this.searchObj.origin == value) {
					this.searchObj.origin = ''
				} else {
					this.searchObj.origin = value
				}
				console.log(this.searchObj, 'this.searchObj---', value)

			},
			changeGrade(value) {
				if (this.searchObj.comment_score == value) {
					this.searchObj.comment_score = ''
				} else {
					this.searchObj.comment_score = value
				}
				console.log(this.searchObj, 'this.searchObj---', value)

			},
			changeInput(e, prop) {
				console.log(e.detail.value, prop)
				// this.searchObj[prop] = e.detail.value
				this.$set(this.searchObj, prop, e.detail.value)
			},
			changeFocus(prop) {
				this.isBlur = prop
			},
			changeBlur() {
				this.isBlur = ''
			},
			clearFun(prop) {
				this.$set(this.searchObj, prop, '')
			},
			reset() {
				this.searchObj = {
					min_price: '',
					max_price: '',
					cos_ratio: '',
					cos_fee: '',
					comment_score: '',
					sort_field: '',
					sort_order: '',
					origin: ''
				}
				this.$emit('update:searchData', this.searchObj)
			},
			submit() {
				const exclude = ['sort_field', 'sort_order']
				let flag = false
				const {
					min_price,
					max_price
				} = this.searchObj
				console.log(this.searchObj)
				if (min_price * 1 > max_price * 1) {
					uni.showToast({
						title: '商品价格最低价不能大于最高价',
						icon: 'none'
					})
					return
				}
				for (const key in this.searchObj) {
					if (exclude.includes(key)) {
						continue;
					}
					if (this.searchObj[key]) {
						flag = true
						break
					}
				}

				this.$emit('update:searchData', this.searchObj)
				this.visible = false
			}
		}
	}
</script>

<style lang='scss' scoped>
	.gradeCusom {
		padding: 0 !important;
	}

	.filter-warp {
		width: 100%;
		padding: 0 34rpx;
		box-sizing: border-box;
	}

	.grade-title {
		font-size: 32rpx;
		font-weight: 400;
		line-height: 24rpx;
		margin-top: 34rpx;
		margin-bottom: 26rpx;
	}

	.grade-ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.grade-li {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 206rpx;
		height: 52rpx;
		background: var(--main-bg);
		border-radius: 26rpx;
		font-size: 26rpx;
		font-weight: 400;
		color: #182545;
		line-height: 26rpx;
	}

	.grade-li-active {
		background: linear-gradient(180deg, #F53F3F 0%, #FF7B7B 100%);
		font-weight: 500;
		color: #fff;
	}

	.grade-li:nth-of-type(n+4) {
		margin-top: 20rpx;
	}

	.gradeCusom-ratio {
		display: flex;
		justify-content: space-between;
	}

	.gradeCusom-ratio-li {
		padding-right: 10rpx;
		box-sizing: border-box;
	}

	.gradeCusom-input-wrap {
		width: 340rpx;
		height: 76rpx;
		background: #F7F8FA;
		border-radius: 14rpx;
		padding: 0 0 0 42rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		border: 1rpx solid transparent;
		position: relative;
	}

	.gradeCusom-price-input-wrap {
		width: 320rpx;
	}

	.gradeCusom-ratio-input {
		flex: 1;
		height: 76rpx;
		font-size: 26rpx;
		font-weight: 400;
		color: #182545;
	}

	.gradeCusom-input-wrap image {
		padding: 0 24rpx;
		width: 24rpx;
		height: 24rpx;
		flex-shrink: 0;
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		z-index: 10;
	}

	.gradeCusom-price-li {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.gradeCusom-price-li>text {
		margin: 0 8rpx;
		font-size: 26rpx;
		color: #CCCDD4;
		line-height: 26rpx;
	}

	.grade-button-wrap {
		margin-top: 80rpx;
		display: flex;
	}

	.grade-button-li {
		width: 50%;
		height: 90rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
		font-weight: 500;
		line-height: 40rpx;
	}

	.grade-button-li:nth-of-type(1) {
		background: rgba(235, 64, 83, 0.06);
		border-radius: 0rpx 0rpx 0rpx 20rpx;
		color: var(--main-red);
	}

	.grade-button-li:nth-of-type(2) {
		background: var(--main-red);
		border-radius: 0rpx 0rpx 20rpx 0rpx;
		color: #FFFFFF;
	}

	.gradeCusom-input-required {
		border: 1rpx solid var(--main-red);
		box-sizing: border-box;
	}

	.custom-input-focus {
		border: 1rpx solid var(--main-red);
	}
</style>