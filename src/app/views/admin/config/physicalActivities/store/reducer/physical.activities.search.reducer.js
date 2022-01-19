import Constants from "../../../../../../../utils/Constants";
import * as Actions from '../../store/action/index';

const initialState = {
    pageInfo: {
        page: 1,
        rows: Constants.GRID_RESULT_ROW_DEFAULT_SIZE,
    },
    searchData: {},
    pagedPhysicalActivities: {},
    physicalActivityCategories: []
};

const physicalActivitySearchReducer = function (state = initialState, action) {

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


        case Actions.GET_PAGED_PHYSICAL_ACTIVITY:
            return {
                ...state,
                pagedPhysicalActivities: action.payload,
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

        case Actions.GET_PHYSICAL_ACTIVITY_CATEGORIES: {
            return {
                ...state,
                physicalActivityCategories: action.payload ? action.payload : []
            }
        }

        default:
            return state;
    }

};

export default physicalActivitySearchReducer;
