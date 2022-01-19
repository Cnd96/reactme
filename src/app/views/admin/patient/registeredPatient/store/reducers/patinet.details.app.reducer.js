import {GET_PAGED_CHECKUPS, GET_PATIENT, RESET_PATIENT} from "../actions/patient.details.app.actions";

const initialState = {
    patient: {},
    pagedCheckups: {}
};

const patientDetailsAppReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_PATIENT:
            return {
                ...state,
                patient: action.payload
            };

        case RESET_PATIENT:
            return {
                ...state,
                ...initialState
            };

        case GET_PAGED_CHECKUPS: {
            return {
                ...state,
                pagedCheckups: action.payload
            }
        }

        default:
            return state;
    }
};

export default patientDetailsAppReducer;
