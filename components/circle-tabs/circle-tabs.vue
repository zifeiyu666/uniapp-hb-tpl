<template>
	<u-scroll-list class='u-m-b-20' :indicator='false'>

		<view v-for='item in tabList' :key='item.dataIndex'>
			<u-tag @click="() => handleClick(item)" v-if='item.dataIndex === current' :text="item.title" shape="circle"
				borderColor="rgba(0,0,0,0)" :bgColor="activeBg" :color="activeColor" class='u-m-r-16'> </u-tag>
			<u-tag @click="() => handleClick(item)" v-else :text="item.title" shape="circle" :borderColor="inActiveBg"
				:bgColor="inActiveBg" color="#444444" class='u-m-r-16'>
			</u-tag>
		</view>
	</u-scroll-list>
</template>

<script>
	export default {
		data() {
			return {
				current: this.defaultCurrent
			}
		},
		props: {
			tabList: Array,
			defaultCurrent: String,
			activeColor: {
				default: '#f53f3f'
			},
			activeBg: {
				default: '#FFECE8'
			},
			inActiveBg: {
				default: '#F5F6F8'
			}
		},
		methods: {
			handleClick(item) {
				console.log(item, '00000');
				this.current = item.dataIndex
				this.$emit('onchange', item)
			}
		}
	}
</script>

<style>
</style>