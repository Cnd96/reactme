let selectFollowUpEndpoints = {

    getFollowUpList: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/followUp/getFollowUpList',
        type: 'POST'
    },

    saveOrUpdateCheckupWithFollowUp: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
        },
        url: '/api/checkup/saveOrUpdateCheckupWithFollowUp',
        type: 'POST'
    },

};


export default selectFollowUpEndpoints;