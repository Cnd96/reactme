let checkupAppEndpoints = {

    saveOrUpdateCheckup: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
        },
        url: '/api/checkup/saveOrUpdateCheckup',
        type: 'POST'
    },

    getCheckupDTOByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/checkup/getCheckupDTOByID',
        type: 'GET'
    },

};

export default checkupAppEndpoints;