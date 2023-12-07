<template>
	<view class='container page-padding u-rela'>
		<view class="u-flex u-p-t-32 u-row-between">
			<u-icon @click='goBack' name='close' size="20" color="#444"></u-icon>
			<view class='u-flex'>
				<u-icon name='info-circle' color='#6F7379' size="16" label='笔记创作贴士' labelColor="#6F7379" labelSize="12"
					labelPos="right"></u-icon>
			</view>
		</view>
		<view class="u-m-t-48">
			<u-upload width='109' height="109" :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1"
				multiple :maxCount="10"></u-upload>
			<u--input placeholder="有趣的标题能吸引更多人围观" clearable showWordLimit border="bottom" v-model="value"
				@change="change"></u--input>
			<u--textarea placeholder="记录你的商品开箱、购后点评、购买攻略、价格优惠信息，与值友共同交流分享~" height="180" clearable border="none"
				v-model="value" @change="change"></u--textarea>
			<view class='square-pink-btn'>
				<u-icon name='/static/common/goods.png' size="17" @click="handleAddGoods" label="添加商品"
					labelColor="var(--main-red)" labelSize="12">

				</u-icon>
			</view>
		</view>
		<view class="u-abso u-flex u-row-center" style="width: calc(100% - 64rpx);bottom: 20px;">
			<u-button text="发布笔记" shape='circle' type='primary'
				color='linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%)'></u-button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				fileList1: [],
				selected: []
			}
		},
		mounted() {
			uni.$on('add-goods-confirm', (val) => {
				this.selected = val.selected
			})
		},
		methods: {
			//  添加商品
			handleAddGoods() {
				uni.navigateTo({
					url: '/pages/goodsList/goodsList'
				})
			},
			goBack() {
				uni.navigateBack()
			},
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						}
					});
				})
			},
		}
	}
</script>

<style lang='scss' scoped>
	.container {
		padding-top: env(safe-area-inset-top);
		background-color: #fff;
		height: 100%;
	}
</style>
<style>
	page {
		height: 100%;
	}
</style>