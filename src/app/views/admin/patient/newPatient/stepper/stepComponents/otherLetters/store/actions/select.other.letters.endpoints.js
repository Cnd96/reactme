let selectOtherLettersEndpoints = {

    getCheckupInstructionNote: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/instructionNote/getCheckupInstructionNote',
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

    getCheckupDTOByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/checkup/getCheckupDTOByID',
        type: 'GET'
    },

    getPrescriptionByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/prescription/getPrescriptionByCheckupID',
        type: 'GET'
    },

    getHospitalByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/hospital/getHospitalDTOByID',
        type: 'GET'
    },

    getDoctorByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/doctor/getDoctorDTOByID',
        type: 'GET'
    },

};

export default selectOtherLettersEndpoints;

