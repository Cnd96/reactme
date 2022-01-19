import {DEFAULT_SAVE_UPDATE} from "../../../../../../../utils/MessageUtil";


let physicalActivityAppEndpoints = {
    getPagedPhysicalActivities: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/physicalActivity/getPagedPhysicalActivities',
        type: 'POST'
    },


    getPhysicalActivityByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/physicalActivity/getPhysicalActivityByID',
        type: 'GET'
    },

    saveOrUpdatePhysicalActivity: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_SAVE_UPDATE
        },
        url: '/api/physicalActivity/saveOrUpdatePhysicalActivity',
        type: 'POST'
    },

    getPhysicalActivityCategories: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/physicalActivity/getPhysicalActivityCategories',
        type: 'GET'
    },


};

export default physicalActivityAppEndpoints;