import {DEFAULT_SAVE_UPDATE} from "../../../../../../../utils/MessageUtil";


let physicalActivityCategoryAppEndpoints = {
    getPagedPhysicalActivityCategory: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/physicalActivity/getPagedPhysicalActivityCategory',
        type: 'POST'
    },


    getPhysicalActivityCategoryByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/physicalActivity/getPhysicalActivityCategoryByID',
        type: 'GET'
    },

    saveOrUpdatePhysicalActivityCategory: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_SAVE_UPDATE
        },
        url: '/api/physicalActivity/saveOrUpdatePhysicalActivityCategory',
        type: 'POST'
    },

};

export default physicalActivityCategoryAppEndpoints;
