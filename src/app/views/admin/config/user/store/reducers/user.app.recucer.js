import * as Actions from '../actions';
import Constants from "../../../../../../../utils/Constants";

const initialState = {
    pageInfo: {
        page: 1,
        rows: Constants.GRID_RESULT_ROW_DEFAULT_SIZE,
    },
    searchData: {},
    pagedUsers: {}
};

const userAppReducer = function (state = initialState, action) {
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

        case Actions.GET_PAGED_USER:
            return {
                ...state,
                pagedUsers: {...action.payload}
            };
        case Actions.ON_RESET_SEARCH_DATA: {
            return {
                ...state,
                pageInfo: {
                    page: 1,
                    rows: Constants.GRID_RESULT_ROW_DEFAULT_SIZE,
                },
                searchData: {}
            }
        }
        default:
            return state;
    }
};

export default userAppReducer;
