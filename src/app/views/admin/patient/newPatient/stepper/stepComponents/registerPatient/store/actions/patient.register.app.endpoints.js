import {DEFAULT_SAVE_UPDATE} from "../../../../../../../../../../utils/MessageUtil";


let patientAppEndpoints = {
    getPagedPatient: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/patient/getPagedPatient',
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

    saveOrUpdatePatient: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_SAVE_UPDATE
        },
        url: '/api/patient/saveOrUpdatePatient',
        type: 'POST'
    },

    searchPatient: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
        },
        url: '/api/patient/searchPatientByNicOrContactNumberOrPatientCode',
        type: 'POST'
    },
};

export default patientAppEndpoints;