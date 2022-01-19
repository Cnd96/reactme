let medicalTestEndpoints = {

    getMedicalTestTypes: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/medicalTest/getMedicalTestTypes',
        type: 'GET'
    },

    saveOrUpdateCheckupWithPatientMedicalTestsResults: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
        },
        url: '/api/checkup/saveOrUpdateCheckupWithPatientMedicalTestsResults',
        type: 'POST'
    },

};

export default medicalTestEndpoints;