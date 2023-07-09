<template>
	<view>

		<view class="add-btn">
			<u-icon name='plus' size='16' color="var(--main-white)"></u-icon>
		</view>

		<view class='page-wrapper'>
			<u-scroll-list :indicator='false'>
				<view class='u-m-r-16' v-for="(item, index) in focusList" :key="index">

					<view class="focus-person u-flex u-flex-column u-flex-center u-p-10">
						<u-avatar></u-avatar>
						<view class="font-main-black-10 u-line-1 u-m-t-8">
							江来江来江来江来江来
						</view>
					</view>
				</view>
			</u-scroll-list>
		</view>
		<view class='page-padding'>
			<view class='u-flex '>
				<u-tag text="标签" shape="circle" borderColor="#FFECE8" bgColor="#FFECE8" color="#f53f3f"> </u-tag>
				<u-tag class='u-m-l-24' text="面部护肤" shape="circle" borderColor="#ffffff" bgColor="#ffffff"
					color="#444444"></u-tag>
			</view>

			<view class="card-wrapper u-m-t-32">
				<view class='card-header u-flex u-row-between u-p-16'>
					<view class='u-flex'>
						<u-avatar></u-avatar>
						<view class='font-main-black-16 u-m-l-16'>好看清单</view>
					</view>
					<view class='icon-circle'>
						<u-icon name='/static/common/more.png'></u-icon>
					</view>
				</view>


				<view>
					<view style='margin-left: -8px; margin-right: -8px;' v-for="item in Array.from(new Array(3).keys())"
						:key='item'>
						<goods-list-row-item></goods-list-row-item>
					</view>
					<u-line class='u-m-t-30'></u-line>
					<view class='u-flex u-row-center u-m-t-28'>
						<view class='font-main-black-12 u-m-r-8'>余下 <text style="color: var(--main-red)">7</text> 条
						</view>
						<u-icon name='/static/common/arr-up.png' size='12'></u-icon>
					</view>
				</view>

			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				focusList: [
					1, 2, 3, 4, 5, 6, 7, 8, 9
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang='scss' scoped>
	.focus-person {
		border-radius: 4px;
		background: var(--main-bg);
		width: 65px;

	}

	.card-header {
		border-radius: 8px;
		background: #FDF6E9;
	}

	.icon-circle {
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background-color: var(--main-white);
	}
</style>