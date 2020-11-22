<template>
    <form class="flex" @submit.prevent="register">
        <input type="text" class="bg-white focus:outline-none border-0 px-1 md:px-6 py-3 w-full md:w-1/2" placeholder="your email address">
        <button class="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 md:px-6 py-3 whitespace-no-wrap">
            Daftar Now
        </button>
    </form>
</template>

<script>
    export default {
        methods: {
            register(){
                window.location.href=`${process.env.memberPage}/login`
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>