<template>
    <div>
        <section class="pt-10 relative overflow-hidden h-screen">
            <client-only placeholder="... Loading">
                <div class="video-wrapper">
                    Video here
                </div>
            </client-only>
            <div class="absolute inset-0 z-0 w-full h-full bg-black opacity-75"></div>
			<div class="meta-title absolute inset-0 object-fill z-0 w-full flex justify-center items-center">
				<div class="text-center">
                    <h3 class="text-lg text-white">Kelas Online:</h3>
                    <h4 class="text-6xl text-teal-500 font-semibold">
                    {{ course.name ? course.name : 'Nama Kelas' }}
                    </h4>
				</div>
			</div>
			<div class="container mx-auto z-10 relative">
				<HeaderParts/>
			</div>
        </section>
        <section class="container mx-auto pt-24 relative">
			<div class="absolute top-0 w-full transform -translate-y-1/2">
				<div class="w-3/4 mx-auto">
					<div class="flex justify-between">
                        <FeatureParts>
							<template v-slot:data-icon>
                                <Nametag class="fill-teal-500"/>
							</template>
							<template v-slot:data-title>
								Student
							</template>
							<template v-slot:data-count>
                                {{ course.total_student }}
							</template>
						</FeatureParts>
                        <FeatureParts>
							<template v-slot:data-icon>
                                <Playback class="fill-teal-500"/>
							</template>
							<template v-slot:data-title>
								Video
							</template>
							<template v-slot:data-count>
                                {{ course.total_videos }}
							</template>
						</FeatureParts>
                        <FeatureParts>
							<template v-slot:data-icon>
                                <Certificate class="fill-teal-500"/>
							</template>
							<template v-slot:data-title>
								Certificate
							</template>
							<template v-slot:data-count>
                                {{ course.certificate === 1 ? "Tersedia" : "-"}}
							</template>
						</FeatureParts>
					</div>
				</div>
			</div>
            <div class="w-3/4 mx-auto mt-8">
				<div class="w-3/4">
					<section>
						<h6 class="font-medium text-gray-900 text-2xl mb-4">
							About <span class="text-teal-500">Course</span>
						</h6>
						<HeaderCoursesPart>
							<template v-slot:content-gray>About</template>
							<template v-slot:content-blue>Course</template>
						</HeaderCoursesPart>
						<p class="text-gray-600 text-lg leading-relaxed mb-3">
							{{course.description ? course.description :"No Description Found"}}
						</p>
					</section>
					<section class="mt-10">
						<HeaderCoursesPart>
							<template v-slot:content-gray>Course</template>
							<template v-slot:content-blue>Photos</template>
						</HeaderCoursesPart>
						<div class="flex flex-wrap justify-start items-center -mx-4 mt-6 pl-2">
							<template v-if="course.images.length > 0">
								<CoursePhoto v-for="item in course.images" :item="item" :key="item.id"/>
							</template>
							<template v-else>
								<div class="w-full text-center py-12">No Item Found</div>
							</template>
						</div>
					</section>
					<section class="mt-10">
						<HeaderCoursesPart>
							<template v-slot:content-gray>You Will</template>
							<template v-slot:content-blue>Learn</template>
						</HeaderCoursesPart>
						<template v-if="course.chapters.length > 0">
							<div class="mt-3"></div>
							<client-only>
								<ChapterPreview v-for="chapter in course.chapters" :key="chapter.id"
								:chapter="chapter">
								</ChapterPreview>
							</client-only>
						</template>
						<template v-else>
							<div class="w-full text-center py-12">No Chapters Found</div>
						</template>
					</section>
					<section class="mt-10 w-2/3">
						<HeaderCoursesPart>
							<template v-slot:content-gray>Our</template>
							<template v-slot:content-blue>Instructor</template>
						</HeaderCoursesPart>
						<div class="flex items-center mt-3">
                            <client-only>
                                <img :src="course.mentor.profile"
								:alt="course.mentor.name"
								class="w-20 h-20 rounded-full overflow-hidden object-cover"
							/>
                            </client-only>
							<div class="ml-4">
								<h2 class="text-lg text-gray-900">
									{{course.mentor.name ? course.mentor.name :"Mentor's Name"}}
								</h2>
								<h3 class="text-sm text-gray-600">
									{{course.mentor.profession ? course.mentor.profession :  "Mentor's Profession"}}
								</h3>
							</div>
						</div>
					</section>
					<section class="mt-10 w-6/12">
						<HeaderCoursesPart>
							<template v-slot:content-gray>Happy</template>
							<template v-slot:content-blue>Students</template>
						</HeaderCoursesPart>
                        <UserReview v-for="item in course.reviews" :key="item.id" :item="item">
							<template v-slot:item-rating>
								<StarParts :value="item.rating"/>
							</template>
						</UserReview>
					</section>
				</div>
			</div>
        </section>
		<section class="mt-24 bg-indigo-1000 py-12">
			<FooterPart/>
		</section>
    </div>
</template>

<script>
import Nametag from "~/assets/icon-nametag.svg?inline";
import Playback from "~/assets/icon-playback.svg?inline";
import Certificate from "~/assets/icon-certificate.svg?inline";
    export default {
        head(){
            return {
                title: this.course.name,
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Course' + this.course.name
                    }
                ]
            }
        },
        components: {
            Nametag,Playback,Certificate
		},
        async fetch({store, error, params}){
            try {
                await store.dispatch('course/fetchCourse',params.id)
            }catch(e){
                error({
                    statusCode: 503,
                    message: 'Unable to fetch course #' + params.id
                })
            }
        },
        computed: {
            course (){
                return this.$store.state.course.course
            }
		},
		mounted(){
			if(process.client){
				require('vue-badger-accordion')
			}
		}
    }
</script>

<style>
.video-wrapper {
    @apply absolute inset-0 z-0;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
}
</style>