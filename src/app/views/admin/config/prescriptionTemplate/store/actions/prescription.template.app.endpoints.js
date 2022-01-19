import {DEFAULT_SAVE_UPDATE} from "../../../../../../../utils/MessageUtil";


let prescriptionTemplateAppEndpoints = {
    getPagedPrescriptionTemplate: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/prescriptionTemplate/getPagedPrescriptionTemplate',
        type: 'POST'
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

    saveOrUpdatePrescriptionTemplate: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_SAVE_UPDATE
        },
        url: '/api/prescriptionTemplate/saveOrUpdatePrescriptionTemplate',
        type: 'POST'
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

export default prescriptionTemplateAppEndpoints;
