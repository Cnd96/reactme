import dataService from "../../../../../../../../../services/dataService";
import selectFitToWorkEndpoints from "./select.fit.to.work.endpoints";

export const GET_FIT_TO_WORK_LIST = '[FIT TO WORK SELECT] GET_FIT_TO_WORK_LIST';
export const ADD_FIT_TO_WORK_ID = '[FIT TO WORK SELECT] ADD_FIT_TO_WORK_ID';
export const REMOVE_FIT_TO_WORK_ID = '[FIT TO WORK SELECT] REMOVE_FIT_TO_WORK_ID';
export const SET_CURRENT_SELECTED_ID = '[FIT TO WORK SELECT] SET_CURRENT_SELECTED_ID';
export const ON_SAVE_CHECKUP_FIT_TO_WORK = '[FIT TO WORK SELECT] ON_SAVE_CHECKUP_FIT_TO_WORK';

export function getFitToWorkList(searchRQ) {
    const request = dataService.post(selectFitToWorkEndpoints.getFitToWorkList, searchRQ);
    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_FIT_TO_WORK_LIST,
                payload: response.data.result
            })
        );
    }
}

export function onAddFitToWorkID(data) {
    return (dispatch, getState) => {
        dispatch({
            type: ADD_FIT_TO_WORK_ID,
            payload: data
        })
    };
}

export function onRemoveFitToWorkID(data) {
    return (dispatch, getState) => {
        dispatch({
            type: REMOVE_FIT_TO_WORK_ID,
            payload: data
        })
    };
}

export function setCurrentFitToWorkID(data) {
    return (dispatch, getState) => {
        dispatch({
            type: SET_CURRENT_SELECTED_ID,
            payload: data
        })
    };
}

export function saveOrUpdateCheckupWithFitToWork(data) {
    const request = dataService.post(selectFitToWorkEndpoints.saveOrUpdateCheckupWithFitToWork, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: ON_SAVE_CHECKUP_FIT_TO_WORK,
                    payload: response.data.result
                });
            }
        );
    };
}