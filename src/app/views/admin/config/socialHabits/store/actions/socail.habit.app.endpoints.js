import {DEFAULT_SAVE_UPDATE} from "../../../../../../../utils/MessageUtil";

let socialHabitAppEndpoints = {
    getPagedSocialHabits: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/socialHabit/getPagedSocialHabits',
        type: 'POST'
    },

    getSocialHabitCategoryList: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/socialHabit/getSocialHabitCategoryList',
        type: 'GET'
    },

    saveOrUpdateSocialHabit: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_SAVE_UPDATE
        },
        url: '/api/socialHabit/saveOrUpdateSocialHabit',
        type: 'POST'
    },

    getSocialHabitDTOByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/socialHabit/getSocialHabitDTOByID',
        type: 'GET'
    },

    saveOrUpdateRole: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_SAVE_UPDATE
        },
        url: '/api/socialHabit/saveOrUpdateRole',
        type: 'POST'
    },
};

export default socialHabitAppEndpoints;