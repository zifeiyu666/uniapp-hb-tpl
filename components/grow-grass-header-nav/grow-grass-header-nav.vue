<template>
	<u-grid class='u-m-t-26 header-nav' :border="false" col="4">
		<u-grid-item @click='handleClick' v-for="(listItem,listIndex) in list" :index='listIndex' :key="listItem.title">

			<u-image width='34px' :customStyle="{paddingTop:20+'rpx'}" :src="listItem.icon" :height="42"
				mode="aspectFit"></u-image>
			<text class="grid-text u-m-t-16">{{listItem.title}}</text>
		</u-grid-item>
	</u-grid>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			handleClick(index) {
				let url = ''
				switch (index) {
					case 0:
						url = '/pages/myFocus/myFocus'
						break;
					case 1:
						url = '/pages/TalentList/TalentList'
						break;
					case 2:
						url = '/pages/grassNote/grassNote'
						break;
					case 3:
						url = '/pages/professionalAssessment/professionalAssessment'
						break;
					default:
						break;
				}
				uni.navigateTo({
					url
				})
			}
		},
		props: {
			list: Array
		}
	}
</script>

<style scoped>
	.header-nav {
		background-color: #fff;
		border-radius: 12px;
		padding-bottom: 15px;
	}
</style>