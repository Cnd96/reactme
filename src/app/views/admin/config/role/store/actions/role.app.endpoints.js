import {DEFAULT_SAVE_UPDATE} from "../../../../../../../utils/MessageUtil";

let rolesAppEndpoints = {
    getPagedRoles: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/role/getPagedRoles',
        type: 'POST'
    },

    getRoleUpdateDTO: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/role/getRoleDTO',
        type: 'GET'
    },

    getSystemPrivileges: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/role/getSystemPrivileges',
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

    saveOrUpdateRole: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_SAVE_UPDATE
        },
        url: '/api/role/saveOrUpdateRole',
        type: 'POST'
    },
};

export default rolesAppEndpoints;
