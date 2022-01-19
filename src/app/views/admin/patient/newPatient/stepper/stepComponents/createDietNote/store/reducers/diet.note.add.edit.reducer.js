import {GET_DIET_NOTE, ON_ADD_EDIT_FORM_CHANGE, ON_SAVE_DIET_NOTE, REMOVE_DIET_NOTE_DATA} from "../actions";

const initialState = {
    formData: {},
    dietNote: {},
};

const dietNoteAddEditReducer = function (state = initialState, action) {

    switch (action.type) {
        case ON_SAVE_DIET_NOTE : {
            return {
                ...state,
                dietNote: action.payload
            }
        }

        case GET_DIET_NOTE : {
            return {
                ...state,
                dietNote: action.payload
            }
        }

        case ON_ADD_EDIT_FORM_CHANGE : {
            return {
                ...state,
                formData: action.payload
            }
        }

        case REMOVE_DIET_NOTE_DATA : {
            return {
                ...state,
                dietNote: {},
                formData: {}
            }
        }

        default :
            return state;
    }
};

export default dietNoteAddEditReducer;
