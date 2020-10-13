import {apiClient} from '@/services/config.js'

export default {
    getCourses(){
        return apiClient.get('/courses')
    }
}