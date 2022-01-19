import {DEFAULT_PASSWORD_RESET, DEFAULT_SAVE_UPDATE} from "../../../../../../../utils/MessageUtil";

let userAppEndpoints = {
    getPagedUsers: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/user/getPagedUsers',
        type: 'POST'
    },

    getUserUpdateDTO: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/user/getUserDTO',
        type: 'GET'
    },

    getRoles: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/role/getRoles',
        type: 'GET'
    },

    addAdminUser: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_SAVE_UPDATE
        },
        url: '/api/user/addUser',
        type: 'POST'
    },

    updateAdminUser: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_SAVE_UPDATE
        },
        url: '/api/user/updateUser',
        type: 'POST'
    },

    resetUserPassword: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_PASSWORD_RESET
        },
        url: '/api/passwordReset/resetUserPassword',
        type: 'POST'
    },
};

export default userAppEndpoints;
