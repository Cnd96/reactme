import {
    CLEAR_STORE,
    GET_CHECKUP,
    GET_CHECKUP_INSTRUCTION_NOTE, GET_DOCTOR_DETAILS,
    GET_HOSPITAL_DETAILS,
    GET_PATIENT,
    GET_PRESCRIPTION,
    ON_SELECT_OTHER_LETTERS
} from "../actions/select.other.letter.action";

const initialState = {
    letterType: {},
    notes: {},
    patient: {},
    checkup: {},
    prescription: {},
    hospital: {},
    doctor:{}
};

const selectOtherLetterReducer = function (state = initialState, action) {

    switch (action.type) {

        case ON_SELECT_OTHER_LETTERS : {
            return {
                ...state,
                letterType: action.payload
            }
        }

        case GET_CHECKUP_INSTRUCTION_NOTE : {

            return {
                ...state,
                notes: action.payload
            }
        }


        case GET_PATIENT : {
            return {
                ...state,
                patient: action.payload
            }
        }

        case CLEAR_STORE : {
            return {
                ...state,
                ...initialState
            }
        }

        case GET_CHECKUP : {
            return {
                ...state,
                checkup: action.payload
            }
        }

        case GET_PRESCRIPTION: {
            return {
                ...state,
                prescription: action.payload
            }
        }

        case GET_HOSPITAL_DETAILS : {
            return {
                ...state,
                hospital: action.payload
            }
        }

        case GET_DOCTOR_DETAILS : {
            return {
                ...state,
                doctor: action.payload
            }
        }

        default :
            return state;
    }
};

export default selectOtherLetterReducer;