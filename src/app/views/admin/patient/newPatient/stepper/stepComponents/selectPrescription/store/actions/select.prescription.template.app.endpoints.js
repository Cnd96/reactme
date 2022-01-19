let selectPrescriptionTemplateAppEndpoints = {
    getPrescriptionTemplateList: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/prescriptionTemplate/getPrescriptionTemplateList',
        type: 'GET'
    },

    getPrescriptionTemplateByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/prescriptionTemplate/getPrescriptionTemplateByID',
        type: 'GET'
    },

    getPrescriptionByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/prescription/getPrescriptionByID',
        type: 'GET'
    },

    getDoseListOptions: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/prescriptionTemplate/getDoseListOptions',
        type: 'POST'
    },

    getMealTimeListOptions: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/prescriptionTemplate/getMealTimeListOptions',
        type: 'POST'
    },

    getFrequentListOptions: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/prescriptionTemplate/getFrequentListOptions',
        type: 'POST'
    },

    saveOrUpdateCheckupWithPrescription: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
        },
        url: '/api/checkup/saveOrUpdateCheckupWithPrescription',
        type: 'POST'
    },

    getMedicineListOptions: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/prescriptionTemplate/getMedicineListOptions',
        type: 'POST'
    },


};


export default selectPrescriptionTemplateAppEndpoints;