import {
    GET_ALL_PRIVILEGES,
    GET_ROLE,
    ON_ADD_EDIT_FORM_CHANGE,
    ON_PRIVILEGE_CHANGE,
    ON_RESET,
    ON_SAVE_UPDATE
} from "../actions";

const initialState = {
    role: {},
    allPrivileges: {},
    formData: {},
    selectedPrivileges: []
};

const roleAddEditReducer = function (state = initialState, action) {

    switch (action.type) {
        case GET_ALL_PRIVILEGES : {
            return {
                ...state,
                allPrivileges: action.payload
            };
        }

        case GET_ROLE : {
            return {
                ...state,
                role: action.payload
            };
        }

        case ON_ADD_EDIT_FORM_CHANGE : {
            return {
                ...state,
                formData: action.payload
            };
        }

        case ON_PRIVILEGE_CHANGE : {
            return {
                ...state,
                selectedPrivileges: action.payload
            };
        }

        case ON_SAVE_UPDATE : {
            return {
                ...state,
                role: action.payload
            }
        }

        case ON_RESET : {
            return {
                ...state,
                ...initialState
            }
        }

        default:
            return state;
    }
};

export default roleAddEditReducer;
