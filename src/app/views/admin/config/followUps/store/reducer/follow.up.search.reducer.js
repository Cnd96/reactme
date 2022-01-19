import Constants from "../../../../../../../utils/Constants";
import * as Actions from '../action/index';
import * as _ from 'lodash';

const initialState = {
    pageInfo: {
        page: 1,
        rows: Constants.GRID_RESULT_ROW_DEFAULT_SIZE,
    },
    searchData: {},
    pagedFollowUps: {},
    followUpList: [],
    reOrderedFollowUpList: [],
};

const followUpSearchReducer = function (state = initialState, action) {

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

        case Actions.GET_PAGED_FOLLOW_UPS:
            return {
                ...state,
                pagedFollowUps: {...action.payload}
            };

        case Actions.GET_FOLLOW_UP_LIST:
            let sortedList = action.payload ? action.payload : [];
            sortedList = _.sortBy(sortedList, ['displayOrder']);
            return {
                ...state,
                followUpList: sortedList,
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

export default followUpSearchReducer;
