import {DEFAULT_SAVE_UPDATE} from "../../../../../../../utils/MessageUtil";


let fitToWorkAppEndpoints = {
    getPagedFitToWorks: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/fitToWork/getPagedFitToWorks',
        type: 'POST'
    },

    getFitToWorkList: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/fitToWork/getFitToWorkList',
        type: 'POST'
    },

    getFitToWorkByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/fitToWork/getFitToWorkByID',
        type: 'GET'
    },

    saveOrUpdateFitToWork: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_SAVE_UPDATE
        },
        url: '/api/fitToWork/saveOrUpdateFitToWork',
        type: 'POST'
    },

    updateFitToWorkOrder: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_SAVE_UPDATE
        },
        url: '/api/fitToWork/updateFitToWorkOrder',
        type: 'POST'
    },
};

export default fitToWorkAppEndpoints;
