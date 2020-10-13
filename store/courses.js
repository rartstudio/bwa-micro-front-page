/* eslint-disable */
import CoursesService from "@/services/modules/courses.js";


// Take note that state value should always be a function to avoid unwanted shared state on the server side.
export const state = () => ({
    course: [],
    error : false
})

export const mutations = {
    SET_COURSE(state,course){
        state.course = course
    },
    SET_ERROR_STATUS(state,error){
        state.error = error
    }
}

export const actions = {
    fetchCourses({commit}){
        return CoursesService.getCourses()
            .then(response => {
                console.log(response.data.data.data);
                // console.log(response.data.data.data);
                commit('SET_COURSE', response.data.data.data);
            })
            .catch(error => {
                if(error.errno == 'ECONNREFUSED'){
                    commit('SET_ERROR_STATUS',true);
                }
            })
    }
}

export const getters = {
}