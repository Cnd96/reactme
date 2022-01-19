import {
    GET_SOCIAL_HABIT_CATEGORY,
    ON_ADD_EDIT_FORM_CHANGE,
    ON_FORM_RESET,
    ON_RESET,
    ON_SAVE_UPDATE
} from "../actions/index";

const initialState = {
    socialHabitCategory: {},
    formData: {}
};

const socialHabitCategoryAddEditReducer = function (state = initialState, action) {

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
                socialHabitCategory: action.payload
            }
        }

        case GET_SOCIAL_HABIT_CATEGORY : {
            return {
                ...state,
                socialHabitCategory: action.payload
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

export default socialHabitCategoryAddEditReducer;
