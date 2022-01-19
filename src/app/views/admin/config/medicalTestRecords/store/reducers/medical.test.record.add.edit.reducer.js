import {
    GET_MEDICAL_TEST_RECORD, GET_MEDICAL_TEST_TYPES,
    ON_ADD_EDIT_FORM_CHANGE,
    ON_FORM_RESET,
    ON_RESET,
    ON_SAVE_UPDATE
} from "../actions/medical.test.record.add.edit.action";

const initialState = {
    formData: {},
    medicalTestRecord: {},
    medicalTestTypes: []
};

const medicalTestRecordAddEditReducer = function (state = initialState, action) {

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
                medicalTestRecord: action.payload
            }
        }

        case GET_MEDICAL_TEST_RECORD : {
            return {
                ...state,
                medicalTestRecord: action.payload
            }
        }

        case GET_MEDICAL_TEST_TYPES : {
            return {
                ...state,
                medicalTestTypes: action.payload
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

export default medicalTestRecordAddEditReducer;