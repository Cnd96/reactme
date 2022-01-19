let patientDetailsAppEndpoints = {

    getPatientDTOByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/patient/getPatientDTOByID',
        type: 'GET'
    },

    getPagedCheckups: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/checkup/getPagedCheckups',
        type: 'POST'
    }


};

export default patientDetailsAppEndpoints;
