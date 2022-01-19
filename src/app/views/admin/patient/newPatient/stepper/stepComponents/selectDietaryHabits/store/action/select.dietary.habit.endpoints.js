let selectDietaryHabitAppEndpoints = {

    getDietaryCategories: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/dietary/getDietaryCategories',
        type: 'GET'
    },

    saveOrUpdateCheckupWithDietaryHabits: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
        },
        url: '/api/checkup/saveOrUpdateCheckupWithDietaryHabits',
        type: 'POST'
    }
};


export default selectDietaryHabitAppEndpoints;