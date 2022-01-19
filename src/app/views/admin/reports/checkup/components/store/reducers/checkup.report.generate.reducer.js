import {
    DOWNLOAD_CSV_FILE,
    GET_CSV_FILE_URL,
    ON_RESET_SEARCH_DATA,
    SET_INCLUDE_DIETARY_HABITS,
    SET_INCLUDE_FAMILY_HISTORY,
    SET_INCLUDE_INSTRUCTION,
    SET_INCLUDE_PHYSICAL_ACTIVITIES,
    SET_INCLUDE_SOCIAL_HABITS,
    SET_SEARCH_DATA
} from "../actions";

const initialState = {
    responseFileUrl: {},
    downloadFile: {},
    searchData: {},
    includeSocialHabitData: true,
    includeFamilyHistory: true,
    includeDietaryHabits: true,
    includePhysicalActivities: true,
    includeInstruction: true
};

const checkupReportAppReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_CSV_FILE_URL:
            return {
                ...state,
                responseFileUrl: action.payload
            };

        case DOWNLOAD_CSV_FILE: {
            return {
                ...state,
                downloadFile: action.payload
            }
        }

        case SET_SEARCH_DATA:
            return {
                ...state,
                searchData: {...action.payload}
            };

        case SET_INCLUDE_SOCIAL_HABITS :
            return {
                ...state,
                includeSocialHabitData: action.payload
            };

        case SET_INCLUDE_FAMILY_HISTORY :
            return {
                ...state,
                includeFamilyHistory: action.payload
            };

        case SET_INCLUDE_DIETARY_HABITS :
            return {
                ...state,
                includeDietaryHabits: action.payload
            };

        case SET_INCLUDE_PHYSICAL_ACTIVITIES :
            return {
                ...state,
                includePhysicalActivities: action.payload
            };

        case SET_INCLUDE_INSTRUCTION:
            return {
                ...state,
                includeInstruction: action.payload
            };

        case ON_RESET_SEARCH_DATA: {
            return {
                ...state,
                ...initialState
            }
        }

        default:
            return state;
    }
};

export default checkupReportAppReducer;
