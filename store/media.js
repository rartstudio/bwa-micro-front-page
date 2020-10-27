/* eslint-disable */
import CoursesService from "@/services/modules/courses.js";


// Take note that state value should always be a function to avoid unwanted shared state on the server side.
export const state = () => ({
    course: [],
    error : false
})

export const mutations = {
    SET_ERROR_STATUS(state,error){
        state.error = error
    }
}

export const actions = {
    testMedia({commit}){
        return CoursesService.getMedia()
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
                if(error.errno == 'ECONNREFUSED'){
                    commit('SET_ERROR_STATUS',true);
                }
            })
    }
}

export const getters = {
}