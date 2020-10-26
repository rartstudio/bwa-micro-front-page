<template>
  <div>
    <main>
      <section class="header-clipping pt-10 px-4">
				<CircleIcon class="circle-icon"/>
				<div class="sunshine"></div>
				<div class="container mx-auto px-4">
          <HeaderParts/>
          <HeroParts/>
        </div>
			</section>
      <section class="container mx-auto pt-24 px-4">
        <ClientParts/>
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
        <div class="flex justify-start items-center flex-wrap -mx-4 mt-6">
          <!-- <CoursePart v-for="item in courses.course" :key="item.id" :item="item"/> -->
        </div>
        <!-- <div class="w-full text-center -py-12">No Item Found</div> -->
      </section>
      <section class="container mx-auto pt-24 px-4">
        <HeaderCoursesPart>
          <template v-slot:title-gray>Category</template>
          <template v-slot:content-gray>Explore &</template>
          <template v-slot:content-blue>Learn</template>
        </HeaderCoursesPart>
        <CategoriesPart />
      </section>
      <section class="mt-24 bg-indigo-1000 py-12 px-4">
        <FooterPart/>
      </section>
    </main>
  </div>
</template>

<style>
.header-clipping {
  position: relative;
}
.header-clipping .container {
  position: relative;
  z-index: 3;
}
.header-clipping .sunshine {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width:515px;
  height: 90%;
  opacity: 0.8;
  clip-path: polygon(46% 0%,82% 0%,67% 100%,0% 100%);
  background: transparent linear-gradient(130.09deg,#3d47bd 0%, #2e37a4 50.8%)
}
.header-clipping:before {
  @apply w-full bg-indigo-900 inset-0 absolute;
  content: "";
  height: 648px;
  clip-path: polygon(0 0, 100% 0, 100% 86%, 0% 100%)
}
.circle-icon {
  position: absolute;
  bottom: -8px;
  left: 0;
}


</style>

<script>
import {mapState} from "vuex";
import CircleIcon from "~/assets/circle-accent-1.svg?inline"

export default {
  head() {
    return {
      title: 'Kelas Online BWA MICRO',
      meta : [
        {
          hid : 'course',
          name : 'description',
          content : 'Tempat Belajar untuk upgrade skill kamu'
        }
      ]
    }
  },
  components : {
    CircleIcon
  },
  async fetch ({store,error}){
    try {
      await store.dispatch('courses/fetchCourses')
    } catch(error) {
      
    }
  },
  mounted(){
    let toast = document.getElementById('toastError');
    setTimeout(function(){
      toast.classList.toggle('hidden')
    },10000)
  },
  computed: {
    ...mapState(['courses'])
  }
}
</script>
