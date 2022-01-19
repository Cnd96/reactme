import {GET_FITNESS_NOTE, ON_ADD_EDIT_FORM_CHANGE, ON_RESET_FITNESS_NOTE_DATA, ON_SAVE_FITNESS_NOTE} from "../actions";
import Constants from "../../../../../../../../../../utils/Constants";

const initialState = {
    formData: {},
    fitnessNote: {fitnessNote: '', status: Constants.STATUS_CONST.ACT},
};

const fitnessNoteAddEditReducer = function (state = initialState, action) {

    switch (action.type) {

        case GET_FITNESS_NOTE:
        case ON_SAVE_FITNESS_NOTE : {
            return {
                ...state,
                fitnessNote: action.payload
            }
        }

        case ON_ADD_EDIT_FORM_CHANGE : {
            return {
                ...state,
                formData: action.payload
            }
        }

        case ON_RESET_FITNESS_NOTE_DATA : {
            return {
                ...state,
                ...initialState
            }
        }

        default :
            return state;
    }
};

export default fitnessNoteAddEditReducer;