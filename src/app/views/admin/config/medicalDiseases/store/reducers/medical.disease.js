import Constants from "../../../../../../../utils/Constants";
import * as Actions from '../action/medical.disease.search.action';

const initialState = {
    pageInfo: {
        page: 1,
        rows: Constants.GRID_RESULT_ROW_DEFAULT_SIZE,
    },
    searchData: {},
    pagedMedicalDisease: {}
};

const medicalDiseaseAppReducer = function (state = initialState, action) {

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

        case Actions.GET_PAGED_MEDICAL_DISEASES:
            return {
                ...state,
                pagedMedicalDisease: {...action.payload}
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

export default medicalDiseaseAppReducer;
