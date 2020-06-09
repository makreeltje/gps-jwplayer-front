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
        captionJson: [],
        translatedCaptions: [],
        users: [],
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
        },
        getTranslatedCaption(state) {
            return state.translatedCaptions
        },
        getUsers(state) {
            return state.users
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
                            localStorage.removeItem('name')
                            localStorage.removeItem('greetUser')
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
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            return axios.get('/GetCaption', {
                params: {
                    'VttLink': captionUrl
                }
            })
                .then(response => {
                    context.commit('setCaptionJson', response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        autoGenCaptions(context, body) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            return axios.post('/Transcription', {
                filePath: body.filePath,
                languageCode: body.languageCode,
                videoKey: body.videoKey,
                label: body.label,
            })
        },
        uploadCaption(context, body) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            return axios.post('/UploadCaption', {
                VttData: body.VttData,
                video_key: body.video_key,
                kind: body.kind,
                label: body.label,
                language: body.language
            })
                .then(response => {
                    this.showSnack('success', 'The new caption will be available in 10 minutes')
                    console.log('[SUCCESS]: ' + JSON.stringify(response.data))
                })
                .catch(error => {
                    console.log('[ERROR]: ' + JSON.stringify(error.data))
                })
        },
        saveEditedCaptions(context, body, lang = 'en') {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            axios.post('/SaveCaption', {
                VttLink: body.VttLink,
                VttData: body.VttData,
                label: body.label,
                kind: 'captions',
                language: lang
            })
        },
        autoTranslateCaptions(context, translationInfo) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            return axios.post('/TranslateFile', {
                VttData: translationInfo.VttData,
                targetLanguage: translationInfo.targetLanguage,
                kind: translationInfo.kind,
                sourceLanguage: translationInfo.sourceLanguage,
            })
                .then(response => {
                    context.commit('setTranslatedCaption', response.data)
                    console.log('[SUCCESS]: ' + JSON.stringify(response.data))
                })
                .catch(error => {
                    console.log('[ERROR]: ' + JSON.stringify(error.data))
                })
        },
        fetchUsers(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            return axios.get('/GetAllUsers')
                .then(response => {
                    context.commit('setUsers', response.data)
                    console.log('[SUCCESS]: Users grabbed successfully')

                })
                .catch(error => {
                    console.log('[ERROR]: ' + error.data)
                })
        },
        updateUser(context, user) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            return axios.put('/UpdateUserById', {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            })
                .then(() => {
                    console.log('[SUCCESS]: User updated successfully')
                })
                .catch(error => {
                    console.log('[ERROR]: ' + error.data.message)
                })
        },
        deleteUser(context, user) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            return axios.delete('/DeleteUserById', {
                params: {
                    userId: user.id
                }
            })
                .then(response => {
                    console.log('[SUCCESS]: ' + response.data.message)
                })
                .catch(error => {
                    console.log('[ERROR]: ' + error.data.message)
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
        },
        setTranslatedCaption(state, translatedCaption) {
            state.translatedCaptions = translatedCaption
        },
        setUsers(state, users) {
            state.users = users
        }
    },
})