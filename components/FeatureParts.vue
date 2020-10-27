<template>
	<div class="border border-gray-300 bg-white p-6" style="width:290px">
		<div class="flex">
			<div class="w-auto">
				<slot name="data-icon"></slot>
			</div>
			<div class="ml-5">
				<span class="text-gray-600 block">
					<slot name="data-title"></slot>
				</span>
				<span class="text-gray-900 text-3xl">
					<slot name="data-count"></slot>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>