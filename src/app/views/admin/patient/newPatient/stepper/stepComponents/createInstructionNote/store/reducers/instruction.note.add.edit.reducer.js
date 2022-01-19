import {
    GET_INSTRUCTION_NOTE,
    ON_ADD_EDIT_FORM_CHANGE,
    ON_RESET_INSTRUCTION_NOTE_DATA,
    ON_SAVE_INSTRUCTION_NOTE
} from "../actions/instruction.note.add.edit.action";
import Constants from "../../../../../../../../../../utils/Constants";

const initialState = {
    formData: {},
    instructionNote: '',
    indication: '',
    procedure: '',
    postop: '',
    status: Constants.STATUS_CONST.ACT
};

const instructionNoteAddEditReducer = function (state = initialState, action) {

    switch (action.type) {

        case GET_INSTRUCTION_NOTE:
        case ON_SAVE_INSTRUCTION_NOTE : {
            console.log(action.payload);
            return {
                ...state,
                ...action.payload
            }
        }

        case ON_ADD_EDIT_FORM_CHANGE : {
            return {
                ...state,
                ...action.payload
            }
        }

        case ON_RESET_INSTRUCTION_NOTE_DATA : {
            return {
                ...state,
                ...initialState
            }
        }

        default :
            return state;
    }
};

export default instructionNoteAddEditReducer;