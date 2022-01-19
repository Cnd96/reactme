import dataService from "../../../../../../services/dataService";
import followUpAppEndpoints from "./follow.up.app.endpoints";

export const GET_FOLLOW_UP = '[FOLLOW UP ADD EDIT] GET_FOLLOW_UP';
export const ON_ADD_EDIT_FORM_CHANGE = '[FOLLOW UP ADD EDIT] ON_ADD_EDIT_FORM_CHANGE';
export const ON_SAVE_UPDATE = '[FOLLOW UP ADD EDIT] ON_SAVE_UPDATE';
export const ON_RESET = '[FOLLOW UP ADD EDIT] ON_RESET';
export const ON_FORM_RESET = '[FOLLOW UP ADD EDIT] ON_FORM_RESET';


export function getFollowUpDTOByID(followUpID) {

    let endpoint = Object.assign({}, followUpAppEndpoints.getFollowUpByID);
    endpoint.url = endpoint.url + '/' + followUpID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_FOLLOW_UP,
                payload: response.data.result
            })
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

export function reset() {
    return (dispatch, getState) => {
        dispatch({
            type: ON_RESET,
            payload: {}
        })
    };
}

export function onFormReset() {
    return (dispatch, getState) => {
        dispatch({
            type: ON_FORM_RESET,
            payload: {}
        })
    };
}

export function saveUpdateFollowUp(data) {
    const request = dataService.post(followUpAppEndpoints.saveOrUpdateFollowUp, data);

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


