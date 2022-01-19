import {ADD_FOLLOW_UP_ID, GET_FOLLOW_UP_LIST, REMOVE_FOLLOW_UP_ID, SET_CURRENT_SELECTED_ID} from "../actions";

const initialState = {
    followUps: [],
    selectedFollowUpID: '',
};

const followUpSelectReducer = function (state = initialState, action) {

    switch (action.type) {
        case GET_FOLLOW_UP_LIST: {
            return {
                ...state,
                followUps: action.payload,
            }
        }

        case ADD_FOLLOW_UP_ID : {

            return {
                ...state,
                selectedFollowUpID: action.payload
            }

        }

        case REMOVE_FOLLOW_UP_ID : {
            return {
                ...state,
                selectedFollowUpID: null
            }
        }

        case SET_CURRENT_SELECTED_ID : {
            return {
                ...state,
                selectedFollowUpID: action.payload
            }
        }

        default :
            return state;
    }
};

export default followUpSelectReducer;