import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = process.env.VUE_APP_API_URL

export const store = new Vuex.Store({
    state: {
        token: localStorage.getItem('access_token') || null,
        videos: [],
        video: {},
        captionText: '',
        captionJson: []
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
        },
        getCaptionJson(state) {
            return state.captionJson
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
        fetchCaptionJson(context, captionUrl) {
            return axios.get('/GetCaption', {
                params: {
                    'VttLink': captionUrl
                }
            })
                .then(response => {
                    context.commit('setCaptionJson', response.data.VttData.cues)
                    console.log(JSON.stringify(response.data.VttData.cues))
                })
                .catch(error => {
                    console.log(error)
                })
        },
        autoGenCaptions(context, body) {
            return axios.post('/Transcription', {
                filePath: body.filePath,
                languageCode: body.languageCode,
                videoKey: body.videoKey,
                label: body.label,
            })
        },
        uploadCaption(context, body) {
            return axios.post('/UploadCaption', {
                VttData: body.vttData,
                video_key: body.videoKey,
                kind: body.kind,
                label: body.label,
            })
                .then(response => {
                    console.log('[SUCCESS]: ' + JSON.stringify(response.data))
                })
                .catch(error => {
                    console.log('[ERROR]: ' + JSON.stringify(error.data))
                })
        }
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
        setCaptionJson(state, captionJson) {
            state.captionJson = captionJson
        }
    },
})