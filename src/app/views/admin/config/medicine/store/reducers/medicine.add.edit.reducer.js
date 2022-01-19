import {
    GET_MEDICINE,
    ON_ADD_EDIT_FORM_CHANGE,
    ON_FORM_RESET,
    ON_RESET,
    ON_SAVE_UPDATE
} from "../action/medicine.add.edit.action";

const initialState = {
    formData: {},
    medicine: {}
};

const medicineAddEditReducer = function (state = initialState, action) {

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
                medicine: action.payload
            }
        }

        case GET_MEDICINE : {
            return {
                ...state,
                medicine: action.payload
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

export default medicineAddEditReducer;