import dataService from "../../../../../../../../../services/dataService";
import patientAppEndpoints from "./patient.register.app.endpoints";

export const ON_ADD_EDIT_FORM_CHANGE = '[PATIENT ADD EDIT] ON_ADD_EDIT_FORM_CHANGE';
export const ON_SAVE_UPDATE = '[PATIENT ADD EDIT] ON_SAVE_UPDATE';
export const ON_RESET_FORM_DATA = '[PATIENT ADD EDIT] ON_RESET_FORM_DATA';
export const GET_PATIENT = '[PATIENT ADD EDIT] GET_PATIENT';
export const ON_RESET_PATIENT_DATA = '[PATIENT ADD EDIT] ON_RESET_PATIENT_DATA';


export function onFormChange(data) {
    return (dispatch, getState) => {
        dispatch({
            type: ON_ADD_EDIT_FORM_CHANGE,
            payload: data
        })
    };
}

export function saveOrUpdatePatient(data) {
    const request = dataService.post(patientAppEndpoints.saveOrUpdatePatient, data);

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

export function reset() {
    return (dispatch, getState) => {
        dispatch({
            type: ON_RESET_FORM_DATA,
            payload: {}
        })
    };
}

export function onResetPatientData() {
    return (dispatch, getState) => {
        dispatch({
            type: ON_RESET_PATIENT_DATA,
            payload: {}
        })
    };
}

export function getPatientDTOByID(patientID) {

    let endpoint = Object.assign({}, patientAppEndpoints.getPatientDTOByID);
    endpoint.url = endpoint.url + '/' + patientID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PATIENT,
                payload: response.data.result
            })
        );
    };
}

export function setPatient(data) {
    return (dispatch, getState) => {
        dispatch({
            type: GET_PATIENT,
            payload: data
        })
    };
}