import {GET_FIT_TO_WORK, ON_ADD_EDIT_FORM_CHANGE, ON_FORM_RESET, ON_RESET, ON_SAVE_UPDATE} from "../actions";

const initialState = {
    formData: {},
    fitToWork: {}
};

const fitToWorkAddEditReducer = function (state = initialState, action) {

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
                fitToWork: action.payload
            }
        }

        case GET_FIT_TO_WORK : {
            return {
                ...state,
                fitToWork: action.payload
            }
        }

        case ON_FORM_RESET: {
            return {
                ...state,
                formData: {}
            }
        }

        case ON_RESET : {
            return {
                ...state,
                ...initialState
            }
        }

        default :
            return state;

    }

};

export default fitToWorkAddEditReducer;