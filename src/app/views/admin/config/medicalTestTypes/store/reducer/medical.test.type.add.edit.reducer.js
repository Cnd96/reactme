import {
    GET_MEDICAL_TEST_TYPE,
    ON_ADD_EDIT_FORM_CHANGE,
    ON_FORM_RESET,
    ON_RESET,
    ON_SAVE_UPDATE
} from "../actions/medical.test.type.add.edit.action";

const initialState = {
    formData: {},
    medicalTestType: {}
};

const medicalTestTypeAddEditReducer = function (state = initialState, action) {

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
                medicalTestType: action.payload
            }
        }

        case GET_MEDICAL_TEST_TYPE : {
            return {
                ...state,
                medicalTestType: action.payload
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

export default medicalTestTypeAddEditReducer;