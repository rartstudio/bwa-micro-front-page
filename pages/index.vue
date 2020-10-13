<template>
  <div>
    <main>
      <section class="header-clipping pt-10">
				<image href="" class="absolute left-0 bottom-0"/>
				<div class="sunshine"></div>
				<div class="container mx-auto">
          <HeaderParts/>
          <HeroParts/>
        </div>
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
.header-clipping:before{
  @apply w-full bg-indigo-900 inset-0 absolute;
  content: "";
  height: 648px;
  clip-path: polygon(0 0, 100% 0, 100% 86%, 0% 100%)
}
</style>

<script>
// import {mapState} from "vuex"

export default {
  // async fetch ({store,error}){
  //   try {
  //     await store.dispatch('courses/fetchCourses')
  //   } catch(error) {
      
  //   }
  // },
  // mounted(){
  //   let toast = document.getElementById('toastError');
  //   setTimeout(function(){
  //     toast.classList.toggle('hidden')
  //   },10000)
  // },
  // computed: {
  //   ...mapState(['courses'])
  // }
}
</script>
