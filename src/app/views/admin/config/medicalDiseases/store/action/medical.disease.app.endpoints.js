import {DEFAULT_SAVE_UPDATE} from "../../../../../../../utils/MessageUtil";


let medicalDiseaseAppEndpoints = {
    getPagedMedicalDiseases: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/medicalDisease/getPagedMedicalDiseases',
        type: 'POST'
    },

    getMedicalDiseaseDTOByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/medicalDisease/getMedicalDiseaseDTOByID',
        type: 'GET'
    },

    saveOrUpdateMedicalDisease: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_SAVE_UPDATE
        },
        url: '/api/medicalDisease/saveOrUpdateMedicalDisease',
        type: 'POST'
    },
};

export default medicalDiseaseAppEndpoints;
