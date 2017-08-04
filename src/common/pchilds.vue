<template>
	<div class="app">
		<ul>
			<li v-for="(item, index) in list">
				<p>
					{{item.name}}
				</p>
			</li>
		</ul>
		<button @click="onShow()">点击父级节点报错</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				pd: true,
				list: this.arr,
				errorText: "假装我是报错信息"
			}
		},
		props: {
			arr: {
				type: Array
			}
		},
		mounted() {
			console.log([this.arr])
		},
		methods: {
			onShow() {
				this.$parent.$emit('showErrorText', this.errorText)
			}
		}
	}
</script>

<style>

</style>