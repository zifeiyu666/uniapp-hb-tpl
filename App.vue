<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	// uview 变量
	@import "@/uni_modules/uview-ui/index.scss";

	// 每个页面公共css
	body,
	uni-page-body {
		background-color: #999 !important;
	}
</style>