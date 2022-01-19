import {DEFAULT_SAVE_UPDATE} from "../../../../../../../utils/MessageUtil";


let diagnosisAppEndpoints = {
    getPagedDiagnosis: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/diagnosis/getPagedDiagnosis',
        type: 'POST'
    },

    getDiagnosisDTOByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/diagnosis/getDiagnosisDTOByID',
        type: 'GET'
    },

    saveOrUpdateDiagnosis: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_SAVE_UPDATE
        },
        url: '/api/diagnosis/saveOrUpdateDiagnosis',
        type: 'POST'
    },
};

export default diagnosisAppEndpoints;
