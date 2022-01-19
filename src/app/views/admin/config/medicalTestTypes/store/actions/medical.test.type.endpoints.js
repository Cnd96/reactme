import {DEFAULT_SAVE_UPDATE} from "../../../../../../../utils/MessageUtil";


let medicalTestTypeAppEndpoints = {
    getPagedMedicalTestTypes: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/medicalTest/getPagedMedicalTestTypes',
        type: 'POST'
    },

    getMedicalTestTypeDTOByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/medicalTest/getMedicalTestTypeDTOByID',
        type: 'GET'
    },

    saveOrUpdateMedicalTestType: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_SAVE_UPDATE
        },
        url: '/api/medicalTest/saveOrUpdateMedicalTestType',
        type: 'POST'
    },
};

export default medicalTestTypeAppEndpoints;
