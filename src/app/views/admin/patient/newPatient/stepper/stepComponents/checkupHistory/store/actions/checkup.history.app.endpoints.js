let checkupHistoryAppEndpoints = {

    getCheckupHistoryNumericValuesOnlyByPatientID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/checkup/getCheckupHistoryNumericValuesOnlyByPatientID',
        type: 'POST'
    },


    getCheckupFullHistoryByPatientID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/checkup/getCheckupFullHistoryByPatientID',
        type: 'POST'
    },

};

export default checkupHistoryAppEndpoints;