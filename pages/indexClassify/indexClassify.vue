<template>
	<view>
		<view class='u-m-t-100'>
			<liu-indexed-list :dataList="dataList" @click="click"></liu-indexed-list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [{
					id: '1',
					name: '刘**',
					phone: '181****5576',
					img: 'https://cdn.pixabay.com/photo/2022/03/31/14/53/camp-7103189_1280.png'
				}, {
					id: '2',
					name: '税**',
					phone: '181****5576',
					img: 'https://cdn.pixabay.com/photo/2021/07/22/11/25/rabbit-6485072_1280.jpg'
				}, {
					id: '3',
					name: '柴**',
					phone: '181****5576',
					img: 'https://cdn.pixabay.com/photo/2020/05/19/13/35/cartoon-5190860_1280.jpg'
				}, {
					id: '4',
					name: '王**',
					phone: '181****5576',
					img: 'https://cdn.pixabay.com/photo/2020/05/19/13/32/cartoon-5190837_1280.jpg'
				}, {
					id: '5',
					name: '马**',
					phone: '181****5576',
					img: 'https://cdn.pixabay.com/photo/2023/03/07/12/45/child-7835677_1280.jpg'
				}, {
					id: '6',
					name: '韩**',
					phone: '181****5576',
					img: 'https://cdn.pixabay.com/photo/2022/11/29/19/05/boho-7625140_1280.jpg'
				}, {
					id: '7',
					name: '张**',
					phone: '181****5576',
					img: 'https://cdn.pixabay.com/photo/2020/05/19/13/32/cartoon-5190837_1280.jpg'
				}, {
					id: '8',
					name: '王**',
					phone: '181****5576',
					img: 'https://cdn.pixabay.com/photo/2020/05/19/13/35/cartoon-5190860_1280.jpg'
				}, {
					id: '9',
					name: '张**',
					phone: '18198045576',
					img: 'https://cdn.pixabay.com/photo/2021/07/22/11/25/rabbit-6485072_1280.jpg'
				}, {
					id: '10',
					name: '李**',
					phone: '181****5576',
					img: 'https://cdn.pixabay.com/photo/2022/03/31/14/53/camp-7103189_1280.png'
				}]
			}
		},
		methods: {
			handleClick(i) {
				console.log(i, '-=-=-=-i');
			}
		}
	}
</script>

<style>

</style>