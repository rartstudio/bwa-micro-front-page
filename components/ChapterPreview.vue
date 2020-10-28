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
                    <LessonPreview v-for="lesson in chapter.lessons" :key="lesson.id" :lesson="lesson"/>
                </template>  
            </badger-accordion-item>
        </badger-accordion>
    </div>
</template>

<script>
export default {
    props :{
        chapter : {
            type: Object
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