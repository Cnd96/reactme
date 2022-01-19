import {DEFAULT_SAVE_UPDATE} from "../../../../../../../utils/MessageUtil";


let dietaryHabitCategoryAppEndpoints = {
    getPagedDietaryHabitCategory: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/dietary/getPagedDietaryHabitCategory',
        type: 'POST'
    },


    getDietaryHabitCategoryByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/dietary/getDietaryHabitCategoryByID',
        type: 'GET'
    },

    saveOrUpdateDietaryHabitCategory: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_SAVE_UPDATE
        },
        url: '/api/dietary/saveOrUpdateDietaryHabitCategory',
        type: 'POST'
    },

};

export default dietaryHabitCategoryAppEndpoints;
