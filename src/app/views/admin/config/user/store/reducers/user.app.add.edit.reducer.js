import {
    GET_ACTIVE_ROLES,
    GET_USER,
    ON_ADD_EDIT_FORM_CHANGE,
    ON_RESET,
    ON_SAVE_UPDATE_USER,
    SET_ROLE_CHANGE
} from "../actions";

const initialState = {

    user: {},
    formData: {},
    roles: [],
    selectedRolesList: [],
};

const userAddEditReducer = function (state = initialState, action) {

    switch (action.type) {
        case ON_ADD_EDIT_FORM_CHANGE:
            return {
                ...state,
                formData: action.payload
            };

        case ON_RESET:
            return {
                ...state,
                user: {},
                selectedRolesList: [],
                formData: {},

            };

        case ON_SAVE_UPDATE_USER:
        case GET_USER :
            return {
                ...state,
                user: action.payload,
                selectedRolesList: action.payload ? action.payload.roles : []
            };

        case GET_ACTIVE_ROLES:
            return {
                ...state,
                roles: action.payload
            };

        case SET_ROLE_CHANGE:
            return {
                ...state,
                selectedRolesList: action.payload
            };

        default:
            return state;


    }
};

export default userAddEditReducer;
