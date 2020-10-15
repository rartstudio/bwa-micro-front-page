<template>
    <div>
        <div class="flex justify-between items-center">
			<div class="w-auto">
				<h2 class="text-lg text-gray-600">
					<slot name="title-gray"></slot>
				</h2>
				<h3 class="text-xl text-gray-900">
					<slot name="content-gray"></slot>
					<span class="text-teal-400">
						<slot name="content-blue"></slot>
					</span>
				</h3>
			</div>
			<slot name="content-link"></slot>
		</div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>

</style>