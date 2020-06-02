import axios from 'axios'

const state = {
    videos: [],
    video: {},
};

const getters = {
    getAllVideos(state) {
        return state.videos
    },
    getVideo(state) {
        return state.video
    },
};

const actions = {
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
};

const mutations = {
    setAllVideos(state, videos) {
        state.videos = videos
    },
    setVideo(state, video) {
        state.video = video
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}