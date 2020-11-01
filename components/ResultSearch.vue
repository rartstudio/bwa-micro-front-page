<template>
    <div class="flex items-center -mx-4 py-2 cursor-pointer relative hover:bg-gray-200">
        
        <client-only>
            <div class="w-auto px-4" style="width:150px">
                <img :src="item.thumbnail ? item.thumbnail : '' " :alt="item.name ? item.name : ''"/>
            </div>    
        </client-only>
        <div class="w-full px-4">
            <h6 class="text-black-900 text-lg">
                {{ item.name ? item.name : '' }}
            </h6>
            <p class="text-gray-600">
                {{ item.level ? item.level : ''}}
            </p>
            <nuxt-link :to="'/courses/'+ item.id" class="link-wrapped"></nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {
        props : {
            item : {
                type : Object
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>