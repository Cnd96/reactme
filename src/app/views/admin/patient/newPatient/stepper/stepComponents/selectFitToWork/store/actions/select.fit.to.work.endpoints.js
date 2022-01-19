let selectFitToWorkEndpoints = {

    getFitToWorkList: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/fitToWork/getFitToWorkList',
        type: 'POST'
    },

    saveOrUpdateCheckupWithFitToWork: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
        },
        url: '/api/checkup/saveOrUpdateCheckupWithFitToWork',
        type: 'POST'
    },

};


export default selectFitToWorkEndpoints;