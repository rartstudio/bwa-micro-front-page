<template>
    <div>
        <template v-if="value === max">
            <div class="stars">
                <Star v-for="(color,index) in this.value" :key="'A'+index" class="star">
                </Star>
            </div>
        </template>
        <template v-else>
            <div class="stars">
                <Star v-for="(color,index) in this.value" :key="'A'+index" class="star">
                </Star>
                <Star v-for="(nocolor,index) in this.leftRate" :key="'B'+index" class="star no-color">
                </Star>
            </div>
        </template>
    </div>
</template>

<script>
import Star from "~/assets/icon-star.svg?inline";
export default {
    data (){
        return {
            max: 5
        }
    },
    props : {
        value : {
            type: Number
        }
    },
    components : {
        Star
    },
    computed : {
        leftRate(){
            return this.max - this.value
        }
    }
}
</script>

<style>
svg#svg-star {
  width: 26px;
  height: 26px;
  background:#f1e943
}
.stars {
  @apply relative inline-flex;
  min-width: 200px;
}

.stars .star {
  clip-path: url(#star);
  /* mask: url(../public/images/icon-star.svg) no-repeat center left; */
}

.star.no-color {
    background: #dfdfff !important;
}
</style>