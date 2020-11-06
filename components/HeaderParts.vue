<template>
    <header class="flex justify-between items-center">
        <div style="height:47px">
            <img src="~/assets/logo.svg">
        </div>
        <ul class="flex items-center">
            <li>
                <nuxt-link 
                    to="/" 
                    :class="[mode == 'dark-mode' ? 'dark-mode' : mode]">
                    Home
                </nuxt-link>
            </li>
            <li>
                <nuxt-link 
                    to="/" 
                    :class="[mode == 'dark-mode' ? 'dark-mode' : mode]">
                    Pricing
                </nuxt-link>
            </li>
            <li>
                <nuxt-link 
                    to="/" 
                    :class="[mode == 'dark-mode' ? 'dark-mode' : mode]">
                    Features
                </nuxt-link>
            </li>
            <li>
                <nuxt-link 
                    to="/" 
                    :class="[mode == 'dark-mode' ? 'dark-mode' : mode]">
                    Story
                </nuxt-link>
            </li>
            <li>
                <template v-if="isCookieExist">
                    <a
                        :href="login+'/login'"
                        target="_blank"
                        :class="['btn-login']">
                        Masuk
                    </a>
                </template>
                <template v-else>
                    <nuxt-link 
                        to="/"
                        target="_blank"
                        rel="noopener noreferrer" 
                        class="text-lg text-white font-medium px-6 py-3  ml-6 inline-flex items-center duration-200 transition-all hover:bg-indigo-800 hover:text-teal-500">
                        
                        <span class="rounded-full overflow-hidden mr-3 border-2 border-orange-500">
                            <template v-if="userLogin.thumbnail">
                                <client-only>
                                    <img
                                        :src="userLogin.thumbnail"
                                        class="object-cover w-8 h-8 inline-block"
                                    />
                                </client-only>
                            </template>
                            <template v-else>
                                <div class="fill-indigo-500 w-8 h-8 inline-block rounded-full"></div>
                            </template>
                        </span>
                        Hi, {{ userLogin.name }}
                    </nuxt-link>
                    <a :href="login+'/user'">
                        Kelas Saya
                    </a>
                </template>
            </li>
        </ul>
    </header>
</template>

<script>
import cookies from 'js-cookie';
    export default {
        data(){
            return {
                login : process.env.memberPage,
                isCookieExist: false,
                userLogin: {}
            }
        },
        props : {
            mode: {
                type: String,
                default : 'dark-mode'
            }
        },
        created(){
            const resultCookie = cookies.get('BWAMICRO:user')
            if(resultCookie != undefined){
                this.userLogin = JSON.parse(resultCookie);
                this.isCookieExist = false 
            }
            else {
                this.isCookieExist = true
            }
        }
    }
</script>

<style>
.light-mode {
    @apply text-black text-lg font-medium px-6 py-3
}
.light-mode:hover {
    @apply text-teal-500
}
.dark-mode {
    @apply text-white text-lg font-medium px-6 py-3
}
.dark-mode:hover {
    @apply text-teal-500
}
.btn-login {
    @apply bg-indigo-700 transition-all duration-200 ml-6 text-white text-lg font-medium px-6 py-3
}
.btn-login:hover {
    @apply bg-indigo-600 text-teal-500;
}
</style>