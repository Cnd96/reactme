import {DEFAULT_SAVE_UPDATE} from "../../../../../../../utils/MessageUtil";


let medicineAppEndpoints = {
    getPagedMedicine: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/medicine/getPagedMedicine',
        type: 'POST'
    },

    getMedicineDTOByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/medicine/getMedicineDTOByID',
        type: 'GET'
    },

    saveOrUpdateMedicine: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_SAVE_UPDATE
        },
        url: '/api/medicine/saveOrUpdateMedicine',
        type: 'POST'
    },
};

export default medicineAppEndpoints;
