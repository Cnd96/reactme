let selectPhysicalActivitiesAppEndpoints = {

    getPhysicalActivityCategories: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/physicalActivity/getPhysicalActivityCategories',
        type: 'GET'
    },

    saveOrUpdateCheckupWithPhysicalActivities: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
        },
        url: '/api/checkup/saveOrUpdateCheckupWithPhysicalActivities',
        type: 'POST'
    }
};


export default selectPhysicalActivitiesAppEndpoints;