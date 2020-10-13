<template>
    <div class="flex justify-between items-center">
        <div class="w-1/2">
            <h1 class="text-5xl text-white mb-5 font-semibold">
                <span class="text-teal-400">The New</span> Way to <br/> Achieve Good
                <span class="text-teal-400">Skills</span>
            </h1>
            <p class="text-white text-lg mb-8 font-light">
                We Provide tons of pathskill that you <br> can choose and focus on
            </p>
            <form>
                <input type="text" class="bg-white focus:outline-none border-0 px-6 py-3 w-1/2" placeholder="your email address">
                <button class="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3">
                    Daftar Sekarang
                </button>
            </form>
        </div>
        <div class="w-1/2 flex justify-end pt-24 pr-16">
            <div class="relative" style="width: 369px; height: 440px">
                <div class="absolute border-indigo-700 border-2 -mt-12 -mt-6 right-0" style="width: 324px; height: 374px">
                </div>
                <div class="absolute w-full h-full -mb-8 -ml-8">
                    <img 
                        src="~/assets/img-hero.jpg"
                        alt="Hero Image"
                        />
                </div>
                <div class="absolute z-10 bg-white py-3 px-4 mt-24" style="transform: translateX(-63%); width: 275px">
                    <p class="text-gray-900 mb-2">
                        metode belajar yang santai seperti nonton drakor di netflix
                    </p>
                    <span class="text-gray-600">
                        Alyssa, Apps Developer
                    </span>
                </div>
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