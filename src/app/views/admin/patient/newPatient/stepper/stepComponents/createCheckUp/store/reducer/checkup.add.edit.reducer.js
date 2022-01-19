import {
    GET_CHECKUP,
    ON_ADD_EDIT_FORM_CHANGE,
    ON_RESET,
    ON_RESET_CHECKUP_DATA,
    ON_SAVE_UPDATE
} from "../action/checkup.app.add.edit.action";

const initialState = {
    formData: {},
    checkup: {}
};

const checkupAddEditReducer = function (state = initialState, action) {

    switch (action.type) {
        case ON_ADD_EDIT_FORM_CHANGE : {
            return {
                ...state,
                formData: action.payload
            }
        }

        case ON_SAVE_UPDATE : {
            return {
                ...state,
                checkup: action.payload
            }
        }

        case GET_CHECKUP : {
            return {
                ...state,
                checkup: action.payload
            }
        }

        case ON_RESET_CHECKUP_DATA : {
            return {
                ...state,
                checkup: {},
                formData: {}
            }
        }

        case ON_RESET : {
            return {
                ...state,
                formData: {}
            }
        }

        default :
            return state;
    }

};

export default checkupAddEditReducer;