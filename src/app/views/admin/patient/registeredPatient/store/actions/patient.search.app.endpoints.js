let patientSearchAppEndpoints = {
    getPagedPatients: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/patient/getPagedPatients',
        type: 'POST'
    },

    getPatientDTOByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/patient/getPatientDTOByID',
        type: 'GET'
    },

};

export default patientSearchAppEndpoints;
