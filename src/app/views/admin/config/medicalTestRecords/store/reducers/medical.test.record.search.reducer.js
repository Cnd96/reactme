import Constants from "../../../../../../../utils/Constants";
import {
    GET_PAGED_MEDICAL_TEST_RECORD,
    ON_RESET_SEARCH_DATA,
    SET_PAGE_INFO,
    SET_SEARCH_DATA,
    GET_MEDICAL_TEST_TYPES
} from "../actions/medical.test.record.search.action";

const initialState = {
    pageInfo: {
        page: 1,
        rows: Constants.GRID_RESULT_ROW_DEFAULT_SIZE,
    },
    searchData: {},
    pagedMedicalTestRecords: {},
    medicalTestTypes: []
};

const medicalTestRecordSearchReducer = function (state = initialState, action) {

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

        case GET_PAGED_MEDICAL_TEST_RECORD:
            return {
                ...state,
                pagedMedicalTestRecords: {...action.payload}
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
        case GET_MEDICAL_TEST_TYPES : {
            return {
                ...state,
                medicalTestTypes: action.payload
            }
        }
        default:
            return state;
    }

};

export default medicalTestRecordSearchReducer;
