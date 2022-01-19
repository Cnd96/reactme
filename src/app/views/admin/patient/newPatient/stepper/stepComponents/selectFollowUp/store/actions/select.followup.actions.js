import dataService from "../../../../../../../../../services/dataService";
import selectFollowUpEndpoints from "./select.follow.up.endpoints";

export const GET_FOLLOW_UP_LIST = '[FOLLOWUP SELECT] GET_FOLLOW_UP_LIST';
export const ADD_FOLLOW_UP_ID = '[FOLLOWUP SELECT] ADD_FOLLOW_UP_ID';
export const REMOVE_FOLLOW_UP_ID = '[FOLLOWUP SELECT] REMOVE_FOLLOW_UP_ID';
export const SET_CURRENT_SELECTED_ID = '[FOLLOWUP SELECT] SET_CURRENT_SELECTED_ID';
export const ON_SAVE_CHECKUP_FOLLOW_UP = '[FOLLOWUP SELECT] ON_SAVE_CHECKUP_FOLLOW_UP';


export function getFollowUpList(searchRQ) {
    const request = dataService.post(selectFollowUpEndpoints.getFollowUpList, searchRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_FOLLOW_UP_LIST,
                payload: response.data.result
            })
        );
    }
}

export function onAddFollowUpID(data) {
    return (dispatch, getState) => {
        dispatch({
            type: ADD_FOLLOW_UP_ID,
            payload: data
        })
    };
}

export function setCurrentFollowUpIDs(data) {
    return (dispatch, getState) => {
        dispatch({
            type: SET_CURRENT_SELECTED_ID,
            payload: data
        })
    };
}

export function onRemoveFollowUpID(data) {
    return (dispatch, getState) => {
        dispatch({
            type: REMOVE_FOLLOW_UP_ID,
            payload: data
        })
    };
}

export function saveOrUpdateCheckupWithFollowUp(data) {
    const request = dataService.post(selectFollowUpEndpoints.saveOrUpdateCheckupWithFollowUp, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: ON_SAVE_CHECKUP_FOLLOW_UP,
                    payload: response.data.result
                });
            }
        );
    };
}


