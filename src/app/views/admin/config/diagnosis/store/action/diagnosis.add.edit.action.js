import dataService from "../../../../../../services/dataService";
import diagnosisAppEndpoints from "./diagnosis.app.endpoints";

export const ON_ADD_EDIT_FORM_CHANGE = '[DIAGNOSIS ADD EDIT] ON_ADD_EDIT_FORM_CHANGE';
export const ON_SAVE_UPDATE = '[DIAGNOSIS ADD EDIT] ON_SAVE_UPDATE';
export const GET_DIAGNOSIS = '[DIAGNOSIS ADD EDIT] GET_DIAGNOSIS';
export const ON_RESET = '[DIAGNOSIS ADD EDIT] ON_RESET';

export function onFormChange(data) {
    return (dispatch, getState) => {
        dispatch({
            type: ON_ADD_EDIT_FORM_CHANGE,
            payload: data
        })
    };
}


export function saveOrUpdateDiagnosis(data) {
    const request = dataService.post(diagnosisAppEndpoints.saveOrUpdateDiagnosis, data);

    return (dispatch, getState) => {
        request.then((response) => {
                dispatch({
                    type: ON_SAVE_UPDATE,
                    payload: response.data.result
                });
            }
        );
    };
}

export function reset() {
    return (dispatch, getState) => {
        dispatch({
            type: ON_RESET,
            payload: {}
        })
    };
}

export function getDiagnosisDTOByID(diagnosisID) {

    let endpoint = Object.assign({}, diagnosisAppEndpoints.getDiagnosisDTOByID);
    endpoint.url = endpoint.url + '/' + diagnosisID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_DIAGNOSIS,
                payload: response.data.result
            })
        );
    };

}



