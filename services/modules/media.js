import axios from "axios";

export const apiClient = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type' : 'application/json',
    },
    timeout: 15000
});

export default {
    getMedia(){
        return apiClient.get('/')
    }
}