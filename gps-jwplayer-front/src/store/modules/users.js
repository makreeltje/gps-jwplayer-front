import axios from 'axios'

const state = {
    token: localStorage.getItem('access_token') || null
};

const getters = {
    loggedIn(state) {
        return state.token != null
    },
};

const actions = {
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
};

const mutations = {
    destroyToken(state) {
        state.token = null
    },
    retrieveToken(state, token) {
        state.token = token
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}