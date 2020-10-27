<template>
    <div class="mt-8">
        <slot name="item-rating"></slot>
        <p class="text-gray-600 mt-1">{{item.note ? item.note : "Student's Response"}}</p>
        <div class="flex items-center mt-4">
            <div class="rounded-full overflow-hidden">
                <client-only>
                    <img 
                        :src="item.users.avatar"
                        :alt="item.users.name"
                        class="object-cover w-14 h-14"
                    />
                </client-only>
            </div>
            <div class="ml-4">
                <h2 class="text-lg text-gray-900">
                    {{item.users.name ? item.users.name : "Student's Name"}}
                </h2>
                <h3 class="text-sm text-gray-600">
                    {{item.users.role ? item.users.role : "Student's Role"}}
                </h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item : {
                type: Object
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>