import axios from 'axios'

const state = {
    captionText: '',
    captionJson: []
};

const getters = {
    getCaptionText(state) {
        return state.captionText
    },
    getCaptionJson(state) {
        return state.captionJson
    }
};

const actions = {
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
                context.commit('setCaptionJson', response.data)
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
    },
    saveEditedCaptions(context, body, lang = 'en') {
        axios.post('/SaveCaption', {
            VttLink: body.VttLink,
            VttData: body.VttData,
            label: body.label,
            kind: 'captions',
            language: lang
        })
    }
};

const mutations = {
    setCaptionText(state, captionText) {
        state.captionText = captionText
    },
    setCaptionJson(state, captionJson) {
        state.captionJson = captionJson
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}