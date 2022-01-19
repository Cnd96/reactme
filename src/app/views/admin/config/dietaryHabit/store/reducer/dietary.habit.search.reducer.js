import Constants from "../../../../../../../utils/Constants";
import * as Actions from '../../store/action/index';

const initialState = {
    pageInfo: {
        page: 1,
        rows: Constants.GRID_RESULT_ROW_DEFAULT_SIZE,
    },
    searchData: {},
    pagedDietaryHabit: {},
    dietaryHabitCategories: []
};

const dietaryHabitSearchReducer = function (state = initialState, action) {

    switch (action.type) {
        case Actions.SET_PAGE_INFO:
            return {
                ...state,
                pageInfo: {...action.payload}
            };

        case Actions.SET_SEARCH_DATA:
            return {
                ...state,
                searchData: {...action.payload}
            };


        case Actions.GET_PAGED_DIETARY_HABIT:
            return {
                ...state,
                pagedDietaryHabit: action.payload,
            };

        case Actions.ON_RESET_SEARCH_DATA:
            return {
                ...state,
                pageInfo: {
                    page: 1,
                    rows: Constants.GRID_RESULT_ROW_DEFAULT_SIZE,
                },
                searchData: {}
            };

        case Actions.GET_DIETARY_HABIT_CATEGORIES: {
            return {
                ...state,
                dietaryHabitCategories: action.payload ? action.payload : []
            }
        }

        default:
            return state;
    }

};

export default dietaryHabitSearchReducer;
