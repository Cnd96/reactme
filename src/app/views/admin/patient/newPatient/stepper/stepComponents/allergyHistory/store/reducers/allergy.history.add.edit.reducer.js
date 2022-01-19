import {
    GET_ALLERGY_HISTORY,
    ON_ADD_EDIT_FORM_CHANGE,
    ON_RESET_FORM,
    ON_SAVE_ALLERGY_HISTORY,
    ON_SET_ALLERGY_HISTORY_FORM
} from "../actions/allergy.history.add.edit.action";

const initialState = {
    formData: {},
    allergyHistory: {},
    updatingAllergyHistoryID: ''
};

const allergyHistoryAddEditReducer = function (state = initialState, action) {

    switch (action.type) {

        case GET_ALLERGY_HISTORY:
        case ON_SAVE_ALLERGY_HISTORY : {
            return {
                ...state,
                allergyHistory: action.payload
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

        case ON_SET_ALLERGY_HISTORY_FORM : {
            return {
                ...state,
                allergyHistory: action.payload,
                updatingAllergyHistoryID: action.payload.allergyHistoryID ? action.payload.allergyHistoryID : ''
            }
        }

        default :
            return state;
    }
};

export default allergyHistoryAddEditReducer;
