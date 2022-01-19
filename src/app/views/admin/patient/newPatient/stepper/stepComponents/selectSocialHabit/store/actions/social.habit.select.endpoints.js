let socialHabitSelectAppEndpoints = {

    getSocialHabitCategories: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/socialHabit/getSocialHabitCategories',
        type: 'GET'
    },

    saveOrUpdatePatientWithSocialHabits: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
        },
        url: '/api/patient/saveOrUpdatePatientWithSocialHabits',
        type: 'POST'
    }
};


export default socialHabitSelectAppEndpoints;