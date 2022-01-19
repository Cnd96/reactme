import Constants from "../../../../../../../utils/Constants";
import {
    GET_PAGED_MEDICAL_TEST_TYPE,
    ON_RESET_SEARCH_DATA,
    SET_PAGE_INFO,
    SET_SEARCH_DATA
} from "../actions/medical.test.type.search.action";

const initialState = {
    pageInfo: {
        page: 1,
        rows: Constants.GRID_RESULT_ROW_DEFAULT_SIZE,
    },
    searchData: {},
    pagedMedicalTestTypes: {}
};

const medicalTestTypeSearchReducer = function (state = initialState, action) {

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

        case GET_PAGED_MEDICAL_TEST_TYPE:
            return {
                ...state,
                pagedMedicalTestTypes: {...action.payload}
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

export default medicalTestTypeSearchReducer;
