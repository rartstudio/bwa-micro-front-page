<template>
  <div>
    <main>
      <section class="header-clipping pt-10 px-4">
				<CircleIcon class="circle-icon"/>
				<div class="sunshine"></div>
				<div class="container mx-auto px-4">
          <HeaderParts :mode="'dark-mode'"/>
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
        <template v-if="loadingState">
          <div class="relative h-24 w-full">
            <div class="vld-parent" ref="loadingContainer"></div>
          </div> 
        </template>
        <template v-else>
          <template v-if="course.courses.length != 0">
            <div class="flex justify-start items-center flex-wrap -mx-4 mt-6">
              <CoursePart v-for="item in course.courses" :key="item.id" :item="item"/>
            </div>
          </template>
          <template v-else>
            <div class="w-full text-center -py-12">No Item Found</div>
          </template>
        </template>
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

.vld-parent {
    position: static !important;
}
</style>

<script>
import {mapState} from "vuex";
import CircleIcon from "~/assets/circle-accent-1.svg?inline"

export default {
  data(){
    return {
      theme: 'dark-mode',
      loadingState: true,
      fullPage: false
    }
  },
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
  async mounted(){
    this.loadingState = true
    let loader = this.$loading.show({
      container: this.fullPage ? null : this.$refs.loadingContainer,
    });

    try{
      await this.$store.dispatch('course/fetchCourses')
      loader.hide()
      this.loadingState = false
    }
    catch(e){
      this.loadingState = false
    }
    // let toast = document.getElementById('toastError');
    // setTimeout(function(){
    //   toast.classList.toggle('hidden')
    // },10000)
  },
  computed: {
    ...mapState(['course'])
  }
}
</script>
