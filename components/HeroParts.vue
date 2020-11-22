<template>
    <div class="flex justify-between items-center">
        <div class="w-full md:w-1/2 mt-8 md:mt-8">
            <h1 class="text-5xl text-white mb-5 font-semibold">
                <span class="text-teal-400">The New</span> Way to <br class="hidden md:block"/> Achieve Good
                <span class="text-teal-400">Skills</span>
            </h1>
            <p class="text-white text-lg mb-8 font-light">
                We Provide tons of pathskill that you <br> can choose and focus on
            </p>
            <RedirectForm/>
        </div>
        <div class="hidden w-1/2 md:flex justify-end pt-24 pr-16">
            <div class="relative" style="width: 369px; height: 440px">
                <div class="absolute border-indigo-700 border-2 -mt-12 right-0" style="width: 324px; height: 374px;transform: translateX(+18px)">
                </div>
                <div class="absolute w-full h-full -mb-8 -ml-8">
                    <img 
                        src="~/assets/img-hero.jpg"
                        alt="Hero Image"
                        />
                </div>
                <div class="absolute z-10 bg-white py-3 px-4 mt-24" style="transform: translateX(-58%); width: 275px">
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