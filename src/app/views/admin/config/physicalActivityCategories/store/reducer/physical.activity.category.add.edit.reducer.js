import {
    GET_PHYSICAL_ACTIVITIES_CATEGORY,
    ON_ADD_EDIT_FORM_CHANGE,
    ON_FORM_RESET,
    ON_RESET,
    ON_SAVE_UPDATE
} from "../actions/index";

const initialState = {
    physicalActivityCategory: {},
    formData: {}
};

const physicalActivitiesCategoryAddEditReducer = function (state = initialState, action) {

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
                physicalActivityCategory: action.payload
            }
        }

        case GET_PHYSICAL_ACTIVITIES_CATEGORY : {
            return {
                ...state,
                physicalActivityCategory: action.payload
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

export default physicalActivitiesCategoryAddEditReducer;