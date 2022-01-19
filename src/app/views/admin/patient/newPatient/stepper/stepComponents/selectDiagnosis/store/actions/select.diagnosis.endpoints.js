let selectDiagnosisAppEndpoints = {

    getDiagnosisList: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/diagnosis/getDiagnosisList',
        type: 'POST'
    },

    saveOrUpdateCheckupWithDiagnosis: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
        },
        url: '/api/checkup/saveOrUpdateCheckupWithDiagnosis',
        type: 'POST'
    },

};


export default selectDiagnosisAppEndpoints;