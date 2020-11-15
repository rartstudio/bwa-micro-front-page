<template>
    <div class="flex flex-wrap justify-start items-center -mx-4 mt-6">
        <div class="w-3/6 md:w-1/6 px-4 h-100 mb-8 md:mb-0">
            <div class="card relative transition-all duration-200">
                <!-- <img :src="require(`~/assets/${item.icon}.svg`)" class="hover:fill-white"/> -->
                <BusinessDevelopment/>
                <div class="card-meta mt-10">
                    <h4 class="text-lg text-gray-900 transition-all duration-200 w-1/2">
                        Business Development
                    </h4>
                    <h5 class="text-sm text-gray-600 transition-all mt-2 duration-500">
                        <span>{{ 12483 | currency}}</span>
                    </h5>
                    <nuxt-link class="link-wrapped" to="/"></nuxt-link>
                </div>
            </div>
        </div>
        <div class="w-3/6 md:w-1/6 px-4 h-100 mb-8 md:mb-0">
            <div class="card relative transition-all duration-200">
                <!-- <img :src="require(`~/assets/${item.icon}.svg`)" class="hover:fill-white"/> -->
                <ContentWriter/>
                <div class="card-meta mt-10">
                    <h4 class="text-lg text-gray-900 transition-all duration-200 w-1/2">
                        Content Writer
                    </h4>
                    <h5 class="text-sm text-gray-600 transition-all mt-2 duration-500">
                        <span>{{ 839 | currency}}</span>
                    </h5>
                    <nuxt-link class="link-wrapped" to="/"></nuxt-link>
                </div>
            </div>
        </div>
        <div class="w-3/6 md:w-1/6 px-4 h-100 mb-8 md:mb-0">
            <div class="card relative transition-all duration-200">
                <!-- <img :src="require(`~/assets/${item.icon}.svg`)" class="hover:fill-white"/> -->
                <ProductAdvertisement/>
                <div class="card-meta mt-10">
                    <h4 class="text-lg text-gray-900 transition-all duration-200 w-1/2">
                        Product Advertisement
                    </h4>
                    <h5 class="text-sm text-gray-600 transition-all mt-2 duration-500">
                        <span>{{ 478 | currency}}</span>
                    </h5>
                    <nuxt-link class="link-wrapped" to="/"></nuxt-link>
                </div>
            </div>
        </div>
        <div class="w-3/6 md:w-1/6 px-4 h-100 mb-8 md:mb-0">
            <div class="card relative transition-all duration-200">
                <!-- <img :src="require(`~/assets/${item.icon}.svg`)" class="hover:fill-white"/> -->
                <CustomerRelationship/>
                <div class="card-meta mt-10">
                    <h4 class="text-lg text-gray-900 transition-all duration-200 w-1/2">
                        Customer Relationship
                    </h4>
                    <h5 class="text-sm text-gray-600 transition-all mt-2 duration-500">
                        <span>{{ 553 | currency}}</span>
                    </h5>
                    <nuxt-link class="link-wrapped" to="/"></nuxt-link>
                </div>
            </div>
        </div>
        <div class="w-3/6 md:w-1/6 px-4 h-100 mb-8 md:mb-0">
            <div class="card relative transition-all duration-200">
                <!-- <img :src="require(`~/assets/${item.icon}.svg`)" class="hover:fill-white"/> -->
                <GameDevelopment/>
                <div class="card-meta mt-10">
                    <h4 class="text-lg text-gray-900 transition-all duration-200 w-1/2">
                        Game Development
                    </h4>
                    <h5 class="text-sm text-gray-600 transition-all mt-2 duration-500">
                        <span>{{ 7309 | currency}}</span>
                    </h5>
                    <nuxt-link class="link-wrapped" to="/"></nuxt-link>
                </div>
            </div>
        </div>
        <div class="w-3/6 md:w-1/6 px-4 h-100 mb-8 md:mb-0">
            <div class="card relative transition-all duration-200">
                <!-- <img :src="require(`~/assets/${item.icon}.svg`)" class="hover:fill-white"/> -->
                <TravelGuidance/>
                <div class="card-meta mt-10">
                    <h4 class="text-lg text-gray-900 transition-all duration-200 w-1/2">
                        Travel Guidance
                    </h4>
                    <h5 class="text-sm text-gray-600 transition-all mt-2 duration-500">
                        <span>{{ 73 | currency}}</span>
                    </h5>
                    <nuxt-link class="link-wrapped" to="/"></nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BusinessDevelopment from '~/assets/icon-business-development.svg?inline'
import ContentWriter from '~/assets/icon-content-writer.svg?inline'
import ProductAdvertisement from '~/assets/icon-product-advertisement.svg?inline'
import CustomerRelationship from '~/assets/icon-customer-relationship.svg?inline'
import GameDevelopment from '~/assets/icon-game-development.svg?inline'
import TravelGuidance from '~/assets/icon-travel-guidance.svg?inline'

import VueCurrencyFilter from 'vue-numeric';

export default {
    components: {
        VueCurrencyFilter,
        BusinessDevelopment,
        ContentWriter,
        ProductAdvertisement,
        CustomerRelationship,
        GameDevelopment,
        TravelGuidance
    }
}
</script>

<style >
.card{
    @apply border-gray-200 h-full p-6 border relative;
}
.card svg {
    @apply fill-gray-600;
}
.card:hover svg {
    @apply fill-white;
}
.card:hover {
    @apply bg-indigo-700 border-indigo-700;
    box-shadow: 0px 6px 15px rgba(77,85,188, 0.4)
}
.card .card-meta h4 {
    @apply text-gray-900;
}
.card:hover .card-meta h4 {
    @apply text-white;
}
.card .card-meta h5 {
    @apply text-gray-600;
}
.card:hover .card-meta h5 {
    @apply text-indigo-400;
}
</style>