import {
    GET_DIETARY_HABIT,
    GET_DIETARY_HABIT_CATEGORIES,
    ON_ADD_EDIT_FORM_CHANGE,
    ON_FORM_RESET,
    ON_RESET,
    ON_SAVE_UPDATE
} from "../action/index";

const initialState = {
    dietaryHabit: {},
    formData: {},
    dietaryHabitCategories: []
};

const dietaryHabitAddEditReducer = function (state = initialState, action) {

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
                dietaryHabit: action.payload
            }
        }

        case GET_DIETARY_HABIT : {
            return {
                ...state,
                dietaryHabit: action.payload
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

        case GET_DIETARY_HABIT_CATEGORIES : {
            return {
                ...state,
                dietaryHabitCategories: action.payload ? action.payload : []
            }
        }

        default :
            return state;

    }

};

export default dietaryHabitAddEditReducer;