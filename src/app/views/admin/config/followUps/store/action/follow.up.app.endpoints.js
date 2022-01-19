import {DEFAULT_SAVE_UPDATE} from "../../../../../../../utils/MessageUtil";


let followUpAppEndpoints = {
    getPagedFollowUps: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/followUp/getPagedFollowUps',
        type: 'POST'
    },

    getFollowUpList: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/followUp/getFollowUpList',
        type: 'POST'
    },

    getFollowUpByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/followUp/getFollowUpByID',
        type: 'GET'
    },

    saveOrUpdateFollowUp: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_SAVE_UPDATE
        },
        url: '/api/followUp/saveOrUpdateFollowUP',
        type: 'POST'
    },

    saveReOrderedList: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
        },
        url: '/api/followUp/updateFollowUpOrder',
        type: 'POST'
    },
};

export default followUpAppEndpoints;
