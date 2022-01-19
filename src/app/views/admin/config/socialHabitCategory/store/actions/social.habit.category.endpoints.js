import {DEFAULT_SAVE_UPDATE} from "../../../../../../../utils/MessageUtil";


let socialHabitCategoryAppEndpoints = {
    getPagedSocialHabitCategory: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/socialHabit/getPagedSocialHabitCategory',
        type: 'POST'
    },


    getSocialHabitCategoryByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/socialHabit/getSocialHabitCategoryByID',
        type: 'GET'
    },

    saveOrUpdateSocialHabitCategory: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_SAVE_UPDATE
        },
        url: '/api/socialHabit/saveOrUpdateSocialHabitCategory',
        type: 'POST'
    },

};

export default socialHabitCategoryAppEndpoints;
