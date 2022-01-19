import {DEFAULT_SAVE_UPDATE} from "../../../../../../../utils/MessageUtil";


let dietaryHabitAppEndpoints = {
    getPagedDietaryHabits: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/dietary/getPagedDietaryHabits',
        type: 'POST'
    },


    getDietaryHabitByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/dietary/getDietaryHabitByID',
        type: 'GET'
    },

    saveOrUpdateDietaryHabit: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_SAVE_UPDATE
        },
        url: '/api/dietary/saveOrUpdateDietaryHabit',
        type: 'POST'
    },

    getDietaryCategories: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/dietary/getDietaryCategories',
        type: 'GET'
    },


};

export default dietaryHabitAppEndpoints;