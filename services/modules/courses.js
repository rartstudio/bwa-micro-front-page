import {apiClient} from '@/services/config.js'

export default {
    getCourses(){
        return apiClient.get('/courses')
    },
    getCourse(id){
        return apiClient.get(`/courses/${id}`)
    }
}