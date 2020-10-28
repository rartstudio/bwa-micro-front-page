<template>
    <div class="transition-al duration-500">
        <div class="accordion-item">
            <div class="py-2 pl-8 bg-gray-100 text-gray-600">
                {{ lesson.name }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props : {
            lesson : {
                type: Object
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>