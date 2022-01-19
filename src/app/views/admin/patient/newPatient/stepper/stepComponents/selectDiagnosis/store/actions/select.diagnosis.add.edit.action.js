import dataService from "../../../../../../../../../services/dataService";
import selectDiagnosisAppEndpoints from "./select.diagnosis.endpoints";

export const GET_DIAGNOSIS_LIST = '[DIAGNOSIS SELECT] GET_DIAGNOSIS_LIST';
export const REMOVE_DIAGNOSIS_ID = '[DIAGNOSIS SELECT] REMOVE_DIAGNOSIS_ID';
export const ADD_DIAGNOSIS_ID = '[DIAGNOSIS SELECT] ADD_DIAGNOSIS_ID';
export const ON_SAVE_CHECKUP_DIAGNOSIS = '[DIAGNOSIS SELECT] ON_SAVE_CHECKUP_DIAGNOSIS';
export const SET_CURRENT_SELECTED_IDS = '[DIAGNOSIS SELECT] SET_CURRENT_SELECTED_IDS';

export function getDiagnosisList(searchRQ) {
    const request = dataService.post(selectDiagnosisAppEndpoints.getDiagnosisList, searchRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_DIAGNOSIS_LIST,
                payload: response.data.result
            })
        );
    }
}

export function onAddDiagnosisID(data) {
    return (dispatch, getState) => {
        dispatch({
            type: ADD_DIAGNOSIS_ID,
            payload: data
        })
    };
}

export function setCurrentDiagnosisIDs(data) {
    return (dispatch, getState) => {
        dispatch({
            type: SET_CURRENT_SELECTED_IDS,
            payload: data
        })
    };
}

export function onRemoveDiagnosisID(data) {
    return (dispatch, getState) => {
        dispatch({
            type: REMOVE_DIAGNOSIS_ID,
            payload: data
        })
    };
}

export function saveOrUpdateCheckupWithDiagnosis(data) {
    const request = dataService.post(selectDiagnosisAppEndpoints.saveOrUpdateCheckupWithDiagnosis, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: ON_SAVE_CHECKUP_DIAGNOSIS,
                    payload: response.data.result
                });
            }
        );
    };
}


