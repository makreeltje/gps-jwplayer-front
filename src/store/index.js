import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import captions from './modules/captions'
import videos from './modules/videos'
import axios from "axios";

Vue.use(Vuex)
axios.defaults.baseURL = process.env.VUE_APP_API_URL

export default new Vuex.Store({
    modules: {
        users,
        videos,
        captions
    }
})