import Constants from "../../../../../../../utils/Constants";
import {
    GET_PAGED_MEDICINE,
    ON_RESET_SEARCH_DATA,
    SET_PAGE_INFO,
    SET_SEARCH_DATA
} from "../action/medicine.search.action";

const initialState = {
    pageInfo: {
        page: 1,
        rows: Constants.GRID_RESULT_ROW_DEFAULT_SIZE,
    },
    searchData: {},
    pagedMedicine: {}
};

const medicineSearchReducer = function (state = initialState, action) {

    switch (action.type) {
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

        case GET_PAGED_MEDICINE:
            return {
                ...state,
                pagedMedicine: {...action.payload}
            };

        case ON_RESET_SEARCH_DATA:
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

export default medicineSearchReducer;
