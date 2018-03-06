<template>
	<div>
		recommend
	</div>
</template>
<script type="text/ecmascript-6">
	 import {getRecommend, getDiscList} from 'api/recommend'
	export default {
		data() {
			return {

			}
		},
		created() {
			this._getRecommend();
			this._getDiscList();
		},
		methods: {
			_getRecommend() {
				getRecommend().then((res) => {
					// console.log(res);
				})
			},
			_getDiscList() {
				getDiscList().then((res) => {
					console.log(res);
				})
			}

		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable";
  @import "~common/stylus/mixin";
	
</style>