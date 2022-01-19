import dataService from "../../../../../../../../../services/dataService";
import patientAppEndpoints from "./patient.register.app.endpoints";
import {ON_SAVE_UPDATE} from "./patient.register.app.add.edit.action";

export const ON_SEARCH_FORM_CHANGE = '[PATIENT SEARCH] ON_SEARCH_FORM_CHANGE';
export const ON_RESET_SEARCH_DATA = '[PATIENT SEARCH] ON_RESET_SEARCH_DATA';

export function searchPatient(data) {

    const request = dataService.post(patientAppEndpoints.searchPatient, data);

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
            type: ON_SEARCH_FORM_CHANGE,
            payload: data
        })
    };
}


export function onResetSearchForm() {
    return (dispatch, getState) => {
        dispatch({
            type: ON_RESET_SEARCH_DATA,
            payload: {}
        })
    };
}