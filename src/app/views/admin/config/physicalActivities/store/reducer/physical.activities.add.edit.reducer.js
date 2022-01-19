import {
    GET_PHYSICAL_ACTIVITY,
    GET_PHYSICAL_ACTIVITY_CATEGORIES,
    ON_ADD_EDIT_FORM_CHANGE,
    ON_FORM_RESET,
    ON_RESET,
    ON_SAVE_UPDATE
} from "../action/index";

const initialState = {
    physicalActivity: {},
    formData: {},
    physicalActivityCategories: []
};

const physicalActivityAddEditReducer = function (state = initialState, action) {

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
                physicalActivity: action.payload
            }
        }

        case GET_PHYSICAL_ACTIVITY : {
            return {
                ...state,
                physicalActivity: action.payload
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

        case GET_PHYSICAL_ACTIVITY_CATEGORIES : {
            return {
                ...state,
                physicalActivityCategories: action.payload ? action.payload : []
            }
        }

        default :
            return state;

    }

};

export default physicalActivityAddEditReducer;