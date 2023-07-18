<template>
	<u-navbar :autoBack="true" v-bind="$attrs" bgColor="rgba(0,0,0,0)" :leftIconColor="iconColor"
		:titleStyle='{color: iconColor }'>

		<u-icon v-if='leftIcon' :size='iconSize' :color="iconColor" slot='left' class="refresh"
			:name="leftIcon"></u-icon>

		<u-icon :size='iconSize' slot='right' class="refresh" :name="rightIcon"></u-icon>
	</u-navbar>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			leftIcon: String,
			rightIcon: {
				default: '/static/common/refresh.png'

			},
			iconSize: {
				default: 20
			},
			iconColor: {
				default: '#fff'
			}
		}
	}
</script>

<style>
</style>