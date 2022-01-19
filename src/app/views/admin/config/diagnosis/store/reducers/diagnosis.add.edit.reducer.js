import {GET_DIAGNOSIS, ON_ADD_EDIT_FORM_CHANGE, ON_RESET, ON_SAVE_UPDATE} from "../action/diagnosis.add.edit.action";


const initialState = {
    formData: {},
    diagnosis: {}
};

const diagnosisAddEditReducer = function (state = initialState, action) {

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
                diagnosis: action.payload
            }
        }

        case GET_DIAGNOSIS : {
            return {
                ...state,
                diagnosis: action.payload
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

export default diagnosisAddEditReducer;