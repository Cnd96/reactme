import {
    GET_MEDICAL_DISEASE,
    ON_ADD_EDIT_FORM_CHANGE,
    ON_RESET,
    ON_SAVE_UPDATE
} from "../action/medical.disease.app.add.edit.action";

const initialState = {
    formData: {},
    medicalDisease: {}
};

const medicalDiseaseAddEditReducer = function (state = initialState, action) {

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
                medicalDisease: action.payload
            }
        }

        case GET_MEDICAL_DISEASE : {
            return {
                ...state,
                medicalDisease: action.payload
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

export default medicalDiseaseAddEditReducer;