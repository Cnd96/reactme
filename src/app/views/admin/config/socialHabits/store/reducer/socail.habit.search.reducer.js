import {
    GET_PAGED_SOCIAL_HABITS,
    GET_SOCIAL_HABIT_CATEGORIES,
    ON_RESET,
    ON_SEARCH_FORM_RESET,
    SET_PAGE_INFO,
    SET_SEARCH_DATA
} from "../actions/social.habit.app.search.action";
import Constants from "../../../../../../../utils/Constants";

const initialState = {
    pageInfo: {
        page: 1,
        rows: Constants.GRID_RESULT_ROW_DEFAULT_SIZE,
    },
    searchData: {},
    pagedSocialHabits: {},
    socialHabitCategories: [],
};


const socialHabitSearchReducer = function (state = initialState, action) {

    switch (action.type) {

        case GET_PAGED_SOCIAL_HABITS : {
            return {
                ...state,
                pagedSocialHabits: action.payload
            };
        }

        case SET_PAGE_INFO:
            return {
                ...state,
                pageInfo: {...action.payload}
            };

        case SET_SEARCH_DATA:
            return {
                ...state,
                searchData: {...action.payload}
            };

        case GET_SOCIAL_HABIT_CATEGORIES : {
            return {
                ...state,
                socialHabitCategories: action.payload
            };
        }

        case ON_SEARCH_FORM_RESET: {
            return {
                ...state,
                pageInfo: initialState.pageInfo,
                searchData: {}
            };
        }

        case ON_RESET : {
            return {
                ...state,
                ...initialState
            }
        }

        default:
            return state;
    }
};

export default socialHabitSearchReducer;
