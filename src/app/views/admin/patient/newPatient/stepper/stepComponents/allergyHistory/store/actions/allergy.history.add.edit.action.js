import dataService from "../../../../../../../../../services/dataService";
import selectAllergyHistoryAppEndpoints from "./allergy.app.end.points";

export const ON_ADD_EDIT_FORM_CHANGE = '[ALLERGY HISTORY ] ON_ADD_EDIT_FORM_CHANGE';
export const GET_ALLERGY_HISTORY = '[ALLERGY HISTORY] GET_ALLERGY_HISTORY';
export const ON_SAVE_ALLERGY_HISTORY = '[ALLERGY HISTORY] ON_SAVE_ALLERGY_HISTORY';
export const ON_RESET_FORM = '[ALLERGY HISTORY] ON_RESET_FORM';
export const ON_SET_ALLERGY_HISTORY_FORM = '[ALLERGY HISTORY] ON_SET_ALLERGY_HISTORY_FORM';
export const ON_RESET_ALLERGY_HISTORY = '[ALLERGY HISTORY] ON_RESET_ALLERGY_HISTORY';


export function getAllergyHistoryByID(patientComplainID) {
    let endpoint = Object.assign({}, selectAllergyHistoryAppEndpoints.getAllergyHistoryByID);
    endpoint.url = endpoint.url + '/' + patientComplainID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_ALLERGY_HISTORY,
                payload: response.data.result
            })
        );
    };
}


export function saveOrUpdateAllergyHistory(data) {
    const request = dataService.post(selectAllergyHistoryAppEndpoints.saveOrUpdateAllergyHistory, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: ON_SAVE_ALLERGY_HISTORY,
                    payload: response.data.result
                });
            }
        );
    };
}

export function saveOrUpdateAllergyHistoryWithMessage(data) {
    const request = dataService.post(selectAllergyHistoryAppEndpoints.saveOrUpdateAllergyHistoryWithMessage, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: ON_SAVE_ALLERGY_HISTORY,
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


export function onResetForm() {
    return (dispatch, getState) => {
        return dispatch({
            type: ON_RESET_FORM,
            payload: {}
        })
    };
}


export function onResetPatrintComplain() {

    return (dispatch, getState) => {
        return dispatch({
            type: ON_RESET_ALLERGY_HISTORY,
            payload: {}
        })
    };
}

export function onSetAllergyHistoryToForm(data) {

    return (dispatch, getState) => {
        return dispatch({
            type: ON_SET_ALLERGY_HISTORY_FORM,
            payload: data
        })
    };
}

