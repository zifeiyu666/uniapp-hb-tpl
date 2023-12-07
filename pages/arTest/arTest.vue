<template>
	<view class='container'>
		<refresh-navbar placeholder iconColor='#444' title='' rightIcon=""></refresh-navbar>
		<view class='u-flex u-flex-column u-row-center u-col-center '>
			<u--image mode='widthFix' width="191" height="62" src='/static/arTest/ar.png'></u--image>
			<u--image mode='widthFix' width='319' height="324" class='u-m-t-70'
				src='/static/arTest/person.png'></u--image>
		</view>
		<view class="u-p-56 u-text-center u-flex u-flex-column u-row-center u-col-center ">
			<u-button text="开始测肤" shape='circle' type='primary'
				color='linear-gradient(270deg, #2EB49B 0%, #44CAB1 100%)'></u-button>
			<u-checkbox-group class='u-m-t-40'>
				<u-checkbox v-model="checked" id='agree'>
				</u-checkbox>
				<text for='argee' :style='{color:"#6F7379 "}'>
					我已阅读并同意<text :style='{color:"#2EB49B "}'>个人信息授权书</text>
				</text>

			</u-checkbox-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		computed: {

		},
		methods: {

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
		display: flex;
		flex-direction: column;
		justify-content: space-around;

	}
</style>