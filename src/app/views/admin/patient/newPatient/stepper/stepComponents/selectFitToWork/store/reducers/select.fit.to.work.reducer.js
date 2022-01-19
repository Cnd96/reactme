import {
    ADD_FIT_TO_WORK_ID,
    GET_FIT_TO_WORK_LIST,
    REMOVE_FIT_TO_WORK_ID,
    SET_CURRENT_SELECTED_ID
} from "../actions/select.fit.to.work.actions";

const initialState = {
    fitToWorks: [],
    selectedFitToWorkID: '',
};

const fitToWorkSelectReducer = function (state = initialState, action) {

    switch (action.type) {

        case GET_FIT_TO_WORK_LIST: {
            return {
                ...state,
                fitToWorks: action.payload,
            }
        }

        case ADD_FIT_TO_WORK_ID : {

            return {
                ...state,
                selectedFitToWorkID: action.payload
            }

        }

        case REMOVE_FIT_TO_WORK_ID : {
            return {
                ...state,
                selectedFitToWorkID: null
            }
        }

        case SET_CURRENT_SELECTED_ID : {
            return {
                ...state,
                selectedFitToWorkID: action.payload
            }
        }

        default :
            return state;
    }
};

export default fitToWorkSelectReducer;