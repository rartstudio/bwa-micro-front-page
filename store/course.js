/* eslint-disable */
import CoursesService from "@/services/modules/courses.js";


// Take note that state value should always be a function to avoid unwanted shared state on the server side.
export const state = () => ({
    courses: [],
    course : null,
    error : false,
    errorCode : null,
})

export const mutations = {
    SET_COURSES(state,course){
        state.courses = course
    },
    SET_COURSE(state,data){
        state.course = data
    },
    SET_ERROR_STATUS(state,error){
        state.error = error
    },
    SET_ERROR_CODE(state, error){
        state.errorCode = error
    }
}

export const actions = {
    fetchCourses({commit}){
        return CoursesService.getCourses()
            .then(response => {
                commit('SET_COURSES', response.data.data.data);
            })
            .catch(error => {
                if(error.errno == 'ECONNREFUSED'){
                    commit('SET_ERROR_STATUS',true);
                }
            })
    },
    fetchCourse({commit},id){
        return CoursesService.getCourse(id)
            .then(response => {
                commit('SET_COURSE',response.data.data);
            })
            .catch(error => {
                if(error.errno == 'ECONNREFUSED'){
                    commit('SET_ERROR_STATUS',true);
                }
                commit('SET_ERROR_CODE',404);
            })
    }
}

export const getters = {
}