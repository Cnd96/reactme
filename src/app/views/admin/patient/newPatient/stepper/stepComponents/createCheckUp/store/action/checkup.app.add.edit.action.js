import dataService from "../../../../../../../../../services/dataService";
import checkupAppEndpoints from "./checkup.app.endpoints";

export const ON_SAVE_UPDATE = '[CHECKUP ADD EDIT] ON_SAVE_UPDATE';
export const ON_ADD_EDIT_FORM_CHANGE = '[CHECKUP ADD EDIT] ON_ADD_EDIT_FORM_CHANGE';
export const ON_RESET = '[CHECKUP ADD EDIT] ON_RESET';
export const GET_CHECKUP = '[CHECKUP ADD EDIT] GET_CHECKUP';
export const ON_RESET_CHECKUP_DATA = '[CHECKUP ADD EDIT] ON_RESET_CHECKUP_DATA';

export function saveOrUpdateCheckup(data) {
    const request = dataService.post(checkupAppEndpoints.saveOrUpdateCheckup, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: ON_SAVE_UPDATE,
                    payload: response.data.result
                });
            }
        );
    };
}

export function onFormChange(data) {
    return (dispatch, getState) => {
        dispatch({
            type: ON_ADD_EDIT_FORM_CHANGE,
            payload: data
        })
    };
}

export function onSetCheckup(data) {
    return (dispatch, getState) => {
        return dispatch({
            type: GET_CHECKUP,
            payload: data
        })
    };
}

export function getCheckupDTOByID(checkupID) {

    let endpoint = Object.assign({}, checkupAppEndpoints.getCheckupDTOByID);
    endpoint.url = endpoint.url + '/' + checkupID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_CHECKUP,
                payload: response.data.result
            })
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

export function resetCheckupData() {
    return (dispatch, getState) => {
        dispatch({
            type: ON_RESET_CHECKUP_DATA,
            payload: {}
        })
    };
}
