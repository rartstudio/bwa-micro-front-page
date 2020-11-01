<template>
    <header class="flex justify-between items-center">
        <div style="height:47px">
            <img src="~/assets/logo.svg">
        </div>
        <ul class="flex items-center">
            <li>
                <nuxt-link 
                    to="/" 
                    class="text-white text-lg font-medium px-6 py-3 hover:text-teal-500">
                    Home
                </nuxt-link>
            </li>
            <li>
                <nuxt-link 
                    to="/" 
                    class="text-white text-lg font-medium px-6 py-3 hover:text-teal-500">
                    Pricing
                </nuxt-link>
            </li>
            <li>
                <nuxt-link 
                    to="/" 
                    class="text-white text-lg font-medium px-6 py-3 hover:text-teal-500">
                    Features
                </nuxt-link>
            </li>
            <li>
                <nuxt-link 
                    to="/" 
                    class="text-white text-lg font-medium px-6 py-3 hover:text-teal-500">
                    Story
                </nuxt-link>
            </li>
            <li>
                <a
                    :href="login"
                    target="_blank"
                    class="bg-indigo-700 transition-all duration-200 text-white text-lg font-medium ml-6 px-6 py-3
                    hover:text-teal-500 hover:bg-indigo-600">
                    Masuk
                </a>
                <!-- <nuxt-link 
                    to="/"
                    target="_blank"
                    rel="noopener noereferrer" 
                    class="text-lg text-white font-medium px-6 py-3  ml-6 inline-flex items-center duration-200 transition-all hover:bg-indigo-800 hover:text-teal-500">
                    
                    <span class="rounded-full overflow-hidden mr-3 border-2 border-orange-500">
                        <img
                            class="object-cover w-8 h-8 inline-block"
                        />
                        <img
                            class="fill-indigo-500 w-8 h-8 inline-block"
                        />
                    </span>
                    Hi,
                </nuxt-link> -->
            </li>
        </ul>
    </header>
</template>

<script>
    export default {
        data(){
            return {
                login : process.env.memberPage
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>