import {
    GET_CHECKUP_HISTORY_FULL_DATA,
    GET_CHECKUP_HISTORY_GRAPH_DATA,
    ON_RESET_CHECKUP_HISTORY,
} from "../actions/checkup.history.action";

const initialState = {
    checkupHistoryData: {},
    testTypes: [],

    checkupHistoryFullData: {},
    testAllTypes: [],

};

const checkupHistoryReducer = function (state = initialState, action) {

    switch (action.type) {
        case GET_CHECKUP_HISTORY_GRAPH_DATA : {

            const testTypes = Object.keys(action.payload.checkHistoryResultMap);

            return {
                ...state,
                checkupHistoryData: action.payload.checkHistoryResultMap,
                testTypes: testTypes
            }
        }

        case GET_CHECKUP_HISTORY_FULL_DATA : {
            const testTypes = Object.keys(action.payload.checkHistoryResultMap);
            return {
                ...state,
                checkupHistoryFullData: action.payload.checkHistoryResultMap,
                testAllTypes: _.sortedUniq(testTypes)
            }
        }

        case ON_RESET_CHECKUP_HISTORY : {
            return {
                ...state,
                formData: {}
            }
        }

        default :
            return state;
    }

};

export default checkupHistoryReducer;