import {
    GET_PATIENT_COMPLAIN,
    ON_ADD_EDIT_FORM_CHANGE,
    ON_RESET_FORM,
    ON_SAVE_PATIENT_COMPLAIN,
    ON_SET_PATIENT_COMPLAIN_TO_FORM
} from "../actions/patient.complain.add.edit.action";

const initialState = {
    formData: {},
    patientComplain: {},
    updatingPatientComplainID: ''
};

const patientComplainAddEditReducer = function (state = initialState, action) {

    switch (action.type) {

        case GET_PATIENT_COMPLAIN:
        case ON_SAVE_PATIENT_COMPLAIN : {
            return {
                ...state,
                patientComplain: action.payload
            }
        }

        case ON_ADD_EDIT_FORM_CHANGE: {

            return {
                ...state,
                formData: action.payload
            }
        }

        case ON_RESET_FORM: {
            return {
                ...state,
                ...initialState
            }
        }

        case ON_SET_PATIENT_COMPLAIN_TO_FORM : {
            return {
                ...state,
                patientComplain: action.payload,
                updatingPatientComplainID: action.payload.patientComplainID ? action.payload.patientComplainID : ''
            }
        }

        default :
            return state;
    }
};

export default patientComplainAddEditReducer;
