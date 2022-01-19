import {DEFAULT_SAVE_UPDATE} from "../../../../../../../utils/MessageUtil";


let medicalTestRecordAppEndpoints = {
    getPagedMedicalTestRecords: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/medicalTest/getPagedMedicalTestRecords',
        type: 'POST'
    },

    getMedicalTestRecordDTOByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/medicalTest/getMedicalTestRecordDTOByID',
        type: 'GET'
    },

    saveOrUpdateMedicalTestRecord: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_SAVE_UPDATE
        },
        url: '/api/medicalTest/saveOrUpdateMedicalTestRecord',
        type: 'POST'
    },

    getMedicalTestTypes: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/medicalTest/getMedicalTestTypes',
        type: 'GET'
    },
};

export default medicalTestRecordAppEndpoints;
