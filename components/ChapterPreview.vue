<template>
    <div>
        <badger-accordion>
            <badger-accordion-item>
                <template slot="header"><div class="bg-white overflow-hidden">
        <div class="meta pl-4 py-2 relative flex justify-between items center">
            <span class="text-gray-600">{{chapter.name}}</span>
        </div>
    </div></template>    
                <template slot="content">
                    <template v-if="!chapter.lessons">
                        No Lesson
                    </template>
                    <template v-else>
                        <LessonPreview v-for="(lesson,index) in chapter.lessons" :key="lesson.id" :lesson="lesson">
                            <template v-slot:icon-lesson>
                                <template v-if="index == 0">
                                    <IconPlay class="fill-teal-500 mr-6 cursor-pointer" width="20px" height="20px" @click.stop="showVideo(chapter.id,lesson.id)"/>
                                </template>
                                <template v-else>
                                    <IconLock class="mr-6"/>
                                </template>
                            </template>
                        </LessonPreview>
                    </template>
                </template>  
            </badger-accordion-item>
        </badger-accordion>
    </div>
</template>

<script>
import IconPlay from "~/assets/icon-play.svg?inline";
import IconLock from "~/assets/icon-lock.svg?inline";

export default {
    name: "ChapterPreview",
    props :{
        chapter : {
            type: Object
        }
    },
    components: {
        IconPlay, IconLock
    },
    methods: {
        showVideo (chapterId,lessonId){
            let chapters = this.$store.state.course.course.chapters
            let filteredChapter = chapters.filter(item => item.id == chapterId)
            // console.log(filteredChapter)
            let filteredLesson = filteredChapter[0].lessons.filter(item => item.id == lessonId)
            let video = filteredLesson[0].video
            this.$emit('show-modal-video',video)
        }
    }
}
</script>

<style>
.badger-accordion-toggle {
    background :white;
    border: 1px solid #DBDBDB;
    padding-right: 13px;
}
</style>