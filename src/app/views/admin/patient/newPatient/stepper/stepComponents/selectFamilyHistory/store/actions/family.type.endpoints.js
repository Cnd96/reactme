let familyTypeAppEndpoints = {

    getAllFamilyTypes: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/familyType/getFamilyTypes',
        type: 'GET'
    },

    getMedicalDiseasesList: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/medicalDisease/getMedicalDiseasesList',
        type: 'POST'
    },

    saveOrUpdatePatientWithFamilyDiseases: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
        },
        url: '/api/patient/saveOrUpdatePatientWithFamilyDiseases',
        type: 'POST'
    },

};


export default familyTypeAppEndpoints;