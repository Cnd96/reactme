import {
    GET_PATIENT,
    ON_ADD_EDIT_FORM_CHANGE,
    ON_RESET_FORM_DATA,
    ON_RESET_PATIENT_DATA,
    ON_SAVE_UPDATE
} from "../actions";

const initialState = {
    formData: {},
    patient: {}
};

const patientAddEditReducer = function (state = initialState, action) {

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
                patient: action.payload
            }
        }

        case GET_PATIENT : {
            return {
                ...state,
                patient: action.payload
            }
        }

        case ON_RESET_FORM_DATA : {
            return {
                ...state,
                formData: {}
            }
        }

        case ON_RESET_PATIENT_DATA : {
            return {
                ...state,
               ...initialState
            }
        }

        default :
            return state;

    }

};

export default patientAddEditReducer;