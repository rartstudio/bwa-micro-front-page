<template>
    <div>
        <section class="pt-10 z-30 relative" style="height:360px">
            <div class="absolute inset-0 z-0 w-full h-full bg-black opacity-75"></div>
            <div class="meta-title absolute bottom-0 object-fill z-0 w-full flex justify-center items-center" style="margin-bottom: -25px">
                <div>
                    <h3 class="text-6xl text-center text-teal-500 font-semibold">
                        Library
                    </h3>
                    <h4 class="text-lg text-center text-white">
                        Jangan mau kalah update dengan yang lainnya .<br/>
                        Yuk ikuti perkembangan teknologi
                    </h4>
                    <div class="flex flex-col relative">
                        <input type="text"
                            class="bg-white focus:outline-none transition-all duration-200 focus:border-teal-500 border border-gray-600 px-4 py-3 w-full mt-6"
                            @focus="searchFocus"
                            @blur="searchBlur"
                            @keyup.enter="searchCourse"
                            v-model="searchText"
                            :placeholder="additionText"
                        />
                        <template v-if="!course.isLoading && searchText.length >= 3">
                            <template v-if="course.resultSearch.length != 0">
                                <ResultContainer>
                                    <template v-slot:result-content>
                                        <ResultSearch v-for="item in course.resultSearch" :key="item.name" :item="item"/>
                                    </template>
                                </ResultContainer>
                            </template>
                            <template v-else>
                                <ResultContainer>
                                    <template v-slot:result-content>
                                        No Course Found
                                    </template>
                                </ResultContainer>
                            </template>
                        </template>
                        <template v-else-if="course.isLoading && searchText.length >= 3">
                            <ResultContainer>
                                <template v-slot:result-content>
                                    Loading ...
                                </template>
                            </ResultContainer>
                        </template>
                    </div>
                </div>
            </div>
            <div class="container mx-auto z-10 relative">
                <HeaderParts/>
            </div>
        </section>
        <section class="container mx-auto pt-24 px-4">
            <HeaderCoursesPart>
                <template v-slot:title-gray>New Classes</template>
                <template v-slot:content-gray>Summer</template>
                <template v-slot:content-blue>Productive</template>
                <template v-slot:content-link>
                    <div class="w-auto">
                    <nuxt-link to="/courses" class="text-gray-600 hover:underline text-sm">View All Courses</nuxt-link>
                    </div>
                </template>
            </HeaderCoursesPart>
            <template v-if="course.courses.length != 0">
                <div class="flex justify-start items-center flex-wrap -mx-4 mt-6">
                    <CoursePart v-for="item in course.courses" :key="item.id" :item="item"/>
                </div>
            </template>
            <template v-else>
                <div class="w-full text-center -py-12">No Item Found</div>
            </template>
        </section>
        <section class="mt-24 bg-indigo-1000 py-12 px-4">
            <FooterPart/>
        </section>
    </div>
</template>

<script>
import {mapState} from "vuex";
    export default {
        head() {
            return {
                title: 'Courses Library',
                meta : [
                    {
                        hid : 'course',
                        name : 'Courses Library',
                        content : 'A List of our courses'
                    }
                ]
            }
        },
        data(){
            return {
                additionText: "Lagi nyari kelas apa?",
                searchText: ""
            }
        },
        async fetch ({store,error}){
            try {
                await store.dispatch('course/fetchCourses')
            } catch(error) {
            
            }
        },
        watch: {
            searchText : function (value) {
                if(value.length >= 3) this.searchCourse()
            }
        },
        computed: {
            ...mapState(['course']),
        },
        methods : {
            searchFocus (){
                this.additionText = "Ketik minimal 3 karakter untuk mencari"
            },
            searchBlur (){
                this.additionText = "Lagi nyari kelas apa?"
            },
            searchCourse(){
                
                // console.log(this.course.courses)
                //using api
                this.$store.dispatch('course/findCourse',this.searchText).then()
            }
        }
    }
</script>
x
<style lang="scss" scoped>

</style>