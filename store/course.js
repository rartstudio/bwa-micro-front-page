/* eslint-disable */
import CoursesService from "@/services/modules/courses.js";


// Take note that state value should always be a function to avoid unwanted shared state on the server side.
export const state = () => ({
    isLoading: false,
    courses: [],
    resultSearch: [],
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
    },
    SET_RESULT_SEARCH(state, data){
        state.resultSearch = data
    }
}

export const actions = {
    findCourse({commit},keyword){
        state.isLoading = true
        return CoursesService.searchCourses(keyword)
            .then(response => {
                console.log(response)
                commit('SET_RESULT_SEARCH',response.data.data.data)
                state.isLoading = false
            })
            .catch(error => {
                commit('SET_ERROR_CODE',error);
            })
    },
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
    },
    addCourse({commit},course){
        const token = this.$cookies.get('BWAMICRO:token')
        this.$axios.setHeader('Authorization',token)
        console.log(token);
        // console.log(course)
        return CoursesService.myCourse(course)
            .then(response => {
                window.location.href= `${process.env.memberPage}/joined/${course}`
            })
    }
}

export const getters = {
    getFirstVideo : state => {
        if(state.course.chapters.length == 0) {
            return ''
        }
        return state.course.chapters[0].lessons[0].video
    },
    getTypeCourse : state => {
        if (state.course.type == 'free') {
            return "Free"
        }
        if (state.course.type != 'free') {
            if(state.course.price != null) {
                return state.course.price
            }
            return 0
        }
    }
}