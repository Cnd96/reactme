import {DEFAULT_SAVE_UPDATE} from "../../../../../../../../../../utils/MessageUtil";

let selectPatientComplainAppEndpoints = {

    getPagedPatientComplains: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/patientComplain/getPagedPatientComplains',
        type: 'POST'
    },

    getPatientComplainByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/patientComplain/getPatientComplainByID',
        type: 'GET'
    },

    saveOrUpdatePatientComplain: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
        },
        url: '/api/patientComplain/saveOrUpdatePatientComplain',
        type: 'POST'
    },

    saveOrUpdatePatientComplainWithMessage: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_SAVE_UPDATE
        },
        url: '/api/patientComplain/saveOrUpdatePatientComplain',
        type: 'POST'
    },

    removePatientComplain: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/patientComplain/removePatientComplain',
        type: 'POST'
    },

};


export default selectPatientComplainAppEndpoints;