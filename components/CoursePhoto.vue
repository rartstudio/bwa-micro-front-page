<template>
    <div class="w-full md:w-1/3 px-2 mb-4">
        <div class="item relative">
            <figure class="item-image" @click.stop="showImage(item.id)">
                <Preview/>
                <client-only>
                    <img :src="item.image" class="object-cover h-40 md:h-32 w-full"/>
                </client-only>
            </figure>
        </div>
	  </div>
</template>

<script>
import Preview from "~/assets/icon-preview.svg?inline";
export default {
    name: "CoursesPhoto",
    props : {
        item: {
            type: Object
        }
    },
    methods: {
      showImage(id){
        let images = this.$store.state.course.course.images
        let filteredImage = images.filter(item => item.id == id)
        let image = filteredImage[0].image
        this.$emit('show-modal',image)
      }
    },
    components : {
        Preview
    }
}
</script>

<style>
.item figure.item-image {
  position: relative;
  perspective: 10000px;
}

.item figure.item-image:before {
  content: "";
  @apply absolute inset-0 bg-indigo-900 opacity-0 transition-all duration-200;
}

.item:hover figure.item-image:before {
  @apply opacity-75;
}

.item figure.item-image svg.icon {
  content: "";
  position: absolute;
  width: 46px;
  height: 46px;
  top: 50%;
  left: 50%;
  transform-origin: bottom;
  opacity: 0;
  transform: translateX(-50%) translateY(-50%) rotateX(-45deg);
  @apply transition-all duration-300;
}

.item figure.item-image svg.icon circle {
  @apply fill-orange-500;
}

.item:hover figure.item-image svg.icon {
  opacity: 1;
  transform: translateX(-50%) translateY(-50%) rotateX(0deg);
}
</style>