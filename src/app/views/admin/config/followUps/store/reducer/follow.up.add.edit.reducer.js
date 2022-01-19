import {GET_FOLLOW_UP, ON_ADD_EDIT_FORM_CHANGE, ON_FORM_RESET, ON_RESET, ON_SAVE_UPDATE} from "../action/index";

const initialState = {
    formData: {},
    followUp: {}
};

const followUpAddEditReducer = function (state = initialState, action) {

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
                followUp: action.payload
            }
        }

        case GET_FOLLOW_UP : {
            return {
                ...state,
                followUp: action.payload
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

export default followUpAddEditReducer;