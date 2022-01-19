import Constants from "../../../../../../../utils/Constants";
import * as Actions from '../../store/actions/index';

const initialState = {
    pageInfo: {
        page: 1,
        rows: Constants.GRID_RESULT_ROW_DEFAULT_SIZE,
    },
    searchData: {},
    pagedSocialHabitCategories: {},
};

const socialHabitCategorySearchReducer = function (state = initialState, action) {

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


        case Actions.GET_PAGED_SOCIAL_HABIT_CATEGORY:
            return {
                ...state,
                pagedSocialHabitCategories: action.payload,
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

        default:
            return state;
    }

};

export default socialHabitCategorySearchReducer;
