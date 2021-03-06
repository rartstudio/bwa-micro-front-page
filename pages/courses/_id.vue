<template>
    <div>
		<template v-if="$fetchState.pending">
            <div class="vld-parent" ref="loadingContainer"></div>
        </template>
        <template v-else-if="$fetchState.error">
            error while fetching data
        </template>
		<template v-else>
			<section class="pt-10 relative overflow-hidden h-screen">
				<client-only>
					<div class="video-wrapper min-h-screen md:min-h-screen">
						<youtube-media
							:video-id="getFirstVideo"
							:player-vars="{autoplay: 1}"
						></youtube-media>
					</div>
				</client-only>
				<div class="absolute inset-0 z-0 w-full h-full bg-black opacity-75"></div>
				<div class="meta-title absolute inset-0 object-fill z-0 w-full flex justify-center items-center">
					<div class="text-center">
						<h3 class="text-lg text-white">Kelas Online:</h3>
						<h4 class="text-3xl md:text-6xl text-teal-500 font-semibold">
						{{ course.name ? course.name : 'Nama Kelas' }}
						</h4>
					</div>
				</div>
				<div class="container px-4 mx-auto z-50 relative">
					<HeaderParts/>
				</div>
			</section>
			<section class="container mx-auto pt-24 relative">
				<div class="md:absolute top-0 w-full transform md:-translate-y-1/2">
					<div class="w-3/4 mx-auto">
						<div class="flex flex-wrap justify-between">
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
				<template v-if="!isAwayFromFooter">
					<div class="meta-price fixed bottom-0 w-full bg-white z-10 left-0 md:py-3">
						<div class="w-full md:w-3/4 md:mx-auto">
							<div class="flex items-center">
								<div class="w-full ml-2 md:mx-auto">
									<h2 class="text-gray-600 text-xs md:text-base">Nama Kelas</h2>
									<h3 class="text-base md:text-2xl text-gray-900 ">{{course.name ? course.name : 'Judul Kelas'}}</h3>
								</div>
								<h5 class="text-base md:text-2xl text-teal-500 whitespace-no-wrap mr-4">
									<template v-if="getTypeCourse == 'Free'">
										Free
									</template>
									<template v-else>
										{{ getTypeCourse | currency }}
									</template>
								</h5>
								<button 
									@click="addToMyCourse(course.id)"
									class="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 whitespace-no-wrap"
									>
									{{ getTypeCourse == 'Free' ? 'Enroll Now' : "Buy Now" }}
								</button>
							</div>
						</div>
					</div>
				</template>
				<div class="w-3/4 mx-auto mt-8">
					<div class="w-full md:w-3/4">
						<section>
							<HeaderCoursesPart>
								<template v-slot:content-gray>About</template>
								<template v-slot:content-blue>Course</template>
							</HeaderCoursesPart>
							<template v-if="course.description">
								<p class="text-gray-600 text-base md:text-lg leading-relaxed mb-3">
									{{course.description}}
								</p>
							</template>
							<template v-else>
								<NoFoundItem/>
							</template>
						</section>
						<section class="mt-10">
							<HeaderCoursesPart>
								<template v-slot:content-gray>Course</template>
								<template v-slot:content-blue>Photos</template>
							</HeaderCoursesPart>
							<div class="flex flex-wrap justify-start items-center -mx-4 mt-6 pl-2">
								<template v-if="course.images.length > 0">
									<CoursePhoto v-for="item in course.images" :item="item" :key="item.id" @show-modal="showModal"/>
									<modal name="modal-preview" class="image">
										<img :src="selected" class="md:object-cover w-full"/>
									</modal>
								</template>
								<template v-else>
									<NoFoundItem/>
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
									:chapter="chapter" @show-modal-video="showModalVideo"/>
									<modal name="modal-preview-video" class="video">
										<client-only>
											<youtube-media
												:video-id="selected"
												:player-vars="{autoplay: 1}"
												>
											</youtube-media>
										</client-only>
									</modal>
								</client-only>
							</template>
							<template v-else>
								<NoFoundItem/>
							</template>
						</section>
						<section class="mt-10 w-full md:w-2/3">
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
						<section class="mt-10 w-full md:w-6/12">
							<HeaderCoursesPart>
								<template v-slot:content-gray>Happy</template>
								<template v-slot:content-blue>Students</template>
							</HeaderCoursesPart>
							<template v-if="course.reviews.length != 0">
								<UserReview v-for="item in course.reviews" :key="item.id" :item="item">
									<template v-slot:item-rating>
										<StarParts :value="item.rating"/>
									</template>
								</UserReview>
							</template>
							<template v-else>
								<NoFoundItem/>
							</template>
						</section>
					</div>
				</div>
			</section>
			<section class="mt-24 bg-indigo-1000 py-12 px-4">
				<intersect @enter="isAwayFromFooter = true" @leave="isAwayFromFooter = false">
					<FooterPart/>
				</intersect>
			</section>
		</template>
        
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import Nametag from "~/assets/icon-nametag.svg?inline";
import Playback from "~/assets/icon-playback.svg?inline";
import Certificate from "~/assets/icon-certificate.svg?inline";
import VueCurrencyFilter from 'vue-numeric';
    export default {
		fetchOnServer: false,
		data(){
			return {
				selected : null,
				isAwayFromFooter : false,
				modalPreview: 'modal-preview',
				modalVideo : 'modal-preview-video'
			}
		},
        // head(){
        //     return {
        //         title: this.course ? this.course.name : 'BWA MICRO',
        //         meta: [
        //             {
        //                 hid: 'description',
        //                 name: 'description',
        //                 content: 'Course' + this.course ? this.course.name : 'BWA MICRO'
        //             }
        //         ]
        //     }
		// },
		methods: {
			showModal (e){
				this.selected = e
				this.show(this.modalPreview)
			},
			showModalVideo (e){
				this.selected = e
				console.log(e);
				this.show(this.modalVideo)
			},
			show (data) {
				this.$modal.show(data);
			},
			hide (data) {
				this.$modal.hide(data);
			},
			addToMyCourse(id){
				this.$store.dispatch('course/addCourse',id)
			}
		},
        components: {
            Nametag,Playback,Certificate
		},
        async fetch(){
            try {
                await this.$store.dispatch('course/fetchCourse',this.$route.params.id)
            }catch(e){
                error({
                    statusCode: 503,
                    message: 'Unable to fetch course #' + this.$route.params.id
                })
            }
        },
        computed: {
            course (){
                return this.$store.state.course.course
			},
			...mapGetters('course',['getFirstVideo','getTypeCourse'])
		},
		async mounted(){
			if(process.client){
				require('vue-badger-accordion')
			}
		}
    }
</script>

<style>
.meta-price {
	transition: all ease-in-out 0.45s;
  	box-shadow: 0px -8px 15px rgba(0, 0, 0, 0.05);
}
.video-wrapper {
    @apply absolute inset-0 z-0;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
}

.video-wrapper iframe {
  @apply absolute top-0 left-0 w-full h-full;
}

.video .vm--modal{
	left: 50% !important;
	top: 0 !important;
	transform: translate(-50%, 30%) !important;
	height: auto !important;
}
@media (max-width:640px){
	.video .vm--modal{
		top: 0 !important;
		width: 100% !important;
		transform: translate(-50%, 42%) !important;
		height: 0;
	}
	iframe {
		width:100% !important;
	}
}

.image .vm--modal{
	left: 50% !important;
	top: 0 !important;
	transform: translate(-50%, 30%) !important;
	height: auto !important;
}
@media (max-width:640px){
	.image .vm--modal{
		top: 0 !important;
		width: 100% !important;
		transform: translate(-50%, 80%) !important;
		height: 0;
	}
}
</style>