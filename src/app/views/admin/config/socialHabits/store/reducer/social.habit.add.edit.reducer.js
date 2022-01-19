import {
    GET_SOCIAL_HABIT,
    GET_SOCIAL_HABIT_CATEGORIES,
    ON_ADD_EDIT_FORM_CHANGE,
    ON_RESET_FORM_DATA,
    ON_RESET_SOCIAL_HABIT,
    ON_SAVE_UPDATE_SOCIAL_HABIT,
} from "../actions";

const initialState = {
    socialHabit: {},
    socialHabitFormData: {},
    socialHabitCategories: [],
};

const socialHabitAddEditReducer = function (state = initialState, action) {

    switch (action.type) {

        case GET_SOCIAL_HABIT_CATEGORIES : {
            return {
                ...state,
                socialHabitCategories: action.payload
            };
        }

        case ON_ADD_EDIT_FORM_CHANGE : {
            return {
                ...state,
                socialHabitFormData: action.payload
            };
        }

        case ON_SAVE_UPDATE_SOCIAL_HABIT : {
            return {
                ...state,
                socialHabit: action.payload
            }

        }

        case GET_SOCIAL_HABIT : {
            return {
                ...state,
                socialHabit: action.payload
            }
        }

        case ON_RESET_FORM_DATA : {
            return {
                ...state,
                socialHabitFormData: {},
            }
        }

        case ON_RESET_SOCIAL_HABIT : {
            return {
                ...state,
                socialHabitFormData: {},
                socialHabit: {},
            }
        }

        default:
            return state;
    }
};

export default socialHabitAddEditReducer;
