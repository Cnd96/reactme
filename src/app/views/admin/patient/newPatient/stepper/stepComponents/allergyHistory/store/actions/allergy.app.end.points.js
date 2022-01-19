import {DEFAULT_SAVE_UPDATE} from "../../../../../../../../../../utils/MessageUtil";

let selectAllergyHistoryAppEndpoints = {

    getPagedAllergyHistory: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/allergyHistory/getPagedAllergyHistory',
        type: 'POST'
    },

    getAllergyHistoryByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/allergyHistory/getAllergyHistoryByID',
        type: 'GET'
    },

    saveOrUpdateAllergyHistory: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
        },
        url: '/api/allergyHistory/saveOrUpdateAllergyHistory',
        type: 'POST'
    },

    saveOrUpdateAllergyHistoryWithMessage: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_SAVE_UPDATE
        },
        url: '/api/allergyHistory/saveOrUpdateAllergyHistory',
        type: 'POST'
    },

    removeAllergyHistory: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/allergyHistory/removeAllergyHistory',
        type: 'POST'
    },

};


export default selectAllergyHistoryAppEndpoints;