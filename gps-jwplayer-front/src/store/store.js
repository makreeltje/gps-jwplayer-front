import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://localhost:8000/api'

export const store = new Vuex.Store({
    state: {
        token: localStorage.getItem('access_token') || null,
        videos: [],
        video: {},
        captionText: '',
    },
    getters: {
        loggedIn(state) {
            return state.token != null
        },
        getAllVideos(state) {
            return state.videos
        },
        getVideo(state) {
            return state.video
        },
        getCaptionText(state) {
            return state.captionText
        }
    },
    actions: {
        destroyToken(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            if (context.getters.loggedIn) {
                return new Promise((resolve, reject) => {
                    axios.get('/Logout')
                        .then(response => {
                            localStorage.removeItem('access_token')
                            localStorage.removeItem('name')
                            localStorage.removeItem('greetUser')
                            context.commit('destroyToken')
                            resolve(response)
                        })
                        .catch(error => {
                            localStorage.removeItem('access_token')
                            context.commit('destroyToken')
                            reject(error)
                        })
                })
            }
        },
        retrieveToken(context, credentials) {
            return new Promise((resolve, reject) => {
                axios.post('/Login', {
                    email: credentials.email,
                    password: credentials.password,
                })
                    .then(response => {
                        const token = response.data.accessToken
                        const name = response.data.user.name

                        localStorage.setItem('greetUser', '0')
                        localStorage.setItem('access_token', token)
                        localStorage.setItem('name', name)
                        context.commit('retrieveToken', token)
                        resolve(response)
                    })
                    .catch(error => {
                        console.log(error)
                        reject(error)
                    })
            })
        },
        register(context, credentials) {
            return new Promise((resolve, reject) => {
                axios.post('/Register', {
                    name: credentials.name,
                    email: credentials.email,
                    password: credentials.password,
                    password_confirmation: credentials.password_confirmation
                })
                    .then(response => {
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        fetchVideos(context) {
            axios.get('https://cdn.jwplayer.com/v2/playlists/WJ4674pa')
                .then(response => {
                    context.commit('setAllVideos', response.data.playlist)
                })
                .catch(error => {
                    console.log("Multiple videos: " + error)
                })
        },
        fetchVideo(context, media_id) {
            return axios.get('https://cdn.jwplayer.com/v2/media/' + media_id)
                .then(response => {
                    context.commit('setVideo', response.data)
                })
                .catch(error => {
                    console.log("Single video: " + error)
                })
        },
        fetchCaptions(context, captionUrl) {
            return axios.get(captionUrl)
                .then(response => {
                    context.commit('setCaptionText', response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        },
    },
    mutations: {
        destroyToken(state) {
            state.token = null
        },
        retrieveToken(state, token) {
            state.token = token
        },
        setAllVideos(state, videos) {
            state.videos = videos
        },
        setVideo(state, video) {
            state.video = video
        },
        setCaptionText(state, captionText) {
            state.captionText = captionText
        },
    },
})