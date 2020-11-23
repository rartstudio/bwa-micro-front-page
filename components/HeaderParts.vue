<template>
    <header :class="[ ToggleMenu ? 'fixed w-full -mx-4 px-4' : '','flex justify-between items-center']">
        <div style="height:47px" class="z-50 ml-1">
            <img src="~/assets/logo.svg">
        </div>
        <div class="flex md:hidden">
            <button @click="setToggleMenu(ToggleMenu)"
                :class="['toggle z-50', ToggleMenu ? 'active' : '']"
                >
            </button>
        </div>
        <ul :class="[' items-center fixed inset-0 bg-indigo-1000 pt-24 md:pt-0 md:bg-transparent md:relative md:flex md:opacity-100 md:visible', ToggleMenu ? 'opacity-100 visible z-20' : 'opacity-0 invisible']">
            <li class="my-4 md:my-0">
                <nuxt-link 
                    to="/" 
                    :class="[mode == 'dark-mode' ? 'dark-mode' : mode]">
                    Home
                </nuxt-link>
            </li>
            <li class="my-4 md:my-0">
                <nuxt-link 
                    to="/" 
                    :class="[mode == 'dark-mode' ? 'dark-mode' : mode]">
                    Pricing
                </nuxt-link>
            </li>
            <li class="my-4 md:my-0">
                <nuxt-link 
                    to="/" 
                    :class="[mode == 'dark-mode' ? 'dark-mode' : mode]">
                    Features
                </nuxt-link>
            </li>
            <li class="my-4 md:my-0">
                <nuxt-link 
                    to="/" 
                    :class="[mode == 'dark-mode' ? 'dark-mode' : mode]">
                    Story
                </nuxt-link>
            </li>
            <li class="mt-8 md:mt-0">
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
                        class="text-lg text-white font-medium px-6 py-3  ml-6 inline-flex items-center duration-200 transition-all hover:bg-indigo-1000 hover:text-teal-500">
                        
                        <span class="rounded-full overflow-hidden mr-3 border-2 border-orange-500 w-10 h-10">
                            <template v-if="userLogin.thumbnail">
                                <client-only>
                                    <img
                                        :src="userLogin.thumbnail"
                                        class="object-cover w-8 h-8 inline-block"
                                    />
                                </client-only>
                            </template>
                            <template v-else>
                                <div class="bg-indigo-500 w-10 h-10 inline-block rounded-full"></div>
                            </template>
                        </span>
                        Hi, {{ userLogin.name }}
                    </nuxt-link>
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
                userLogin: {},
                ToggleMenu: false
            }
        },
        props : {
            mode: {
                type: String,
                default : 'dark-mode'
            },
        },
        methods: {
            setToggleMenu(toggle){
                return this.ToggleMenu = !toggle
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
.toggle {
    position: relative;
    width: 20px;
    height: 20px;
    z-index: 9999;
}
.toggle:focus {
    outline: none
}
.toggle:before,
.toggle:after{
    @apply right-0 absolute bg-gray-200 transition-all duration-200;
    content: "";
    height:3px;
    transform-origin:center;
}
.toggle:before{
    top:26%;
    width: 20px;
}
.toggle:after{
    top: 58%;
    width: 12px;
}
.toggle.active:before{
    transform: translateY(-50%) rotate(-45deg);
}
.toggle.active:after{
    transform: translateY(-50%) rotate(45deg);
}
.toggle.active:before, .toggle.active:after {
    width: 20px;
    top: 50%;
}

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