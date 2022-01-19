let patientCheckupSearchAppEndpoints = {

    getPagedCheckups: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/checkup/getPagedCheckups',
        type: 'POST'
    }
};

export default patientCheckupSearchAppEndpoints;
